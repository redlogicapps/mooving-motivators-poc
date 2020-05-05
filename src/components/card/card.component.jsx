// @flow
import * as React from "react";
import { Draggable } from "react-beautiful-dnd";

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
        ></img>
      )}
    </Draggable>
  );
};

export default Card;
