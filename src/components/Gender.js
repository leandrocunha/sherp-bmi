import React from 'react';
import { connect } from 'react-redux';
import { genderSave } from './../actions';

class Gender extends React.Component {
  constructor(props) {
    super(props);
    this.select = this.select.bind(this);
  }

  select(e) {
    const value = e.target.innerHTML;
    const { dispatch } = this.props;
    const buttons = document.querySelectorAll('.btn-gender');

    dispatch(genderSave(value.toLocaleLowerCase()));
  }

  render() {
    return (
      <div className="card-body">
        <h3 className="card-title">Gender</h3>
        <div className="btn-wrapper">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn btn-gender"
              onClick={this.select}
            >
              Male
            </button>
            <button
              type="button"
              className="btn btn-gender"
              onClick={this.select}
            >
              Female
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Gender);
