// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import { Banner } from "./Banner";
import { BannerProps } from "./Banner.types";

describe("Test Component", () => {
  let props: BannerProps;

  beforeEach(() => {
    props = {
      "image": {
          "image": {
              "_meta": {
                  "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
              },
              "name": "banner-text-top-right-2-1-large-desktop",
              "endpoint": "amprsa",
              "defaultHost": "cdn.media.amplience.net"
          },
          "imageAltText": "New Collection",
          "seoText": "new-collection, summer"
      },
      "opacity": 0.9,
      "textPositioning": {
          "textPositionHorizontal": "center",
          "textPositionVertical": "middle"
      },
      "bannerText": {
          "header": "New Collection",
          "subheader": "Sub-Header",
          "description": "Description"
      },
      "ctaSettings": {
          "buttonText": "Discover Now!",
          "linkUrl": "/"
      }
  };
  });

  const renderComponent = () => render(<Banner {...props} />);

  it("should render New Collection text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Banner");

    expect(component).toHaveTextContent("New Collection");
  });
});
