// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import TestComp from "./TestComp";
import { TestCompProps } from "./TestComp.types";

describe("Test Component", () => {
  let props: TestCompProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<TestComp {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("TestComp");

    expect(component).toHaveTextContent("harvey was here");
  });
});
