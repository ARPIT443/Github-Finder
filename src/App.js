import React, {Component} from 'react';
import axios from 'axios';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import './App.css';

class App extends Component {

  state = {
    isLoading: false,
    users: []
  }

  async componentDidMount(){
    this.setState({isLoading: true});

    const res = await axios.get(`https://api.github.com/users?client_id=$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({isLoading: false, users: res.data});
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className='container'>
          <Users users={this.state.users} isloading={this.state.isLoading}/>
        </div>
      </div>
    );
  }
}

export default App;
 