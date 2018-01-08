import React , {Component} from 'react';

// We extend our class with React.Component to give it all the functionalities of the react component class. 
//  Every Class must have its own render function

class SearchBar extends Component{ //if component is not imported directly from react , it should be React.Component in Class.
    constructor(props){
        super(props);
        this.state = { term : ''};
    }
    
    render() {
        return (
            <div className="search-bar">
                <input 
                value = {this.state.term}
                onChange={ event => this.onInputChange(event.target.value) } />
            </div>
        );
    } 

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}

// This is used to export the component "SearchBar" to all the other pages when needed.
// Even if we have many other useful things in this page, only SearchBar is exported.
export default SearchBar;