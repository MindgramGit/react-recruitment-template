import { Helmet } from "react-helmet"

export function MissingPage() {
    return (
        <div>
            <Helmet>
                <title>Page not found</title>
            </Helmet>
            <div>MissingPage</div>
        </div>
    )
}
