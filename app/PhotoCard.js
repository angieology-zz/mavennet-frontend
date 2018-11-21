import React from 'react';
import ReactDOM from 'react-dom';
 
class PhotoCard extends React.Component {constructor() {
    super()
    this.state = {
      //album id
      //photo
      //title
    }
  }
  
componentDidMount() {
  
    
}


render() {
      return (
              <div>
                  <h3>{this.props.title}</h3>
                    <img>{this.props.url}</img>
              </div>
            )
    }
};

export default PhotoCard