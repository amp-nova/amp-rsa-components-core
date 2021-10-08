// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Video from "./Video";
import { VideoProps } from "./Video.types";

describe("Test Component", () => {
  let props: VideoProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Video {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Video");

    expect(component).toHaveTextContent("harvey was here");
  });
});
