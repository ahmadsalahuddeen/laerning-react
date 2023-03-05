import { useState } from "react";   

export const Message = ()=>{
   const onClickHandler = (event, count=1)=> {
    console.log('hi button',count , event)
   }
return (

<>


<button onClick={(event) => onClickHandler(event, 5)}>
    action
</button>
<button onClick={(event) => onClickHandler(event)}>
    action
</button>
</>
)
}