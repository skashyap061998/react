import {useState} from "react"

function Button (){
const [count,setCount] = useState(0)
const handleChange = ()=>{
setCount( (pervState)=> pervState+1)
    
}
const handleChange1 = ()=>{
setCount( (pervState)=> pervState-1)
    
}


return (

<>
<h1>{count}</h1>
<button onClick = {handleChange}>Add</button>
<button onClick = {handleChange1}>reduce</button>


</>

)
}

export default Button