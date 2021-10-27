// Generated with util/create-component.js
import React from "react";
import { Box, Button, Typography } from '@material-ui/core';
import { Image } from '../Image';

import { BannerProps } from "./Banner.types";

import "./Banner.scss";

export const Banner: React.FC<BannerProps> = ({
        image,
        opacity = 0.9,
        textPositioning = { textPositionHorizontal: 'center', textPositionVertical: 'middle'},
        bannerText,
        ctaSettings
    }) => {
        const alignement = [ 'info-panel'];
        textPositioning?.textPositionHorizontal && alignement.push(textPositioning.textPositionHorizontal);
        textPositioning?.textPositionVertical && alignement.push(textPositioning.textPositionVertical);

        return (
            <Box className="container" data-testid="Banner">
                <Image {...image} />
                <Box className={alignement.join(" ")} style={{opacity, textAlign: 'left'}}>
                    {
                        bannerText?.header && (
                            <Typography variant="h2" component="h2">{bannerText.header}</Typography>
                        )
                    }
                    {
                        bannerText?.subheader && ( 
                            <Typography variant="h3" component="h3">{bannerText.subheader}</Typography>
                        )
                    }
                    {
                        bannerText?.description && ( 
                            <Typography variant="body1" component="p">{bannerText.description}</Typography>
                        )
                    }
                    {
                        ctaSettings?.buttonText && (
                            <Box style={{textAlign: 'right'}}>
                                <Button href={ctaSettings?.linkUrl}>{ctaSettings.buttonText}</Button>
                            </Box>
                        )
                    }
                </Box>
            </Box>
        );
}