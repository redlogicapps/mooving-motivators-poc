// @flow
import * as React from "react";
import { Draggable } from "react-beautiful-dnd";
import "./card-styles.css";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

export const Card = ({id, index, isOrderMode, src, ...otherProps}) => {
  return (
    <Draggable
      key={id}
      draggableId={id}
      index={index}
      isDragDisabled={!isOrderMode}
    >
      {(provided) => (
        <div className={`cardOverlay ${
          otherProps.cardState === 1 ? "up" : otherProps.cardState === 3 ? "down" : ""
        }`}>
          <img
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
            alt="motivator"
            src={src}
            width="100px"
            sizes="100px"
            className="card"
          ></img>
          {!isOrderMode &&
          <div className="up-vote">
            <Fab color="primary" aria-label="add" size="small" onClick={(event) => {otherProps.eventUpHandler(event, index)}}>
              <AddIcon />
            </Fab>
          </div>}
          {!isOrderMode &&
          <div className="down-vote" >
            <Fab color="secondary" aria-label="add" size="small" onClick={(event) => {otherProps.eventDownHandler(event, index)}}>
              <RemoveIcon />
            </Fab>
          </div>}
        </div>
      )}
    </Draggable>
  );
};

export default Card;
