import * as React from "react";
import type { NextPage } from "next";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Link from "../src/Link";
import ProTip from "../src/ProTip";

const About: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          MUI v4 + Next.js with TypeScript example
        </Typography>
        <Box maxWidth="sm">
          <Button component={Link} href="/">
            Go to the home page
          </Button>
        </Box>
        <ProTip />
      </Box>
    </Container>
  );
};

export default About;
