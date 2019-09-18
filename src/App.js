import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import YouTube from "./YouTube";

const useStyles = makeStyles(theme => ({
  
  still: {
    // position: "absolute",
    width: "100%"
  },
  text: {
    color: "white",
    textAlign: "center"
  }

 
}));
// import Link from "@material-ui/core/Link";
// import ProTip from "./ProTip";
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
   const classes = useStyles();
  return (
    <Container style={{ background: "black" }} maxWidth="sm">
      <Box style={{ background: "black" }} my={1}>
        <Typography align="left" variant="h4" component="h1" gutterBottom>
          The Revolution is near you.
        </Typography>
        <Typography align="left" variant="h4" component="h1" gutterBottom>
          The Revolution is coming near you.
        </Typography>
        <div>
        <img
              style={{ visibility: true}}
              id="still"
              className={classes.still}
              alt="revolution 1x1"
              src="revolution still.jpg"
            />
        </div>
        <Typography  className={classes.text} align="left" variant="h6" component="h1" gutterBottom>
          coming soon
        </Typography>
        {/* <ProTip /> */}
        {/* <YouTube /> */}

        <MadeWithLove />
      </Box>
    </Container>
  );
}
