import React from "react";
import "./moving-motivators.styles.css";
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
import CardContainer from "../../components/card-container/card-container.component";

class MovingMotivators extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        { id: "acceptance", src: acceptanceImage, key: 1 },
        { id: "curiosity", src: curiosity, key: 2 },
        { id: "freedom", src: freedom, key: 3 },
        { id: "goal", src: goal, key: 4 },
        { id: "honor", src: honor, key: 5 },
        { id: "status", src: status, key: 6 },
        { id: "mastery", src: mastery, key: 7 },
        { id: "order", src: order, key: 8 },
        { id: "power", src: power, key: 9 },
        { id: "relatedness", src: relatedness, key: 10 },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1 className="title">Moving Motivators v0.0.1</h1>
        <CardContainer cards={this.state.cards}/>
      </div>
    );
  }
}

export default MovingMotivators;
