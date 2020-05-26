import React from "react";
import "./moving-motivators.styles.css";

import CardContainer from "../../components/card-container/card-container.component";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Button,
} from "@material-ui/core";

class MovingMotivators extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOrderMode: true,
      sessionId: "",
      isSessionId: false,
    };
  }

  handleRadioChange = (event) => {
    this.setState({ isOrderMode: !this.state.isOrderMode });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    var isSessionId = !this.state.isSessionId;
    this.setState({ isSessionId: { isSessionId } });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleReset = (event) => {
    event.preventDefault();
    this.setState({ isSessionId: false, sessionId: "" });
  };

  render() {
    return (
      <div className="outerContainer">
        <h1 className="title">Moving Motivators v0.0.2</h1>
        <CardContainer isOrderMode={this.state.isOrderMode} sessionId={this.state.sessionId} isSessionId={this.state.isSessionId}/>
        <div className="innerContainer">
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
          <form onSubmit={this.handleSubmit} className="formContainer">
            <TextField
              id="session-id"
              name="sessionId"
              label="Session Id"
              value={this.state.sessionId}
              disabled={this.state.isSessionId ? true : false}
              type="text"
              onChange={this.handleChange}
            />
            <Button
              variant="contained"
              color="primary"
              disableElevation
              disabled={this.state.isSessionId ? true : false}
              type="submit"
            >
              Submit ID
            </Button>
            <Button
              variant="contained"
              color="secondary"
              disableElevation
              disabled={!this.state.isSessionId ? true : false}
              onClick={this.handleReset}
            >
              Reset ID
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default MovingMotivators;
