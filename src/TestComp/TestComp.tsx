// Generated with util/create-component.js
import React from "react";

import { TestCompProps } from "./TestComp.types";

import "./TestComp.scss";

const TestComp: React.FC<TestCompProps> = ({ foo }) => (
    <div data-testid="TestComp" className="foo-bar">{foo}</div>
);

export default TestComp;

