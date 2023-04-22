import React from "react";
import ReactDOM from "react-dom/client";
import theme from "./chakra-ui/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import router from "./navigation/Router";
import App from "./App";
import DataProvider from "./context/DataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <DataProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </DataProvider>
  </ChakraProvider>
);
