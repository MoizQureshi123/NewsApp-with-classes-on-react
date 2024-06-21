import './App.css';
import React, {Component} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Home from  './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom" ;
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {

  state= {
    progress :0,
    pageSize :8
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render () {
    return (
    <div>
      <Router>
      <Navbar />
      <LoadingBar
        height={4}
        color='#f11946'
        progress={this.state.progress}
      />
      <Routes>
            <Route exact path="/" element= {<Home key="home" />}/>
            {/* element={<News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="us" category="sports" /> */}
            <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="us" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="us" category="entertainment" />} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="us" category="general" />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="us" category="health" />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="us" category="science" />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="us" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="us" category="technology" />} />
      </Routes>
      </Router>   
    </div>
    )
  }
}

//export default App;
