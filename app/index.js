import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { request } from 'https';
 
class PhotoAlbum extends React.Component {
    constructor() {
        super()
        this.state = {
           photos: []
        }
      }
      
    componentDidMount() {
        //fetch from localhost:3000 url
        axios.get("http://localhost:3000", (request, response) => {
            this.setState({photos: response});
        })
        
    }
    render() {
          return (
                  <div>
                    Hello, React!
                  </div>
                )
        }
};
 
ReactDOM.render(<HelloWorld />, document.getElementById('root'));