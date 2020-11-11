import React, { Component } from "./node_modules/react";
import { connect } from "./node_modules/react-redux";
import UploadForm from "../../upload-form/UploadForm";

class Home extends Component {

  render() {


    const setStory = () => {
        
    }

    
    return (
      <div>
        <a>Back to the start</a>
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
              <td></td>
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dipatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
