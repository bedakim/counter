import React from "react";
import { Div, Title, CountNumberWrapper, Button } from "./styled";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handlePlusCount() {
    this.setState({
      count: this.state.count + 1
    });
  }
  handleMinusCount() {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    const { count } = this.state;

    return (
      <Div>
        <Title>COUNTER APP</Title>
        <section>
          <CountNumberWrapper>{count}</CountNumberWrapper>
          <Button onClick={() => this.handlePlusCount()}>+</Button>
          <Button onClick={() => this.handleMinusCount()}>-</Button>
        </section>
      </Div>
    );
  }
}

export default App;
