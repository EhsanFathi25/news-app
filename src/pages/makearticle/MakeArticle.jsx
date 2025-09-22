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

    // const handelButton = () => {
    //     axios.post("http://localhost:8001/articels", {
    //         id: Date.now(),
    //         imgUrl: articleMake.img ,
    //         title: articleMake.title,
    //         readingTime: articleMake.readingTime,
    //         date: articleMake.date,
    //         othor: articleMake.othar,
    //         content: articleMake.text,
            

    //     })
    // }

    const handelButton = async () => {
    
        try {
          const response = await axios.post("http://localhost:8001/articels", {
            id: Date.now(),
            imgUrl: articleMake.img,
            title: articleMake.title,
            readingTime: articleMake.readingTime,
            date: articleMake.date,
            author: articleMake.author,
            content: articleMake.text,
          });
          alert("مقاله با موفقیت ثبت شد!");
        } catch (error) {
          alert("خطا در ثبت مقاله");
          console.error(error);
        }
      };

    console.log(articleMake);


    return (
        <>
            <Navbar title="دی جی شاپ" />
            <div className={styled.MakeArticle}>
                <div className="container">
                    <h1>ساخت مقاله</h1>
                    <Input className={styled.formField} label="عنوان" name="title" handelChange={handelChangePage} />
                    <Input className={styled.formField} label="تاریخ" name="date" handelChange={handelChangePage} />
                    <Input className={styled.formField} label="نویسنده" name="othar" handelChange={handelChangePage} />
                    <Input className={styled.formField} label="مدت زمان خواندن" name="readingTime" handelChange={handelChangePage} />
                    <Input className={styled.formField} label="آدرس عکس(URL)" name="img" handelChange={handelChangePage} />
                    <TextArea className={styled.formField} label="متن" handelChange={handelChangeTextArea} />
                    <div className={styled.wrapperButton}>
                        <button onClick={handelButton}>تایید</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )}


export default MakeArticle;