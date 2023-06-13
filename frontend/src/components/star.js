import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    backgroundImage: `url(https://e7.pngegg.com/pngimages/194/912/png-clipart-white-dialogue-box-ring-foam-engraving-speech-bubble-angle-text.png)`,
    backgroundSize: "cover",

    height: "50px",
    Width: "50px",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin:"200px"
  },
  text: {
    color: "white",
    backgroundColor: "black",
    padding: "10px",
  },
}));

const Star = () => {
  const classes = useStyles();
  return (
    <div>
    <div className={classes.container}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div></div>
  );
};

export default Star;
