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
      
      function groupBy(xs, key) {
        return xs.reduce(function(rv, x) {
          (rv[x[key]] = rv[x[key]] || []).push(x);
          return rv;
        }, {});
      };

      function groupAlbums(albums) {
        //group albums by id
        return groupBy(album, album.albumId);
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
                    const albums = groupAlbums(response.body);
                    this.setState({ albums: albums });
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