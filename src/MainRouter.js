import React, { Component } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Redirect } from "react-router"
import { connect } from "react-redux"

import { auth, createProfileDocument } from "./firebase/firebase"

import { setCurrentUser } from "./redux/actions/userActions"

import Header from "./components/classic/Header"
import { HomePage } from "./pages/HomePage"
import ShopPage from "./pages/ShopPage"
import { SignIn } from "./pages/SignIn"
import Checkout from "./pages/Checkout"
import HatsPage from "./pages/HatsPage"
import JacketsPage from "./pages/JacketsPage"
import MensPage from "./pages/MensPage"
import WomensPage from "./pages/WomensPage"
import SneakersPage from "./pages/SneakersPage"

class MainRouter extends Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createProfileDocument(user)

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          })
        })
      }
      setCurrentUser(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" exact component={ShopPage} />
          <Route
            path="/signin"
            exact
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignIn />
            }
          />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/hats" exact component={HatsPage} />
          <Route path="/womens" exact component={WomensPage} />
          <Route path="/mens" exact component={MensPage} />
          <Route path="/sneakers" exact component={SneakersPage} />
          <Route path="/jackets" exact component={JacketsPage} />
        </Switch>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainRouter)
