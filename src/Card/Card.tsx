// Generated with util/create-component.js
import React from "react";
import { Image } from "../Image"
import { Grid, CardContent, Typography, Card as MuiCard, CardActions, Button } from '@material-ui/core'

import { CardProps } from "./Card.types";

import "./Card.scss";

export const Card: React.FC<CardProps> = ({
  image,
  cardName,
  description,
  links
}) => (
  <Grid item xs>
    <MuiCard className="card">
      <CardContent>
        {
          image && (
            <Image {...image} />
          )
        }
        {
          cardName && (
            <Typography variant="h2" component="h2">
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
      <CardActions>
        {
          links.map((link: any) => {
            if (link.label) {
              return (
                <Button>
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
);