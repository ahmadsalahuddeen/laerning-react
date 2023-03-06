import React from 'react'
import { useEffect, useState } from 'react'
function PostList() {
const [title, setTitle] = useState('')    
const [body, setBody] = useState('')    
const [userId, setUserId] = useState('')    

const SubmitHandler = (event) =>{
  event.preventDefault()

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
        userId: userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
    .catch(err => console.log(err))
 
}

return <>
<form  onSubmit={SubmitHandler}>
<input placeholder='title' value={title}   onChange={(event)=> {setTitle(event.target.value)}} />
<input placeholder='body' value={body}     onChange={(event)=> {setBody(event.target.value)}} />
<input placeholder='userId' value={userId}  onChange={(event)=> {setUserId(event.target.value)}} />

<button type='text'>submit</button>
</form>

</>
}

export default PostList