import React from "react"
import styles from "./Card.module.css"
const Card = (props)=>{
console.log(props)
const{name,organisation,qualification,gender,imgURL}=props
return (
<div className={styles.card}>
    <div className="left_Content">
        <img src={imgURL}/>
    </div>
    <div className="right_content">
    <h1 style={{color:"red",backgroundColor:"black"}}>Name : {name}</h1>
    <h1>Gender : {gender}</h1>

    </div>


</div>



)

}

export default Card