import React from "react";

export function Rating() {
    console.log('Rating rendering')
    return (
        <>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </>
    );

}

function Star() {
    console.log('star rendering')
    return <div>star</div>
}