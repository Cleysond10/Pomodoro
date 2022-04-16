import React from "react";
import { render } from "@testing-library/react";
import Timer from "./Timer";

describe("test Timer component", () => {
  it("Verify title content", () => {
    const { getByText } = render(<Timer />);

    expect(getByText("WELCOME TO YOUR POMODORO APP!")).toBeTruthy();
  });

  it("Verify counter content", () => {
    const { getByText } = render(<Timer />);

    expect(getByText("INICIAR POMODORO")).toBeTruthy();
  });
});
