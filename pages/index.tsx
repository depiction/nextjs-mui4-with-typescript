import * as React from "react";
import type { NextPage } from "next";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Link from "../src/Link";
import ProTip from "../src/ProTip";

import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  button: {
    backgroundColor: "gold",
    color: "black",
  },
}));

const Home: NextPage = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          MUI v4 + Next.js with TypeScript example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <Button href="/about" className={classes.button}>
          About
        </Button>
        <ProTip />
      </Box>
    </Container>
  );
};

export default Home;
