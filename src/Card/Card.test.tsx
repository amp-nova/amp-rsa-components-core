// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import { Card } from "./Card";
import { CardProps } from "./Card.types";

describe("Test Component", () => {
  let props: CardProps;

  beforeEach(() => {
    props = {
      "links": [
        {
          "_meta": {
            "schema": "https://amp-rsa.amplience.com/link.json"
          },
          "label": "Explore the edit",
          "type": "URL",
          "value": "https://www.fenwick.co.uk/featured/gymwear-and-fitness-essentials"
        }
      ],
      "cardName": "Wake up and move your body",
      "description": "Whether you’re looking to kickstart your New Year’s resolution or are searching for ways to add health and wellness into your lifestyle, explore our Gymwear and Fitness Essentials edit. Filled with gym clothing, accessories, equipment and more."
    };
  });

  const renderComponent = () => render(<Card {...props} />);

  it("should render Wake up and move your body text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Card");

    expect(component).toHaveTextContent("Wake up and move your body");
  });
});
