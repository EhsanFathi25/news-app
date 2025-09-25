import Navbar from "../../components/navbar/Navbar";
import styled from "./article.module.css"
import pic from "./../../assets/img/img.jpg"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/spinner/Spinner";
import Footer from "../../components/footer/Footer";
function Article() {
    const [article, setArticle] = useState({})
    const params = useParams()
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        setIsLoading(true)
        axios.get(`http://localhost:8001/articels/${params.id}`)
            .then((result) => {
                setArticle(result.data)
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false)
            });
    }, [])

    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        if (!liked) {
            setLikes(likes + 1);
            setLiked(true);
        } else {
            setLikes(likes - 1);
            setLiked(false);
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
                            <div className={styled.likeSection}>
                                <button onClick={handleLike} className={liked ? styled.liked : ""}>
                                    ❤️ {likes}
                                </button>
                            </div>
                            <p>{article.content}</p></>}


                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Article;