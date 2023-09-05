import { ReactElement } from "react"
import { render, RenderOptions } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { AppProviders } from "../mocks/AppProviders"

export const renderWithAppProviders = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) => {
    window.history.pushState({}, "Test home", "/")

    return {
        user: userEvent.setup(),
        ...render(ui, { wrapper: ({ children }) => AppProviders({ children, withRouter: true }), ...options }),
    }
}
