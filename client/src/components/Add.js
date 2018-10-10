import React from "react";
import UploadImg from "./EditComponents/UploadImg";
// import { Link } from 'react-router-dom';

export default class Add extends React.Component {
  handleFiles = e => {
    console.log(e.target.files);
  };
  render() {
    return (
      <div className="edit-page">
        <h1>Edit Profile</h1>
        <form method="POST" action="/profile/:id/add/save">
          <h2>Category</h2>
          <UploadImg onchange={this.handleFiles} />
          <button>submit</button>
        </form>
      </div>
    );
  }
}
