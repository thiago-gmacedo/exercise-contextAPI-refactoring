// src/Cars.jsx

// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CarsContext from './context/CarsContext';
// import { connect } from 'react-redux';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
// import { moveCar } from './redux/actionCreators';

class Cars extends Component {
  render() {
    const { redCar, blueCar, yellowCar } = this.context.cars;
    const { moveCar } = this.context;
    
    return (
      <div>
      <div>
        <img
          className={redCar ? 'car-right' : 'car-left'}
          src={carRed}
          alt="red car"
          />
        <button
          onClick={() => moveCar('redCar', !redCar)}
          type="button"
          >
          Move
        </button>
      </div>
      <div>
        <img
          className={blueCar ? 'car-right' : 'car-left'}
          src={carBlue}
          alt="blue car"
          />
        <button
          onClick={() => moveCar('blueCar', !blueCar)}
          type="button"
          >
          Move
        </button>
      </div>
      <div>
        <img
          className={yellowCar ? 'car-right' : 'car-left'}
          src={carYellow}
          alt="yellow car"
          />
        <button
          onClick={() => moveCar('yellowCar', !yellowCar)}
          type="button"
          >
          Move
        </button>
      </div>
    </div>
  );
  }
}

Cars.contextType = CarsContext;
// Cars.propTypes = {
  //   moveCar: PropTypes.func.isRequired,
  //   blueCar: PropTypes.bool.isRequired,
  //   redCar: PropTypes.bool.isRequired,
  //   yellowCar: PropTypes.bool.isRequired,
  // };
  
  // const mapStateToProps = (state) => ({
    //   redCar: state.carReducer.cars.red,
    //   blueCar: state.carReducer.cars.blue,
//   yellowCar: state.carReducer.cars.yellow});

// const mapDispatchToProps = { moveCar };

// export default connect(mapStateToProps, mapDispatchToProps)(Cars);
export default Cars;