import styled from "./textarea.module.css"

function TextArea(props){


    return(
        <div className={styled.TextArea}>
            <label>{props.label}</label>
            <textarea onChange={props.handelChange}></textarea>
        </div>
    )
}


export default TextArea;