// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import { Banner } from "./Banner";
import { BannerProps } from "./Banner.types";

describe("Test Component", () => {
  let props: BannerProps;

  beforeEach(() => {
    props = {
    };
  });

  const renderComponent = () => render(<Banner {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Banner");

    expect(component).toHaveTextContent("harvey was here");
  });
});
