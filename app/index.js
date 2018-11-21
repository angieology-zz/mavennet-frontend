import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { request } from 'https';
import PhotoAlbum from './PhotoCard';
 
class App extends React.Component {
    constructor() {
        super()
        this.state = {
           albums: []
        }
      }

      function groupAlbums(albums) {
        
      }
      
    componentDidMount() {
        // //fetch from backend server url
        //     Request.get("http://localhost:3000", (error, response, body) => {
        //         if(error) {
        //             // reject(error);
        //             console.log(error);
        //         }
               
                
        //     })
        //     .then((response) => {
        //         this.setState({photos: response.body});
        //     })
            axios.get("http://localhost:3000")
                .then(function (response) {
                    this.setState({ albums: response.body });
                })
                .catch(function (error) {
                    console.log(error);
                });
        
    }

 //map albumID
    render() {
          return (
                  <div>
                    {this.state.photos.map(photo => {
                        return <PhotoAlbum>
                            {...photo}
                        </PhotoAlbum>
                    })}
                  </div>
                )
        }
};
 
ReactDOM.render(<App />, document.getElementById('root'));