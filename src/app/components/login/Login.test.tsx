import React from "react";
import { render } from "@testing-library/react";
import Login from "./Login";

const component = () => {
  return <Login></Login>;
};
test("should render login component", () => {
  render(<>{component()}</>);
});
