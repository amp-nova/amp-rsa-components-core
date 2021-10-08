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
          _meta: {
              schema: "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
          },
          id: "c3f7e406-dc42-41aa-9e85-4b1e8398face",
          name: "img080831_4",
          endpoint: "retaildemo",
          defaultHost: "1fc8gy5fbd65s1ahl7m03eapcf.staging.bigcontent.io"
      }
    };
  });

  const renderComponent = () => render(<Image {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Image");

    expect(component).toHaveTextContent("harvey was here");
  });
});
