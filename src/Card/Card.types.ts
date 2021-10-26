import { ImageProps } from "../Image";

export interface CardProps {

    /**
     * Image Content Item
     */
    image?: ImageProps;

    /**
     * Title of the Card
     */
    cardName?: string;

    /**
     * Description
     */
    description?: string;

    /**
     * Call-to-action Links
     */
    links?: any[];
}
