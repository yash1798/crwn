import React from "react"
import { Provider } from "react-redux"

import MainRouter from "./MainRouter"
import store from "./redux/store"

import "./App.css"

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <MainRouter />
        </div>
      </Provider>
    )
  }
}

export default App
