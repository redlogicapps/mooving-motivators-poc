// @flow
import * as React from "react";
import { Draggable } from "react-beautiful-dnd";
import "./card-styles.css";

export const Card = (props) => {
  return (
    <Draggable key={props.id} draggableId={props.id} index={props.index}>
      {(provided) => (
        <img
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
          alt="motivator"
          src={props.src}
          width="150px"
          sizes="150px"
          className="card"
        ></img>
      )}
    </Draggable>
  );
};

export default Card;
