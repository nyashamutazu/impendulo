import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import UploadForm from "../UploadForm/UploadForm";
import { RESTORE_STORY } from "../../constants/actionTypes";

import './Home.css';

class Home extends Component {

  render() {

    return (
      <div>
        <Link onClick={() => this.props.resetStory()}>Back to the start</Link>
        <table>
          <tbody>
            <tr>
              <td></td>
              <td>
                <UploadForm />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <UploadForm />
              </td>
              <td>{this.props.currentStory}</td>
              <td>
                <UploadForm />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <UploadForm />
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentStory: state.home.story
});

const mapDispatchToProps = dispatch => ({
  resetStory: () => dispatch({type: RESTORE_STORY, value: true})
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
