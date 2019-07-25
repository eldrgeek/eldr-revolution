import React from "react";
import ReactPlayer from "react-player";
import Typography from "@material-ui/core/Typography";

const url =
  // "https://www.youtube.com/embed/o507bg_K6hs?rel=0;&autoplay=1;&mute=1";
  "https://vimeo.com/291764638";
const RevolutionVideo = () => {
  const [message, setMessage] = React.useState("no message");

  return (
    <React.Fragment>
      {/* <Message /> */}
      {message === "ended" ? (
        <Typography align="center" variant="h5" component="h1" gutterBottom>
          Join the revolution
        </Typography>
      ) : (
        <React.Fragment>
          {message != "playing" ? "Click to hear our anthem" : ""}
          <RevolutionPlayer
            message={message}
            onStart={() => setMessage("starting")}
            onEnded={() => setMessage("ended")}
            onPlay={() => setMessage("playing")}
            onPaused={() => setMessage("paused")}
          />
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
