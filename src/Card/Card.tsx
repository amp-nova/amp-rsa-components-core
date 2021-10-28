// Generated with util/create-component.js
import React from "react";
import { Image } from "../Image";
import { Grid, CardContent, Typography, Card as MuiCard, CardActions, Button } from '@material-ui/core';
import { CardProps } from "./Card.types";

import "./Card.scss";

export const Card: React.FC<CardProps> = ({
  image,
  cardName,
  description,
  links
}) => {
  return (
    <Grid item xs={12} sm className="card-root" data-testid="Card">
      <MuiCard className="card-container">
        <CardContent className="card-content">
          {
            image && (
              <Image {...image} />
            )
          }
          {
            cardName && (
              <Typography variant="h2" component="h2" style={{ marginTop: 15, marginBottom: 15 }}>
                {cardName}
              </Typography>
            )
          }
          {
            description && (
              <Typography component="p">
                {description}
              </Typography>
            )
          }
        </CardContent>
        <CardActions className="card-actions">
          {
            links && links.map((link: any, i: number) => {
              if (link.label) {
                return (
                  <Button className="card-links" href={link.value} key={i}>
                    {link.label}
                  </Button>
                )
              } else {
                return null;
              }
            })
          }
        </CardActions>
      </MuiCard>
    </Grid>
  )
};