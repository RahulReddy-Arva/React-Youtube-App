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
            <div>
                <input 
                value = {this.state.term}
                onChange={ event => this.setState({ term : event.target.value})} />
            </div>
        );
    } 
}

// This is used to export the component "SearchBar" to all the other pages when needed.
// Even if we have many other useful things in this page, only SearchBar is exported.
export default SearchBar;