import React from "react";
import { render, screen } from "@testing-library/react";
import { Layout } from "./Layout";

describe("Layout", () => {
  it("render", () => {
    render(<Layout />);
    expect(screen.getByTestId("layout")).toBeInTheDocument();
  });
});
