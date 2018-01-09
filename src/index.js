//Importing React to get access of React in this file.
// To render component to DOM, we use ReactDOM. 

// React library has started to divide into 2 separate libraries called core-react and react-dom. So we need 
// react-dom to render a component to DOM while react is used to create and manage elements.
import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// declare a variable to store API key
const API_KEY = 'AIzaSyBgfwSCLTA3RuKPpyi7HOi6PHYCEX9dVwk';



// Create a new component. This component should produce some HTML.
class App extends Component {
    constructor(props){
        super(props);
        this.state = { 
            videos : [],
            selectedVideo : null
        }; 
        this.videoSearch('Shanks');
    }

    videoSearch(term){
        YTSearch({ key: API_KEY , term : term },  (data) => {
            this.setState({ 
                videos : data,
                selectedVideo : data[1]
             });
        });
    }

    render(){
        const videoSearch = _.debounce((term) => { this.videoSearch(term)},500);

        return (
            <div>
                <SearchBar onSearchTermChange = { videoSearch }/>
                <VideoDetail video = {this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                    data = {this.state.videos}
                />
            </div>
        );
    }
}

//Instantiate an element of the class and then render it to REACTDOM.
// Take this component's generated HTML & put it on the page.(in the DOM).
// container is the root element of all other components. It is present in index.html . So we will render it there.
ReactDOM.render(<App />, document.querySelector('.container'));