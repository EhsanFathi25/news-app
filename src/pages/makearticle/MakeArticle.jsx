import { useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import styled from "./makearticle.module.css"
import Input from "../../components/input/Input";
import TextArea from "../../components/textarea/Textarea";
import axios from "axios";


function MakeArticle() {
    const [articleMake, setArticleMake] = useState({
        title: "",
        date: "",
        othar: "",
        readingTime: "",
        text: "",
        img: "",
    })

    const handelChangePage = (e) => {
        setArticleMake((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const handelChangeTextArea = (e) => {
        setArticleMake((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const handelButton = () => {
        axios.post("http://localhost:8001/articels", {
            id: 6,
            imgUrl: articleMake.img ,
            title: articleMake.title,
            readingTime: articleMake.readingTime,
            date: articleMake.date,
            othor: articleMake.othar,
            content: articleMake.text,
            

        })
    }

    console.log(articleMake);


    return (
        <>
            <Navbar title="دی جی شاپ" />
            <div className={styled.MakeArticle}>
                <div className="container">
                    <h1>ساخت مقاله</h1>
                    <Input label="عنوان" name="title" handelChange={handelChangePage} />
                    <Input label="تاریخ" name="date" handelChange={handelChangePage} />
                    <Input label="نویسنده" name="othar" handelChange={handelChangePage} />
                    <Input label="مدت زمان خواندن" name="readingTime" handelChange={handelChangePage} />
                    <Input label="آدرس عکس(URL)" name="img" handelChange={handelChangePage} />
                    <TextArea label="متن" handelChange={handelChangeTextArea} />
                    <div className={styled.wrapperButton}>
                        <button onClick={handelButton}>تایید</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default MakeArticle;