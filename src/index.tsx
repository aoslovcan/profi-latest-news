import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.scss";
import reportWebVitals from "./reportWebVitals";
import { Layout } from "./Layout";
import { BrowserRouter } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const query = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={query}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
