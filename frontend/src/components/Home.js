import React, { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchPost } from "../redux/actions/postActions";

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  const onClick = (id) => {
    history.push(`/post/${id}`);
  };
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={11} md={10} style={styles.gridItem}>
          <Paper onClick={() => onClick(123)} elevation={3} variant="outlined">
            <div style={styles.parentFlexItems}>
              <h3>Username</h3>
              <p>date</p>
              <h5>body</h5>
              <div style={styles.childFlexItems}>
                <p style={styles.reacts}>like</p>
                <p style={styles.reacts}>dislike</p>
                <p style={styles.reacts}>comment</p>
              </div>
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
  gridItem: {
    paddingTop: "2rem",
    margin: "auto",
  },
};

export default Home;
