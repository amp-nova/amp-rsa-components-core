// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import CardList from "./CardList";
import { CardListProps } from "./CardList.types";

describe("Test Component", () => {
  let props: CardListProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<CardList {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("CardList");

    expect(component).toHaveTextContent("harvey was here");
  });
});
