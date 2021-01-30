import React, { Component } from 'react';

class Search extends Component{
    state={
        text: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.text);
    }

    onChange = (e) => {
        this.setState({ text: e.target.value });
    }


    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                    <input type="text" name="text" placeholder="Search Users..." value={this.state.text} onChange={this.onChange} />
                </form>
            </div>
        )
    }
}

export default Search;