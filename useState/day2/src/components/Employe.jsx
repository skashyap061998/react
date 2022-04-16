
import React from "react"
import Card from "./Card"
const data = {
    name:"Shubham",
    gender:"Male",
    qualification:"pg",
    organisation:"Masai",
    imgURL:"https://ca.slack-edge.com/T02QFJUB5DF-U02QYMQGP9C-22d3037e8fe5-512"

}


function Employe(){

    return (
        <>
        {/* <Card studentdata ={data}/> //this is one method to send data  */}

        <Card {...data}/> {/*if we console. this data in Card.jss page then it wil show us the above data  */}
        </>



    )
}
export default Employe