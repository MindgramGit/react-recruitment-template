import { renderHook, RenderHookOptions } from "@testing-library/react"

import { AppProviders } from "../mocks/AppProviders"

export const renderHookWithAppProviders = <TProps, TResult>(
    hook: (initialProps: TProps) => TResult,
    options?: Omit<RenderHookOptions<TProps>, "wrapper">
) => renderHook(hook, { wrapper: AppProviders, ...options })
