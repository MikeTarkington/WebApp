import React, { Component, PropTypes } from "react";
import { Modal } from "react-bootstrap";
import BallotElectionList from "./BallotElectionList";


export default class SelectBallotModal extends Component {
  // This modal will show a users ballot guides from previous and current elections.

  static propTypes = {
    show: PropTypes.bool,
    toggleFunction: PropTypes.func.isRequired,
    ballotElectionList: PropTypes.array,
  };

  constructor (props) {
    super(props);
    this.state = {};
  }


  render () {
    let ballotElectionList = this.props.ballotElectionList || [];
    return <Modal className="ballot-election-list ballot-election-list__modal ballot-election-list__modal-mobile"
                  show={this.props.show}
                  onHide={this.props.toggleFunction} >
      <Modal.Header closeButton onHide={this.props.toggleFunction}>
        <Modal.Title className="ballot-election-list__h1">See Ballot from Another Election</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <BallotElectionList ballotElectionList={ballotElectionList}
                            toggleFunction={this.props.toggleFunction}/>
      </Modal.Body>
    </Modal>;
  }
}
