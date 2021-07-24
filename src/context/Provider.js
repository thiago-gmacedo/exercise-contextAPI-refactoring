import React, { Component } from 'react';
import CarsContext from './CarsContext';

class Provider extends Component {
  constructor(props) {
    super(props)

    const initialState = {
      cars: {
        redCar: true,
        blueCar: true,
        yellowCar: true,
      },
      signal: { color: 'red' },
    };
    this.state = initialState;

    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
  }

  moveCar(car, side) {
    this.setState({
      cars: {
        ...this.state.cars,
        [car]: side,
      },
    });
  };

  changeSignal(signalColor) {
    this.setState({
      signal: {
        ...this.state.signal,
        color: signalColor,
      },
    });
  };

  render() {
    const context = {
      ...this.state,
      moveCar: this.moveCar,
      changeSignal: this.changeSignal,
    }

    const { children } = this.props;

    return (
      <CarsContext.Provider value={context}>
        {children}
      </CarsContext.Provider>
    );
  }
}

export default Provider;