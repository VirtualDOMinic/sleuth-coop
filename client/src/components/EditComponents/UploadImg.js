import React from "react";

export default class UploadImg extends React.Component {
  render() {
    return (
      <label htmlFor="img-upload">
        Upload your company logo
        <input type="file" id="img-upload" onChange={this.props.onchange} />
      </label>
    );
  }
}
