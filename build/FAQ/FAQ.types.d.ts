export interface FAQProps {
    /**
     * FAQ Header
     */
    header?: string;
    /**
     * List of Questions and Answers
     */
    items: {
        question: String;
        answer: String;
    }[];
}
