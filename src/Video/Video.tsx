// Generated with util/create-component.js
import React from "react";

import { VideoProps } from "./Video.types";

import "./Video.scss";
import { Box } from "@material-ui/core";

export const Video: React.FC<VideoProps> = ({ video }) => {
    if (!video) {
        return null;
    }

    return (
        <Box data-testid="Video" className='amp-dc-video-wrap'>
            <video className="amp-dc-video" poster={`https://${video.defaultHost}/v/${video.endpoint}/${video.name}?protocol=https`}
                controls src={`https://${video.defaultHost}/v/${video.endpoint}/${video.name}/mp4_720p?protocol=https`}>
                <source src={`https://${video.defaultHost}/v/${video.endpoint}/${video.name}/mp4_720p?protocol=https`}
                    data-res="High" data-bitrate="2119" data-label="High"
                    type="video/mpeg4" />

                <source src={`https://${video.defaultHost}/v/${video.endpoint}/${video.name}/mp4_480p?protocol=https`}
                    data-res="Medium" data-bitrate="689" data-label="Medium"
                    type="video/mpeg4" />

                <source src={`https://${video.defaultHost}/v/${video.endpoint}/${video.name}/webm_480p?protocol=https`}
                    data-res="Medium" data-bitrate="624" data-label="Medium"
                    type="video/webm" />
            </video>
            <Box className="pause-button inactive"></Box>
        </Box>
    )
}

export default Video;

