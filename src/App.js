import React from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import Card from "./components/card/card.component";
import acceptance from "./images/acceptance.png";
import curiosity from "./images/curiosity.png";
import goal from "./images/goal.png";
import honor from "./images/honor.png";
import mastery from "./images/mastery.png";
import freedom from "./images/freedom.png";
import order from "./images/order.png";
import power from "./images/power.png";
import relatedness from "./images/relatedness.png";
import status from "./images/status.png";
import Paper from "@material-ui/core/Paper";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [
        { src: acceptance, key: 1 },
        { src: curiosity, key: 2 },
        { src: freedom, key: 3 },
        { src: goal, key: 4 },
        { src: honor, key: 5 },
        { src: mastery, key: 6 },
        { src: order, key: 7 },
        { src: power, key: 8 },
        { src: relatedness, key: 9 },
        { src: status, key: 10 },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1 className="title">Moving Motivators v0.0.1</h1>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {this.state.images.map((value) => (
              <Grid key={value.key} item>
              <Paper className="paper" elevation={3}><Card src={value.src} /></Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
              <Grid key={value} item>
                <Paper className="paper-center" elevation={3} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
              <Grid key={value} item>
                <Paper className="paper" elevation={3} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
