//Importing React to get access of React in this file.
// To render component to DOM, we use ReactDOM. 

// React library has started to divide into 2 separate libraries called core-react and react-dom. So we need 
// react-dom to render a component to DOM while react is used to create and manage elements.
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

// declare a variable to store API key
const API_KEY = 'AIzaSyBgfwSCLTA3RuKPpyi7HOi6PHYCEX9dVwk';

// Create a new component. This component should produce some HTML.
const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
};


//Instantiate an element of the class and then render it to REACTDOM.

// Take this component's generated HTML & put it on the page.(in the DOM).
// container is the root element of all other components. It is present in index.html . So we will render it there.
ReactDOM.render(<App />, document.querySelector('.container'));