// Generated with util/create-component.js
import React, { FC } from "react";
import { Link, makeStyles, Typography } from '@material-ui/core';
import ReactMarkdown from 'markdown-to-jsx';
import { TextProps } from './Text.types';

const useStyles = makeStyles({
    root: {
    }
  });

export const Text: FC<TextProps> = ({
    text, 
    align = 'left'
}) => {
    const classes = useStyles();
    
    const options = {
        overrides: {
            h1: { component: Typography, props: { style: { marginTop: 20 }, gutterBottom: true, variant: 'h1', component: 'h1' } },
            h2: { component: Typography, props: { style: { marginTop: 20 }, gutterBottom: true, variant: 'h2', component: 'h2' } },
            h3: { component: Typography, props: { style: { marginTop: 20 }, gutterBottom: true, variant: 'h3', component: 'h3' } },
            h4: { component: Typography, props: { style: { marginTop: 20 }, gutterBottom: true, variant: 'h4', component: 'h4' } },
            h5: { component: Typography, props: { style: { marginTop: 20 }, gutterBottom: true, variant: 'h5', component: 'h5' } },
            h6: { component: Typography, props: { style: { marginTop: 20 }, gutterBottom: true, variant: 'h6', component: 'h6' } },
            p: { component: Typography, props: { variant: 'body1', component: 'p', gutterBottom: true } },
            a: { component: Link },
            table: { props: { style: { marginBottom: 30, width: "100%", borderSpacing: 0, borderCollapse: "collapse" } } },
            th: { props: { style: { padding: 11, border: "1px solid #ccc", backgroundColor: "#eee" } } },
            td: { props: { style: { padding: 11, border: "1px solid #ccc" } } },
            li: {
                component: (props: any) => (
                    <li>
                        <Typography {...props} variant="body1" component="span"/>
                    </li>
                )
            }
        }
    };

    return (
        <div className={classes.root} style={{textAlign: align}}>
            {
                text && <ReactMarkdown options={options}>{text}</ReactMarkdown>
            }
        </div>
    );
};