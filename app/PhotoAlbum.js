import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { request } from 'https';
import PhotoCard from './PhotoCard';
 
class PhotoAlbum extends React.Component {
    constructor() {
        super()
        this.state = {}
      }
      
    componentDidMount() {
    }

 
    render() {
          return (
                  <div>
                    {this.props.album.map(photo => {
                        return <PhotoCard key={photo.id}>
                            {...photo}
                        </PhotoCard>
                    })}
                  </div>
                )
        }
};
 
ReactDOM.render(<PhotoAlbum />, document.getElementById('root'));