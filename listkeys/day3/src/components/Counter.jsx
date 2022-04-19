import React from 'react'

export const Counter = () => {
    const [count1, setCount1] = React.useState(0)
    const [count2, setCount2] = React.useState(0)


// whenever this componented is mounted and unmounted then also this thing wll work any state in this component,
//  then this callback function
// when the component is render and un mounted
// console.log(1)
//     useEffect(()=>{
// console.log(2)
        
//         console.log("mounted");
//         return ()=>{
//             console.log("unmounted");
//         };

//     });
//     console.log(3)
// the order of this 1,2,3 is 1,3,2
// 1st of all this function will be exicuted then the return function will exicuted
// for infomation see the react hook hook lifecycle



    // this will run only when the initialy the component is mounted and unmounted
    // useEffect(()=>{
    //     console.log("mounted []");
    //     return ()=>{
    //         console.log("unmounted []");
    //     };

    // },[]);

// this will run when component is mounted, whenever the value of the  count1 variable is changedcd todo
    // useEffect(()=>{
    //     console.log("mounted [count1]");
    //     return ()=>{
    //         console.log("unmounted [count1]");
    //     };
    // },[count1]);
    


return (
    <div>

<h1>Counter:{count1}:{count2}</h1>
<div>
<button onClick={()=> setCount1(count1+1)}>Increment</button>
<button onClick={()=> setCount1(count1-1)}>Decrement</button>

</div>
<div>
<button onClick={()=> setCount2(count2+1)}>Increment</button>
<button onClick={()=> setCount2(count2-1)}>Decrement</button>

</div>

    </div>
    

)
}

