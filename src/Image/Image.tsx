// Generated with util/create-component.js
import React, { FC } from "react";

import { ImageProps } from "./Image.types";

import "./Image.scss";
import { Box } from "@material-ui/core";

export const Image: FC<ImageProps> = ({ 
    display,
    image,
    imageAltText,
    seoText,
    query
 }) => {

    if (!image) {
        return null;
    }

    const getImageHost = (host: string) => {
        if (host === 'i1.adis.ws') {
            return 'cdn.media.amplience.net';
        }
        return host;
    }

    const buildSrcUrl = ({ width, poiAspect, format }: any) => {
        let baseUrl = `https://${getImageHost(image.defaultHost)}/i/${image.endpoint}/${encodeURIComponent(image.name)}`;
        if (seoText) {
            baseUrl += `/${encodeURIComponent(seoText)}`
        };
        if (format) {
            baseUrl += `.${format}`;
        }
        let queryString = `w=${width}&upscale=false&strip=true`;
        if (display == 'Point of Interest' && poiAspect) {
            queryString += `&$poi$&aspect=${poiAspect}`
        }
        if (query) {
            queryString += `&${query}`;
        }
        return `${baseUrl}?${queryString}`;
    };

    const source = ({ minWidth, maxWidth, width, highDensityWidth, format, poiAspect }: any) => {
        return <source srcSet={`${buildSrcUrl({ width, format, poiAspect })} 1x, ${buildSrcUrl({ width: highDensityWidth, format, poiAspect })}`}
            media={minWidth ? `(min-width: ${minWidth}px)` : (maxWidth ? `(max-width: ${maxWidth}px)` : undefined)}
            type={format ? `image/${format}` : undefined} />;
    };

    const imageTag = display == 'Static' ? (
        <picture className="amp-dc-image">
            <img data-testid="Image-ImgTag" loading="lazy" src={`//${image.endpoint}.a.bigcontent.io/v1/static/${image.name}`} className="amp-dc-image-pic" alt={imageAltText} />
        </picture>
    ) : (
            <picture className="amp-dc-image">
                {source({ minWidth: '1280', width: '1600', highDensityWidth: '3200', format: 'webp', poiAspect: '2:1' })}
                {source({ minWidth: '1280', width: '1600', highDensityWidth: '3200', poiAspect: '2:1' })}

                {source({ minWidth: '1024', width: '1280', highDensityWidth: '2560', format: 'webp', poiAspect: '2:1' })}
                {source({ minWidth: '1024', width: '1280', highDensityWidth: '2560', poiAspect: '2:1' })}

                {source({ minWidth: '768', width: '1024', highDensityWidth: '2048', format: 'webp', poiAspect: '1.5:1' })}
                {source({ minWidth: '768', width: '1024', highDensityWidth: '2048', poiAspect: '1.5:1' })}

                {source({ maxWidth: '768', width: '768', highDensityWidth: '1536', format: 'webp', poiAspect: '1:1' })}
                {source({ maxWidth: '768', width: '768', highDensityWidth: '1536', poiAspect: '1:1' })}

                <img data-testid="Image-ImgTag" loading="lazy" src={buildSrcUrl({ width: '1600' })} className="amp-dc-image-pic" alt={imageAltText} />
            </picture>
        );

    return <Box data-testid="Image" className="amp-dc-image-holder">
        {imageTag}
    </Box>
};