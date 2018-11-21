import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { request } from 'https';
import PhotoCard from './PhotoCard';
 
class PhotoAlbum extends React.Component {
    constructor() {
        super()
        this.state = {
           photos: []
        }
      }
      
    componentDidMount() {
        //fetch from backend server url
            Request.get("http://localhost:3000", (error, response, body) => {
                if(error) {
                    // reject(error);
                    console.log(error);
                }
                resolve(response);
                this.setState({photos: response.body});
            });
        
    }

 
    render() {
          return (
                  <div>
                    {this.state.photos.map(photo => {
                        return <PhotoCard>
                            {...photo}
                        </PhotoCard>
                    })}
                  </div>
                )
        }
};
 
ReactDOM.render(<PhotoAlbum />, document.getElementById('root'));