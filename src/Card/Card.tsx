// Generated with util/create-component.js
import React from "react";
import { Image } from "../Image";
import { makeStyles, Grid, CardContent, Typography, Card as MuiCard, CardActions, Button } from '@material-ui/core';
import { CardProps } from "./Card.types";

const useStyles = makeStyles({
  root: {
    margin: 16,
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "space-between",
    border: "none",
    boxShadow: "none",
    textAlign: "center"
  },
  cardActions: { 
    justifyContent: "center" 
  },
  links: { 
    paddingLeft: 20, 
    paddingRight: 20, 
    color: "#fff", 
    backgroundColor: "#000" 
  }
});

export const Card: React.FC<CardProps> = ({
  image,
  cardName,
  description,
  links
}) => {
  const classes = useStyles();

  return (
    <Grid item xs component={MuiCard} className={classes.root}>
      <CardContent>
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
      <CardActions className={classes.cardActions}>
        {
          links && links.map((link: any) => {
            if (link.label) {
              return (
                <Button className={classes.links}>
                  {link.label}
                </Button>
              )
            } else {
              return null;
            }
          })
        }
      </CardActions>
    </Grid>
  )
};