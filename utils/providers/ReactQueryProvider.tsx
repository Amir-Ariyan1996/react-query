"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { useEffect, useState } from "react";

// lazy loading reactQueryDevtools in production
const ReactQueryDevtoolsProduction = React.lazy(() =>
    import('@tanstack/react-query-devtools/production').then((d) => ({
        default: d.ReactQueryDevtools,
    })),
)
export default function ReactQueryProvider({ children }: { children: React.ReactNode }) {
    const [client] = useState(new QueryClient());
    const [showDevtools, setShowDevtools] = useState(false)

    useEffect(() => {
        // @ts-expect-error
        window.toggleDevtools = () => setShowDevtools((old) => !old)
    }, [])

    return (
        <QueryClientProvider client={client}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
            {showDevtools && (
                <React.Suspense fallback={null}>
                    <ReactQueryDevtoolsProduction />
                </React.Suspense>
            )}
        </QueryClientProvider>
    );
}