import "./mocks/env"

import { server } from "./mocks/server"

vi.mock("react-router-dom")

beforeAll(() => server.listen({ onUnhandledRequest: "error" }))
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
