// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import { LocalizedBanner } from "./LocalizedBanner";
import { LocalizedBannerProps } from "./LocalizedBanner.types";

describe("Test Component", () => {
  let props: LocalizedBannerProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<LocalizedBanner {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("LocalizedBanner");

    expect(component).toHaveTextContent("harvey was here");
  });
});
