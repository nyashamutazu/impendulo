import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { UPDATE_STORY, RESTORE_STORY } from "../../constants/actionTypes";
import { Link } from "react-router-dom";

const UploadForm = props => {
  const [story, setState] = useState({ text: "", submitted: false });

  useEffect(() => {
    if (!props.resetStory) {
      setState({ story: "", submitted: false });
      props.resetStory();
      console.log('Hello Start')
    }
  }, [props.resetStory]);

  const submit = ev => {
    ev.preventDefault();
    setState({ ...story, submitted: true });
  };

  const onUpdateStory = ev => {
    setState({ ...story, text: ev.target.value });
  };

  return (
    <div>
      {story.submitted && props.resetStory ? (
        <Link to="" onClick={() => props.updatedStory(story.text)}>
          {story.text}
        </Link>
      ) : (
        <form onSubmit={submit}>
          <textarea onChange={onUpdateStory}></textarea>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  resetStory: state.uploadform.resetStory
});

const mapDispatchToProps = dispatch => ({
  updatedStory: story => dispatch({ type: UPDATE_STORY, story }),
  resetStory: (value) => dispatch({type: RESTORE_STORY, value})
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm);
