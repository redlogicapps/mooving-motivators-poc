import React from "react";
import "./card-container.styles.css";
import Grid from "@material-ui/core/Grid";
import { Droppable, DragDropContext } from "react-beautiful-dnd";
import Paper from "@material-ui/core/Paper";
import Card from "../../components/card/card.component";

const CardContainer = ({ cards }) => {
  var cardsIntern = cards;

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    const { destination, source } = result;
    var cardsTemp = cardsIntern;
    if (!destination) return;

    if (destination.index === source.index) {
      return;
    }
    //make the switch between the 2 cards
    cardsIntern = reorder(
        cardsTemp,
        source.index,
        destination.index
      );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
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
            <Paper>
              {cardsIntern.map((card, index) => (
                <Card
                  key={card.id}
                  src={card.src}
                  id={card.id ? card.id.toString() : null}
                  index={index}
                />
              ))}
              {provided.placeholder}
            </Paper>
          </Grid>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default CardContainer;
