import { useState } from "react"

function Hello(props) {
    return <h1>SAlom {props.name}</h1>
}
function Counter() {
    const [son, setSon] = useState(0);

    return (
        <div>
            <h1>{son}</h1>
            <button onClick={() => setSon(son+1000000000000000000000)}>+</button>
            <button onClick={() => setSon(son-1000000000000000000000)}>-</button>
        </div>
    );
}
export {Hello, Counter};