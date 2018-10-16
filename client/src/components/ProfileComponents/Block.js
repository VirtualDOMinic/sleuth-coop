import React from "react";
import download from "../../assets/download.svg";
import star from "../../assets/star.svg";

export default class Block extends React.Component {
  render() {
    const { type, question } = this.props;
    if (type === "checkbox" && question !== "Do you collect personal data?") {
      if (this.props.answer) {
        return (
          <div className="star-badge profile-block">
            <div className="icon-wrapper">
              <img src={star} alt="star" />
            </div>
            <h3>{this.props.heading}</h3>
          </div>
        );
      }
    } else if (type === "file_upload") {
      return (
        <div className={this.props.type + " profile-block"}>
          <h3>{this.props.heading}</h3>
          <a href={this.props.answer} download className="download-badge">
            <div className="icon-wrapper">
              <img src={download} alt="download" />
            </div>
            {this.props.answer}
          </a>
        </div>
      );
    } else if (type === "video") {
      return (
        <div className={this.props.type + " profile-block"}>
          <h3>{this.props.heading}</h3>
          <iframe
            title="demo video"
            width="560"
            height="315"
            src={this.props.answer}
            frameBorder="0"
            allow="encrypted-media"
            allowFullScreen
          />
        </div>
      );
    } else if (type === "image") {
      return (
        <div className={this.props.type + " profile-block"}>
          <h3>{this.props.heading}</h3>
          <img src={this.props.answer} alt="content" />
        </div>
      );
    } else if (type === "dropdown" || type === "multi_checkbox") {
      return (
        <div className="tagged-list profile-block">
          <h3>{this.props.heading}</h3>
          <ul>
            {this.props.answer.map((el, index) => {
              return <li className="tag">{el}</li>;
            })}
          </ul>
        </div>
      );
    } else if (type === "url_inputs") {
      return (
        <div className="tagged-list profile-block">
          <h3>{this.props.heading}</h3>
          <div>
            {this.props.answer.map((el, index) => {
              return (
                <a key={index} href={el[1]} rel="noopener noreferrer" target="_blank">
                  <p>{el[0]}</p>
                </a>
              )
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div className={this.props.type + " profile-block"}>
          <h3>{this.props.heading}</h3>
          <p>{this.props.answer}</p>
        </div>
      );
    }
  }
}
