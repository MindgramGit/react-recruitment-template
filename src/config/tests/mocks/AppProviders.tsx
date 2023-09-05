import { ReactNode } from "react"
import { BrowserRouter } from "react-router-dom"
import { QueryClientProvider } from "@tanstack/react-query"
import { appQueryClient } from "App"

import { GlobalStyle } from "styles/global"

type AppProvidersProps = {
    children: ReactNode
    withRouter?: boolean
}

export function AppProviders({ children, withRouter }: AppProvidersProps) {
    return (
        <QueryClientProvider client={appQueryClient}>
            <GlobalStyle />
            {withRouter ? <BrowserRouter>{children}</BrowserRouter> : children}
        </QueryClientProvider>
    )
}
