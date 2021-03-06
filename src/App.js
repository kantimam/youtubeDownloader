import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './Sass/style.css';
import Downloader from './components/Downloader.js'
import About from './components/About.js'
import MobileAbout from './components/MobileAbout.js'
import Navigation from './components/Navigation.js'
import { withRouter } from 'react-router-dom'




class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
        
    }

  }


  
  render() {
    return (
      <div style={{height: window.innerHeight}} className={'App'}>
        <Route path='' component={Navigation}/>
          <main>
            <Route component={Downloader}/>
            <Route path='/about' component={MobileAbout}/>
            <About/>
          </main>
      </div>
    );
  }
}

export default withRouter(App);