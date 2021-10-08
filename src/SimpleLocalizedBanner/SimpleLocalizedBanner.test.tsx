// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import SimpleLocalizedBanner from "./SimpleLocalizedBanner";
import { SimpleLocalizedBannerProps } from "./SimpleLocalizedBanner.types";

describe("Test Component", () => {
  let props: SimpleLocalizedBannerProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<SimpleLocalizedBanner {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("SimpleLocalizedBanner");

    expect(component).toHaveTextContent("harvey was here");
  });
});
