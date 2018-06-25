import React from 'react';
import { connect } from 'react-redux';
import { calculate } from './../actions';

class Calculate extends React.Component {
  constructor(props) {
    super(props);
    this.calculate = this.calculate.bind(this);
  }

  calculate() {
    const { Bmi, dispatch } = this.props;
    const params = {
      birth: Bmi.birth,
      gender: Bmi.gender,
      height: parseFloat(Bmi.measures.height),
      weight: parseFloat(Bmi.measures.weight)
    };
    dispatch(calculate(params));
  }

  render() {
    return (
      <button className="btn btn-calculate" onClick={this.calculate}>
        calculate
      </button>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Calculate);
