import React, { Component } from 'react';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import AddPost from './Components/Posts/AddPost/AddPost';
import SinglePage from './Components/Posts/SinglePage/SinglePage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Loader from 'react-loader-spinner';
// import AppLoader from './Components/AppLoader/AppLoader';
import NotFound from './Components/NotFound/NotFound';
import Search from './Components/Posts/Search/Search';
import User from './Components/Posts/User/User';

import PostCategories from './Components/Posts/PostCategories/PostCategories';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    loading: true,
    postsData: []
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 200
    );
  }

  render() {
    return (
      <div className="App">
        {
          this.setState ? <Loader className='app-loader' style={{ display: 'block' }} type="Bars" color="#000" timeout={500} /> : <Loader className='app-loader' style={{ display: 'block' }} type="Bars" color="#fff" timeout={'2000'} />
        }

        <div className="app-content">
          <BrowserRouter>
            <Switch>
              <Route path='/' exact component={Home} />
              {/* <AppLoader /> */}
              <Route path='/posts/add' component={AddPost} />

              <Route path='/auth/profile' component={Profile} />
              
              {/* <Route path='/posts/post/:postId' component={SinglePage} /> */}
              <Route path='/post/:postId' component={SinglePage} />

              <Route path='/posts/search' render={() => {return <Search />}} />

              <Route path='/posts/user/:userId' component={User} />
              

              {/* <Route path='/cat' component={PostCategories} /> */}

              <Route path='*' exact render={() => {return(<NotFound message='The Requested URL was Not Found on This Server'></NotFound>)}} />
              
            </Switch>
          </BrowserRouter>
        </div>

      </div>
    )
  }
}

export default App;




