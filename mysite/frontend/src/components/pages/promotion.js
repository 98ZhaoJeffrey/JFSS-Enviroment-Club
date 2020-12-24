import React, {useEffect} from "react";

function Promotions() {
    useEffect(() => {
        console.log("Getting data for resource")
        fetch('http://127.0.0.1:8000/api/resource-list/')
        .then(res => res.json())
        .then(data => console.log(data))
    })
    return(
        <div>
            <h1>test</h1>
        </div>
    )
}

export default Promotions