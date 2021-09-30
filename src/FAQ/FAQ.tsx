// Generated with util/create-component.js
import React from "react";
import { Link, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ReactMarkdown from 'markdown-to-jsx';
import { ExpandMore } from '@mui/icons-material';

import { FAQProps } from "./FAQ.types";

import "./FAQ.scss";

const FAQ: React.FC<FAQProps> = ({
    header,
    items = []
}) => {
    const options = {
        overrides: {
            h1: { component: Typography, props: { variant: 'h1' } },
            h2: { component: Typography, props: { variant: 'h2' } },
            h3: { component: Typography, props: { variant: 'h3' } },
            h4: { component: Typography, props: { variant: 'h4' } },
            h5: { component: Typography, props: { variant: 'h5' } },
            h6: { component: Typography, props: { variant: 'h6' } },
            p: { component: Typography, props: { variant: 'body1', gutterBottom: true } },
            a: { component: Link },
            li: {
                component: ({ ...props }) => (
                    <li>
                        <Typography variant="body1" component="span"/>
                    </li>
                )
            }
        }
    };

    return (
        <div data-testid="FAQ" className="faq">
            <Typography variant="h3" component="h3" align="center">{header}</Typography>
            <div style={{ marginTop: 30 }}>
                {
                    items && items.map((item: any) => {
                        return <div>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                    <Typography variant="h4" component="p">{item.question}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {
                                        item.answer && <ReactMarkdown options={options}>{item.answer}</ReactMarkdown>
                                    }
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default FAQ;