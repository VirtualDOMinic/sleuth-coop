import React from "react";
import Block from "./Block";
export default class Content extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.answers.product.map((el, index) => {
          return (
            <Block
              key={index}
              type={el.input_type}
              heading={el.question}
              answer={el.answer}
            />
          );
        })}
      </div>
    );
  }
}
