// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import FAQ from "./FAQ";
import { FAQProps } from "./FAQ.types";

describe("FAQ Component", () => {
  let props: FAQProps;

  beforeEach(() => {
    props = {
      "items": [
        {
            "answer": "Answer 1",
            "question": "Question 1"
        },
        {
            "answer": "Answer 2",
            "question": "Question 2"
        }
      ],
      "header": "Test FAQ"
    };
  });

  const renderComponent = () => render(<FAQ {...props} />);

  it("should render Questions & Answers correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("FAQ");

    expect(component).toHaveTextContent("Question 1");
    expect(component).toHaveTextContent("Question 2");
    expect(component).toHaveTextContent("Answer 1");
    expect(component).toHaveTextContent("Answer 2");
  });
});
