import React from 'react';
import { connect } from 'react-redux';
import { range } from './../actions';

class Range extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(range());
  }

  render() {
    const { Bmi } = this.props;
    return (
      <div className="card-body">
        <h3 className="card-title">Body mass index (BMI)</h3>
        <div className="range">
          {Bmi.range.loading ? (
            <p>One moment...</p>
          ) : (
            <div className="row">
              {Object.keys(Bmi.range.data).map(item => (
                <div className={`col range-${item}`} key={item}>
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Range);
