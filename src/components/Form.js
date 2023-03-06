import { useState } from "react"
export const Form = ()=>{
    const [message, setUsername] = useState('')
    const handleSubmit = (event)=>{
        event.preventDefault()
alert(`form Data:${message}`)
window.location.reload(true)
    }
    return <form onSubmit={handleSubmit}>
        <div>
            <label></label>
            <input type='text' value={message} onChange={(event)=> setUsername(event.target.value)}  />
            <button type="submit">submit</button>
        </div>
    </form>
} 