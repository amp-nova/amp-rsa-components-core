// Generated with util/create-component.js
import React, { FC } from "react";
import { Link, Typography, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ReactMarkdown from 'markdown-to-jsx';
import { ExpandMore } from '@material-ui/icons';

import { FAQProps } from "./FAQ.types";

import "./FAQ.scss";

const FAQ: FC<FAQProps> = ({
    header = "FAQ",
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
                component: () => (
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
                    items && items.map((item: any, i: number) => {
                        return <div key={i}>
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