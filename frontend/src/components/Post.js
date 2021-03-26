import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";

const Post = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={11} md={10} style={styles.gridItem}>
          <Paper elevation={3} variant="outlined">
            <div style={styles.parentFlexItems}>
              <h3>Specific Username</h3>
              <p>date</p>
              <h5>Specific body</h5>
              <div style={styles.childFlexItems}>
                <p style={styles.reacts}>like</p>
                <p style={styles.reacts}>dislike</p>
                <p style={styles.reacts}>comment</p>
              </div>
            </div>
          </Paper>
          <h1>Comments</h1>
        </Grid>
        <Grid item xs={12} sm={11} md={10} style={styles.gridItem}>
          <TextField
            label="Comment..."
            variant="outlined"
            multiline={true}
            fullWidth={true}
          />
          <div style={styles.buttons}>
            <Button
              variant="outlined"
              color="secondary"
              style={{ marginRight: ".5rem" }}
            >
              Cancel
            </Button>
            <Button variant="outlined" color="primary">
              Comment
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={11} md={10} style={styles.gridItem}>
          <Paper elevation={3} variant="outlined">
            <div style={styles.parentFlexItems}>
              <h3>Specific Username</h3>
              <p>date</p>
              <h5>Specific body</h5>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

const styles = {
  parentFlexItems: {
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
  },
  childFlexItems: {
    display: "flex",
  },
  reacts: {
    marginRight: "1rem",
  },
  buttons: {
    paddingTop: "1rem",
    display: "flex",
    justifyContent: "flex-end",
  },
  gridItem: {
    paddingTop: "2rem",
    margin: "auto",
  },
};

export default Post;
