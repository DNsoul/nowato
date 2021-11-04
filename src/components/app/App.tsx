import React from "react";
import styles from "./App.module.css";
import Player from "../Player";
import { Grid } from "@mui/material";

const App = (): JSX.Element => {
  return (
    <Grid className={styles.app} container spacing={0}>
      <Grid item xs={9}>
        <Player />
      </Grid>
      <Grid item xs={3}>
        123
      </Grid>
    </Grid>
  );
};

export default App;
