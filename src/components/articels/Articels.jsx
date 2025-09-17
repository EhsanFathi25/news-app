import Navbar from "../navbar/Navbar";
import styled from "./articels.module.css";
import { Link } from "react-router-dom";
function Articels(props) {
    return (

        <div className={styled.articels}>
            <img src={props.articel.imgUrl} />
            <Link to="/article">
                <h4>{props.articel.title}</h4>
            </Link>
            <p>زمان خواندن {props.articel.readingTime} دقیقه</p>
        </div>




    )
}

export default Articels;