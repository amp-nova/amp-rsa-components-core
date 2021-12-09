import { CardProps } from '../Card/Card.types';
export interface CardListProps {
    /**
     * Card List Header
     */
    header?: string;
    /**
     * List of Cards
     */
    cards?: CardProps[];
}
