import Navbar from "../../components/navbar/Navbar";
import styled from "./article.module.css"
import pic from "./../../assets/img/img.jpg"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/spinner/Spinner";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
function Article() {
    const [article, setArticle] = useState({})
    const params = useParams()
    const [isLoading, setIsLoading] = useState(false)
    const articleUrl = `${window.location.origin}/article/${params.id}`;


    useEffect(() => {
        setIsLoading(true)
        axios.get(`http://localhost:8001/articels/${params.id}`)
            .then((result) => {
                setArticle(result.data)
                setLikes(result.data.likes || 0);
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false)
            });
    }, [])

    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);

    const handleLike = async () => {
        const newLikes = liked ? likes - 1 : likes + 1;

        try {
            await axios.patch(`http://localhost:8001/articels/${params.id}`, {
                likes: newLikes,
            });
            setLikes(newLikes);
            setLiked(!liked);
        } catch (error) {
            console.error("خطا در ذخیره لایک:", error);
        }
    };




    return (
        <div>
            <Navbar title="خبر" />

            <div className={styled.articleWrapper}>
                <div className="container">
                    {isLoading ? <Spinner /> :
                        <><h1>{article.title}</h1>
                            <div className={styled.articleInfo}>
                                <span>تاریخ: {article.date}</span>
                                <span>نویسنده: {article.othor} </span>
                                <span>زمان خواندن {article.readingTime} دقیقه</span>
                            </div><img src={article.imgUrl} alt={article.title} />

                            <div className={styled.actionBar}>
                                <button onClick={handleLike} className={liked ? styled.liked : ""}>
                                    ❤️ {likes}
                                </button>

                                <div className={styled.shareButtons}>
                                    <a href={`https://wa.me/?text=${encodeURIComponent(articleUrl)}`} target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faWhatsapp} />
                                    </a>
                                    <a href={`https://t.me/share/url?url=${encodeURIComponent(articleUrl)}`} target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faTelegram} />
                                    </a>
                                    <button onClick={() => {
                                        navigator.clipboard.writeText(articleUrl);
                                        alert("لینک مقاله کپی شد!");
                                    }}>
                                        <FontAwesomeIcon icon={faLink} />
                                    </button>
                                </div>
                            </div>

                            <p>{article.content}</p></>}


                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Article;