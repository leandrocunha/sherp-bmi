import React from 'react';
import { connect } from 'react-redux';
import { measuresSave } from './../actions';

class Measures extends React.Component {
  constructor(props) {
    super(props);
    this.type = this.type.bind(this);
  }

  type(e) {
    const { value } = e.target;
    const { dispatch, name } = this.props;

    dispatch(measuresSave({ [name]: value }));
  }

  render() {
    const { title } = this.props;

    return (
      <div>
        <h3 className="card-title">{title}</h3>
        <div className="btn-wrapper">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-secondary">
              Imperial
            </button>
            <button type="button" className="btn btn-secondary">
              Metric
            </button>
          </div>
        </div>
        <form>
          <input className="form-control" onKeyUp={this.type} type="text" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Measures);
