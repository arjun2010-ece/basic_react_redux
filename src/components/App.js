import React, { Component } from 'react'
import SongList from "./SongList";
import SongDetail from "./SongDetail";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <SongList />
            <hr/>
          </div>
          <div className="col-md-6 my-5">
            <SongDetail />
          </div>
        </div>
      </div>
    )
  }
}
export default App;