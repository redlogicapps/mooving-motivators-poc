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
        { card: [] },
        { card: [] },
        { card: [] },
        { card: [] },
        { card: [] },
        { card: [] },
        { card: [] },
        { card: [] },
        { card: [] },
        { card: [] },
        { card: [{ id: "acceptance", src: acceptanceImage, key: 10 }] },
        { card: [{ id: "curiosity", src: curiosity, key: 11 }] },
        { card: [{ id: "freedom", src: freedom, key: 12 }] },
        { card: [{ id: "goal", src: goal, key: 13 }] },
        { card: [{ id: "honor", src: honor, key: 14 }] },
        { card: [{ id: "status", src: status, key: 19 }] },
        { card: [{ id: "mastery", src: mastery, key: 15 }] },
        { card: [{ id: "order", src: order, key: 16 }] },
        { card: [{ id: "power", src: power, key: 17 }] },
        { card: [{ id: "relatedness", src: relatedness, key: 18 }] },
        { card: [] },
        { card: [] },
        { card: [] },
        { card: [] },
        { card: [] },
        { card: [] },
        { card: [] },
        { card: [] },
        { card: [] },
        { card: [] },
      ],
    };
  }

  onDragEnd = (result) => {
    const { destination, source } = result;
    var cardsTemp = this.state.cards;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const card = cardsTemp[destination.droppableId].card;
    cardsTemp[destination.droppableId].card = Array.from(
      cardsTemp[source.droppableId].card
    );
    cardsTemp[source.droppableId].card = Array.from(card);
    this.setState({ cards: cardsTemp });
  };

  render() {
    const FormRow = (props) => {
      const cards = this.state.cards.slice(
        props.startIndex,
        props.startIndex + props.count
      );
      return (
        <React.Fragment>
          {cards.map((value, index) => (
            <Grid item key={this.state.cards.indexOf(value)}>
              <Droppable
                droppableId={this.state.cards.indexOf(value).toString()}
                direction="horizontal"
              >
                {(provided) => (
                  <Paper
                    className={props.className}
                    elevation={3}
                    innerRef={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {value.card.map((cardValue) => (
                      <Card
                        key={cardValue.id}
                        src={cardValue.src}
                        id={cardValue.id?cardValue.id.toString():null}
                        index={index}
                      />
                    ))}

                    {provided.placeholder}
                  </Paper>
                )}
              </Droppable>
            </Grid>
          ))}
        </React.Fragment>
      );
    };

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <h1 className="title">Moving Motivators v0.0.1</h1>
        <Grid container justify="center" spacing={2}>
          <Grid container justify="center" item xs={12} spacing={2}>
            <FormRow startIndex={0} count={10} className="paper" />
          </Grid>
          <Grid container justify="center" item xs={12} spacing={2}>
            <FormRow startIndex={10} count={10} className="paper-center" />
          </Grid>
          <Grid container justify="center" item xs={12} spacing={2}>
            <FormRow startIndex={20} count={10} className="paper" />
          </Grid>
        </Grid>
      </DragDropContext>
    );
  }
}

export default App;
