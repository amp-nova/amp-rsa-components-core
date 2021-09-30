import { Meta } from '@storybook/react/types-6-0';
import React from "react";
import FAQ from "./FAQ";

export default {
    title: "FAQ",
    component: FAQ
} as Meta;

const FAQData = {
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

export const Default = (args) =>  (<FAQ {...args} />);
Default.args = FAQData;