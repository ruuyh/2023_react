import { Component } from "react";

class TextComp extends Component {
  render() {
    // this.props 값을 가져와서 사용
    const prop = this.props;
    const {name, children} = this.props;
    console.log (prop);
    console.log (name);
    console.log (children);

    return(
      <div>
        <h1>{children}</h1>
        <p>{name}님</p>
      </div>
    );
  }
}

export default TextComp;