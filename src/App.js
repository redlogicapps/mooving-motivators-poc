import React from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import Card from "./components/card/card.component";
import acceptanceImage from "./images/acceptance.png";
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
import { DragDropContext, Droppable } from "react-beautiful-dnd";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [
        { id: "acceptance", src: acceptanceImage, key: 10 },
        { id: "curiosity", src: curiosity, key: 11 },
        { id: "freedom", src: freedom, key: 12 },
        { id: "goal", src: goal, key: 13 },
        { id: "honor", src: honor, key: 14 },
        { id: "mastery", src: mastery, key: 15 },
        { id: "order", src: order, key: 16 },
        { id: "power", src: power, key: 17 },
        { id: "relatedness", src: relatedness, key: 18 },
        { id: "status", src: status, key: 19 },
      ],
    };
  }

  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;

    if (destination.droppableId === source.droppableId &&
      destination.index === source.index) {
        return;
      }
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <h1 className="title">Moving Motivators v0.0.1</h1>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
              <Grid key={value} item>
                <Droppable
                  droppableId={value.toString()}
                  direction="horizontal"
                >
                  {(provided) => (
                    <Paper
                      className="paper"
                      elevation={3}
                      innerRef={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      {provided.placeholder}
                    </Paper>
                  )}
                </Droppable>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {this.state.cards.map((value, index) => (
              <Grid key={value.key} item>
                <Droppable droppableId={value.id} direction="horizontal">
                  {(provided) => (
                    <Paper
                      className="paper-center"
                      elevation={3}
                      innerRef={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      <Card src={value.src} id={value.id} index={index} />
                      {provided.placeholder}
                    </Paper>
                  )}
                </Droppable>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {[20, 21, 22, 23, 24, 25, 26, 27, 28, 29].map((value) => (
              <Grid key={value} item>
                <Droppable
                  droppableId={value.toString()}
                  direction="horizontal"
                >
                  {(provided) => (
                    <Paper
                      className="paper"
                      elevation={3}
                      innerRef={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      {provided.placeholder}
                    </Paper>
                  )}
                </Droppable>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </DragDropContext>
    );
  }
}

export default App;
