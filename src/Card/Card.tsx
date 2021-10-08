// Generated with util/create-component.js
import React from "react";

import { CardProps } from "./Card.types";

import "./Card.scss";

const Card: React.FC<CardProps> = ({ foo }) => (
    <div data-testid="Card" className="foo-bar">{foo}</div>
);

export default Card;

