import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state={term:''};

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({term:event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchProductData(this.state.term);
        this.setState({term:''});
    }

    render() {
        return (
  
                    <form className = "input-group" onSubmit={this.onFormSubmit}>
                        <input 
                            placeholder="...Type Product"
                            className="form-control"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                        <span className="input-group-button">
                            <button type="submit" className="btn btn-success btn-tracker">Add</button>
                        </span>
                    </form>

        );
    }
}

export default SearchBar;