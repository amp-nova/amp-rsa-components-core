// Generated with util/create-component.js
export interface BannerProps {

    /**
     * Image object
     */
    image?: any;
    
    /**
     * Info Panel opacity
     */
    opacity?: number;
    
    /**
     * Banner text positioning
     */
    textPositioning?: {
        textPositionHorizontal: 'left' | 'center' | 'right';
        textPositionVertical: 'top' | 'middle' | 'bottom';
    };

    /**
     * Banner texts
     */
    bannerText?: {
        header?: string;
        subheader?: string;
        description?: string;
    };

    /**
     * Call-to-Action settings
     */
    ctaSettings?: {
        buttonText?: string;
        linkUrl?: string;
    };
}
