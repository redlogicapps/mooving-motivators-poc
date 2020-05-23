// @flow
import * as React from "react";
import { Draggable } from "react-beautiful-dnd";
import "./card-styles.css";

export const Card = (props) => {
  return (
    <Draggable key={props.id} draggableId={props.id} index={props.index} isDragDisabled={!props.isOrderMode}>
      {(provided) => (
        <img
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
          alt="motivator"
          src={props.src}
          width="100px"
          sizes="100px"
          className={`card ${props.cardState === 1 ? 'up' : (props.cardState === 2) ? 'down' : ''}`}
        ></img>
      )}
    </Draggable>
  );
};

export default Card;
