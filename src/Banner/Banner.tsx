// Generated with util/create-component.js
import React from "react";

import { BannerProps } from "./Banner.types";

import "./Banner.scss";

export const Banner: React.FC<BannerProps> = ({ foo }) => (
    <div data-testid="Banner" className="foo-bar">{foo}</div>
);