// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import { CardList }  from "./CardList";
import { CardListProps } from "./CardList.types";

describe("Test Component", () => {
  let props: CardListProps;

  beforeEach(() => {
    props = {
    "cards": [
      {
        "image": {
          "image": {
            "id": "94cc2773-7190-4df3-8f0f-8829427cdb11",
            "name": "210106_Wellness_FeaturedImage",
            "endpoint": "amprsa",
            "defaultHost": "1kwj9tiju6tgz16c4lq8hs7n9r.staging.bigcontent.io"
          },
          "imageAltText": "Wake up and move your body"
        },
        "links": [
          {
            "label": "Explore the edit",
            "type": "URL",
            "value": "https://www.fenwick.co.uk/featured/gymwear-and-fitness-essentials"
          }
        ],
        "cardName": "Wake up and move your body",
        "description": "Whether you’re looking to kickstart your New Year’s resolution or are searching for ways to add health and wellness into your lifestyle, explore our Gymwear and Fitness Essentials edit. Filled with gym clothing, accessories, equipment and more."
      },
      {
        "image": {
          "image": {
            "_meta": {
              "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
            },
            "id": "7590dbb7-8378-4c4f-8cc5-7191c6c40871",
            "name": "clinique-brand-image",
            "endpoint": "amprsa",
            "defaultHost": "1kwj9tiju6tgz16c4lq8hs7n9r.staging.bigcontent.io"
          },
          "imageAltText": "Maximise your skincare with Clinique"
        },
        "links": [
          {
            "label": "Shop Clinique",
            "type": "URL",
            "value": "https://www.fenwick.co.uk/brands/clinique"
          }
        ],
        "cardName": "Maximise your skincare with Clinique",
        "description": "Clinique is offering you a special treat – simply purchase any 2 Clinique products, one to be Skincare or Foundation and receive an exclusive 7-piece Clinique Beauty Bag as a complimentary gift. With everything from skincare to bath & bodycare, shop to discover effective formulas that deliver remarkable results."
      }
    ]
  };
  });

  const renderComponent = () => render(<CardList {...props} />);

  it("should render Shop Clinique text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("CardList");

    expect(component).toHaveTextContent("Shop Clinique");
  });
});
