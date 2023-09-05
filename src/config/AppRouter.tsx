import { Route, Routes } from "react-router-dom"

import { HomePage } from "pages/HomePage"
import { MissingPage } from "pages/MissingPage"

export function AppRouter() {
    return (
        <Routes>
            <Route element={<HomePage />} index />
            <Route element={<MissingPage />} path="*" />
        </Routes>
    )
}
