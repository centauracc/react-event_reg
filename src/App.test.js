import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("App", () => {
  it('should display "Upcoming Events" in the header', () => {
    const { getByText } = render(<App />);
    const headerText = getByText("Upcoming Events");
    expect(headerText).toBeInTheDocument();
  });

  it('should display a button with the text "Create"', () => {
    const { getByText } = render(<App />);
    const buttonText = getByText("Create");
    expect(buttonText).toBeInTheDocument();
  });

  it('should display an empty form when the "Create" button is clicked', () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText("Create"));
    expect(getByText("Id")).toBeInTheDocument();
    expect(getByText("Title")).toBeInTheDocument();
    expect(getByText("Day")).toBeInTheDocument();
    expect(getByText("Month")).toBeInTheDocument();
    expect(getByText("Year")).toBeInTheDocument();
    expect(getByText("Hour")).toBeInTheDocument();
    expect(getByText("Minute")).toBeInTheDocument();
    expect(getByText("Address")).toBeInTheDocument();
    expect(getByText("Postal Code")).toBeInTheDocument();
    expect(getByText("Description")).toBeInTheDocument();
    expect(getByText("Save")).toBeInTheDocument();
  });
});
