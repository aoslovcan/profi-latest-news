import React from "react";
import App from "./App";
import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'

describe("App", () => {
    it("render", () => {
        render(<App/>)

        expect(screen.getByTestId("test")).toBeInTheDocument();
    })
})