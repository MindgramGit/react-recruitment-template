import { Helmet } from "react-helmet"
import { Component } from "components/Component"

export function HomePage() {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div>HomePage</div>
            <Component />
        </div>
    )
}
