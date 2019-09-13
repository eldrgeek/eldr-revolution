import React from "react";
import ReactPlayer from "react-player";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Iframe from "react-iframe";
const useStyles = makeStyles(theme => ({
  linkButton: {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    textDecoration: "underline",
    fontSize: "inherit",
    display: "inline",
    margin: "0",
    padding: "0"
  },
  still: {
    position: "absolute",
    width: "80%"
  },

  player: {
    width: "80%"
  }

  // linkButton:hover,
  // link-button:focus {
  // text-decoration: none;
  // }
}));
const url =
  "https://www.youtube.com/embed/o507bg_K6hs?rel=0;&autoplay=1;&mute=1";
// "https://vimeo.com/291764638";
// "https://vimeo.com/352059225/a37fc065a3";
// "https://vimeo.com/355880816"
const RevolutionVideo = props => {
  const classes = useStyles();
  const [message, setMessage] = React.useState("no message");
  const [playing, setPlaying] = React.useState(false);
  const [showLyrics, setShowLyrics] = React.useState(false);
  const [visible, setVisible] = React.useState("visible");

  const startPlaying = () => {
    setPlaying(true);
  };
  setTimeout(() => {
    let width = document.querySelector("iframe").style.width; //.document.body.scrollWidth + "px"
    console.log("width", width);
  }, 1000);
  return (
    <React.Fragment>
      {/* <Message /> */}
      {message === "ended" ? (
        <Typography align="center" variant="h5" component="h1" gutterBottom>
          Join the revolution
        </Typography>
      ) : (
        <React.Fragment>
          {message !== "ended" ? (
            <Typography align="center" variant="h5" component="h1" gutterBottom>
              <button className={classes.linkButton} onClick={startPlaying}>
                Play our anthem
              </button>{" "}
              and{" "}
              <button
                className={classes.linkButton}
                onClick={() => setShowLyrics(true)}
              >
                read the words
              </button>
            </Typography>
          ) : (
            ""
          )}
          <div>
            <img
              style={{ visibility: visible, width: "100px" }}
              id="still"
              className={classes.still}
              alt="revolution 1x1"
              src="revolution still.jpg"
            />
            <RevolutionPlayer
              id="player"
              className={classes.player}
              message={message}
              playing={playing}
              width={window.innerWidth + "px"}
              onStart={() => setVisible("hidden")}
              onEnded={() => setMessage("ended")}
              onPlay={() => setMessage("playing")}
              onPause={() => setVisible("visible")}
            />
          </div>
          {showLyrics ? (
            <Iframe
              url="https://www.noelpaulstookey.com/14-12.html"
              width="650px"
              height="1000px"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"
            />
          ) : (
            ""
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
const RevolutionPlayer = props => {
  return (
    <React.Fragment>
      <ReactPlayer
        url={url}
        playing={props.playing}
        config={{
          youtube: {
            playerVars: {
              controls: "1",
              showinfo: 1
            }
          },
          facebook: {
            appId: "12345"
          }
        }}
        {...props}
      />
    </React.Fragment>
  );
};
export default RevolutionVideo;
