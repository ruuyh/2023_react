import React, { Component } from 'react'

export class LoginComp extends Component {
  constructor(props) {
      super(props);
      this.state = {
          name : "",
          login : false
      }

      this.inputName = this.inputName.bind(this);
      this.clickLogin = this.clickLogin.bind(this);
  }

  inputName = (e) => {
      this.setState({name: e.target.value});
  }

  clickLogin = (e) => {
      this.setState({login: true});

  }

  render() {
      const {name, login} = this.state;
  return (
      <div>
          <p>이름을 입력하세요</p>
          <input 
              type="text"
              onChange={ this.inputName }
          />
          <button
              onClick={ this.clickLogin }
          >
              login
          </button>
          <h1>
              { login ? name+"님 환영합니다" : ""}
          </h1>
      </div>
  )
  }
}
export default LoginComp