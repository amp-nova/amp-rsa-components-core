// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import SplitBlock from "./SplitBlock";
import { SplitBlockProps } from "./SplitBlock.types";

describe("Test Component", () => {
  let props: SplitBlockProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<SplitBlock {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("SplitBlock");

    expect(component).toHaveTextContent("harvey was here");
  });
});
