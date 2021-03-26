import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

function Registration() {
  return (
    <div style={styles.gridContainer}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6} lg={4} style={styles.gridItem}>
          <Paper elevation={3} variant="outlined">
            <div style={styles.paperContainer}>
              <TextField
                label="Email"
                variant="outlined"
                style={styles.textField}
              />
              <TextField
                label="Username"
                variant="outlined"
                style={styles.textField}
              />
              <TextField
                label="Password"
                variant="outlined"
                style={styles.textField}
              />
              <Button
                variant="outlined"
                color="primary"
                style={styles.textField}
              >
                Sign Up
              </Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

const styles = {
  gridContainer: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    margin: "auto",
  },
  paperContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "2rem",
  },
  textField: {
    marginBottom: ".5rem",
  },
  text: { margin: "auto" },
};

export default Registration;
