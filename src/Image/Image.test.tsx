// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import { Image } from "./Image";
import { ImageProps } from "./Image.types";

describe("Test Component", () => {
  let props: ImageProps;

  beforeEach(() => {
    props = {
      image: {
          id: "c3f7e406-dc42-41aa-9e85-4b1e8398face",
          name: "img080831_4",
          endpoint: "retaildemo",
          defaultHost: "1fc8gy5fbd65s1ahl7m03eapcf.staging.bigcontent.io"
      },
      imageAltText: "New Pant"
    };
  });

  const renderComponent = () => render(<Image {...props} />);

  it("should render New Pant text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Image-ImgTag");

    expect(component).toHaveAttribute("alt", "New Pant");
  });
});
