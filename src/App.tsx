import { Helmet } from "react-helmet"
import { BrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
// eslint-disable-next-line import/no-extraneous-dependencies
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import { AppRouter } from "config/AppRouter"

import { GlobalStyle } from "styles/global"

export const appQueryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 30000,
        },
    },
})

export function App() {
    return (
        <QueryClientProvider client={appQueryClient}>
            <Helmet titleTemplate="Mindgram - %s" />
            <GlobalStyle />
            <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </QueryClientProvider>
    )
}
