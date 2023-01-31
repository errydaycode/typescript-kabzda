import React from "react";

function Star() {
    console.log('Star rendering')
    return (
        <span>star </span>
    )
}

export function Rating() {
    console.log('Rating rendering')
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}