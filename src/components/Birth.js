import React from 'react';
import { connect } from 'react-redux';
import { birthSave } from './../actions';

class Birth extends React.Component {
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
  }

  change(e) {
    e.preventDefault();
    const { value } = e.target;
    const { dispatch } = this.props;

    dispatch(birthSave(value));
  }

  render() {
    return (
      <div className="card-body">
        <h3 className="card-title">Date of birth</h3>
        <form>
          <select className="form-control" name="birth" onChange={this.change}>
            <option>Select a date</option>
            <option value="1982-10-19">19/10/1982</option>
            <option value="1982-11-14">14/11/1982</option>
          </select>
        </form>
      </div>
    );
  }
}

export default connect()(Birth);
