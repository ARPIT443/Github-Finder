import React, {Component} from 'react';
import axios from 'axios';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import './App.css';

class App extends Component {

  state = {
    isLoading: false,
    users: []
  }

  // async componentDidMount(){
  //   this.setState({isLoading: true});

  //   const res = await axios.get(`https://api.github.com/users?client_id=$
  //   {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
  //   {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   this.setState({isLoading: false, users: res.data});
  // }

  searchUsers = async(text) => {
    this.setState({isLoading: true});

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({isLoading: false, users: res.data.items});
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className='container'>
          <Search searchUsers={this.searchUsers} />
          <Users users={this.state.users} isLoading={this.state.isLoading}/>
        </div>
      </div>
    );
  }
}

export default App;
 