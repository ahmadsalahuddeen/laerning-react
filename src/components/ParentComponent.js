import { ChildComponent } from "./ChildComponent"

export const ParentComponent = () => {
    const greetFunction = (msg)=> {
        alert(`greeting message, ${msg}`)
}
    return (
        <ChildComponent greetFunction = {greetFunction} />
    )
}