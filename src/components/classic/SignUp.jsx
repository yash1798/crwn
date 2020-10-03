import React, { Component } from "react"

import { auth, createProfileDocument } from "../../firebase/firebase"

import { InputField } from "../functionals/InputField"
import Button from "../functionals/Button"

import "../styles/SignUp.css"
import { Redirect } from "react-router-dom"

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      error: "",
      success: false,
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const { displayName, email, password, confirmPassword } = this.state
    if (password !== confirmPassword) {
      this.setState({ error: "Password and Confirm Password do not match." })
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )

      await createProfileDocument(user, { displayName })

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
        error: "",
        success: true,
      })
    } catch (error) {
      console.log(error)
    }
  }

  renderError = () => {
    if (this.state.error) {
      return <div className="error-display">{this.state.error}</div>
    }
    setTimeout(() => {
      this.setState({ error: "" })
    }, 50000)
  }

  render() {
    if (this.state.success) {
      return <Redirect to="/" />
    }
    return (
      <div className="signup">
        <h1>I do not have an account.</h1>
        <span>Enter your email and password to get started.</span>
        {this.renderError()}
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <InputField
            handleChange={this.handleChange}
            name="displayName"
            value={this.state.displayName}
            label="Name"
            required
            type="text"
          />
          <InputField
            handleChange={this.handleChange}
            name="email"
            value={this.state.email}
            label="Email"
            required
            type="email"
          />
          <InputField
            handleChange={this.handleChange}
            name="password"
            value={this.state.password}
            label="Password"
            required
            type="password"
          />
          <InputField
            handleChange={this.handleChange}
            name="confirmPassword"
            value={this.state.confirmPassword}
            label="Confirm Password"
            required
            type="password"
          />
          <Button type="submit">SIGN UP</Button>
        </form>
      </div>
    )
  }
}

export default SignUp
