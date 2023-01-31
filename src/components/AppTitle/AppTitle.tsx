import React from "react";

type AppTitlePropsType={
    title: string
}

export function AppTitle(props: AppTitlePropsType) {
    console.log('AppTitle rendering')
    return <h1>{props.title}</h1>
}