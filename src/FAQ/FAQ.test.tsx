// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import FAQ from "./FAQ";
import { FAQProps } from "./FAQ.types";

describe("Test Component", () => {
  let props: FAQProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<FAQ {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("FAQ");

    expect(component).toHaveTextContent("harvey was here");
  });
});
