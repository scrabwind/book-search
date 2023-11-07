import React from "react"
import ReactDOM from "react-dom/client"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"

import "@/styles/normalize.css"
import "@/styles/globals.css"

import { App } from "./App"

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: Infinity } }
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  </React.StrictMode>
)
