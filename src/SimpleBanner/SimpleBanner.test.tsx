// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import SimpleBanner from "./SimpleBanner";
import { SimpleBannerProps } from "./SimpleBanner.types";

describe("Test Component", () => {
  let props: SimpleBannerProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<SimpleBanner {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("SimpleBanner");

    expect(component).toHaveTextContent("harvey was here");
  });
});
