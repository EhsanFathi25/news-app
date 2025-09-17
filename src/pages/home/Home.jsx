import Navbar from "../../components/navbar/Navbar"
import styled from "./home.module.css";
import Articels from "../../components/articels/Articels"
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";

function Home() {
    const [articels, setArticels] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axios.get("http://localhost:8001/articels")
            .then((result) => {
                setArticels(result.data)
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false)
            });
    }, [])


    return (
        <div>
            <Navbar title="دی جی شاپ" />
            <div className="container">
                
                <h2 className={styled.title}>
                    مقالات
                </h2>
                {isLoading ? <Spinner /> : <div className={styled.articelWarapper}>
                    {articels.map((data) => (

                        <Link to={`/article/${data.id}`}>
                            <Articels key={data.id} articel={data} />
                        </Link>

                    ))}
                </div>}

                
            </div>
            <Footer />
        </div>

    )
}

export default Home;