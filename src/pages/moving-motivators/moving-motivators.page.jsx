import React from "react";
import "./moving-motivators.styles.css";

import CardContainer from "../../components/card-container/card-container.component";
import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";

class MovingMotivators extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isOrderMode: true,
    };
  }

  handleRadioChange = (event) => {
    this.setState({ isOrderMode: !this.state.isOrderMode });
  };

  render() {
    return (
      <div>
        <h1 className="title">Moving Motivators v0.0.2</h1>
        <CardContainer isOrderMode={this.state.isOrderMode} />
        <RadioGroup
          name="choice"
          value={this.state.isOrderMode ? "order" : "evaluate"}
          onChange={this.handleRadioChange}
        >
          <FormControlLabel
            value="order"
            control={<Radio />}
            label="Order the cards"
          />
          <FormControlLabel
            value="evaluate"
            control={<Radio />}
            label="Evaluate the cards"
          />
        </RadioGroup>
      </div>
    );
  }
}

export default MovingMotivators;
