// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import { Video } from "./Video";
import { VideoProps } from "./Video.types";

describe("Test Component", () => {
  let props: VideoProps;

  beforeEach(() => {
    props = {
      "video": {
          "name": "AnyaFinn-Shoppable",
          "endpoint": "amprsa",
          "defaultHost": "cdn.media.amplience.net"
      }
  };
  });

  const renderComponent = () => render(<Video {...props} />);

  it("should render AnyaFinn-Shoppable text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Video");

    expect(component).toContainHTML("<video")
  });
});
