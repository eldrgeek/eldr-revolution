import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// import Link from "@material-ui/core/Link";
// import ProTip from "./ProTip";
import YouTube from "./YouTube";
function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="left">
      {"Built with love by some guys in Blue Hill, Maine"}
      {/* <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {' team.'} */}
    </Typography>
  );
}

export default function App() {
  return (
    <Container style={{ background: "black" }} maxWidth="sm">
      <Box style={{ background: "black" }} my={1}>
        <Typography align="left" variant="h4" component="h1" gutterBottom>
          The Revolution is near you.
        </Typography>
        <Typography align="left" variant="h4" component="h1" gutterBottom>
          The Revolution is coming near you.
        </Typography>
        {/* <ProTip /> */}
        <YouTube />

        <MadeWithLove />
      </Box>
    </Container>
  );
}
