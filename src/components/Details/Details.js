import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


class Details extends Component {
  render() {
    return (
      <div>
        In Details
      </div>
    )
  }
}

export default connect()(withRouter(Details));