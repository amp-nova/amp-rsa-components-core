// Generated with util/create-component.js
import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Card } from "../Card";

import { CardListProps } from "./CardList.types";

export const CardList: React.FC<CardListProps> = ({ 
    header,
    cards
 }) => {
    return (
        <Box data-testid="CardList">
        {
            header && ( 
                <Typography variant="h2" component="h2">
                    {header}
                </Typography>
            )
        }
        {
            cards && (
                <Grid container>
                    {
                        cards.map((card: any, index: number) => {
                            return <Card key={ Math.random().toString(36).substr(2, 9) } {...card} />
                        })
                    }
                </Grid>
            )
        }
        </Box>
    )
 };