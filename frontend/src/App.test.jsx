import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./components/Timer";

describe("test App home page", () => {
  it("Verify button content", () => {
    render(<Button />);

    const buttonMock = screen.getByTestId("button_test").textContent;

    expect(buttonMock).toContain(" INICIAR POMODORO ");
  });
});
