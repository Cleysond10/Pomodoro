import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("test App home page", () => {
  it("Verify button content", () => {
    render(<Button />);

    const button = screen.getByTestId("button").hasAttribute("type");

    expect(button).toBeTruthy();
  });
});
