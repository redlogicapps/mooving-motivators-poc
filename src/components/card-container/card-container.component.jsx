import React from "react";
import "./card-container.styles.css";
import Grid from "@material-ui/core/Grid";
import { Droppable, DragDropContext } from "react-beautiful-dnd";
import Paper from "@material-ui/core/Paper";
import Card from "../../components/card/card.component";
import acceptanceImage from "../../images/acceptance.png";
import curiosity from "../../images/curiosity.png";
import goal from "../../images/goal.png";
import honor from "../../images/honor.png";
import mastery from "../../images/mastery.png";
import freedom from "../../images/freedom.png";
import order from "../../images/order.png";
import power from "../../images/power.png";
import relatedness from "../../images/relatedness.png";
import status from "../../images/status.png";

export default class CardContainer extends React.Component {
  constructor(props) {
    super(props);
    const CARD_STATE = {
      UP: 1,
      DOWN: 2,
      NEUTRAL: 3,
    };
    this.state = {
      cards: [
        {
          id: "acceptance",
          src: acceptanceImage,
          key: 1,
          state: CARD_STATE.NEUTRAL,
        },
        { id: "curiosity", src: curiosity, key: 2, state: CARD_STATE.NEUTRAL },
        { id: "freedom", src: freedom, key: 3, state: CARD_STATE.NEUTRAL },
        { id: "goal", src: goal, key: 4, state: CARD_STATE.NEUTRAL },
        { id: "honor", src: honor, key: 5, state: CARD_STATE.NEUTRAL },
        { id: "status", src: status, key: 6, state: CARD_STATE.NEUTRAL },
        { id: "mastery", src: mastery, key: 7, state: CARD_STATE.NEUTRAL },
        { id: "order", src: order, key: 8, state: CARD_STATE.NEUTRAL },
        { id: "power", src: power, key: 9, state: CARD_STATE.NEUTRAL },
        {
          id: "relatedness",
          src: relatedness,
          key: 10,
          state: CARD_STATE.NEUTRAL,
        },
      ],
    };
  }

  reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  onDragEnd = (result) => {
    const { destination, source } = result;
    var cardsTemp = this.state.cards;
    if (!destination) return;

    if (destination.index === source.index) {
      return;
    }
    //make the switch between the 2 cards
    this.setState({cards: this.reorder(cardsTemp, source.index, destination.index)});
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="dropable" direction="horizontal">
          {(provided) => (
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              innerRef={provided.innerRef}
              {...provided.droppableProps}
            >
              <Paper elevation={6}>
                <div className="cardDiv">
                  {this.state.cards.map((card, index) => (
                    <Card
                      key={card.id}
                      src={card.src}
                      id={card.id ? card.id.toString() : null}
                      index={index}
                      cardState={card.state}
                      isOrderMode={this.props.isOrderMode}
                    />
                  ))}
                  {provided.placeholder}
                </div>
              </Paper>
            </Grid>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}
