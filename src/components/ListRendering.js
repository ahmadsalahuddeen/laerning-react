import  './stylesheet.css'
export const ListRendering = ()=>{
    const nameArray = ['salah', 'safwan', 'abindas']
    let heading = {
        fontSize: '45px ',
        color: 'blue'
    }
    return(
        <>
        {nameArray.map((names)=>{
            return <h1 style={heading} key={names}>{names}</h1>
        }) }
    </>
    )
}