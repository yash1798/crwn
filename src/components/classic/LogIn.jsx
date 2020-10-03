import React, { Component } from "react"

import Button from "../functionals/Button"
import { InputField } from "../functionals/InputField"

import { auth, signInWithGoogle } from "../../firebase/firebase"

import "../styles/Login.css"
import { Redirect } from "react-router-dom"

class LogIn extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: "",
      error: "",
      success: "",
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = this.state
    console.log(email, password)
    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: "", password: "", success: true })
    } catch (error) {
      console.log(error)
    }
    this.setState({ email: "", password: "" })
  }

  render() {
    if (this.state.success) {
      return <Redirect to="/" />
    }
    return (
      <div className="login">
        <h1>Already have an account?</h1>
        <span>Log-in now with your email and pasword or Gmail account.</span>
        <form className="login-form" onSubmit={this.handleSubmit}>
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
          <div className="buttons">
            <Button type="submit">Sign In</Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn={true}>
              Sign In With Google
            </Button>
          </div>
        </form>
      </div>
    )
  }
}

export default LogIn
