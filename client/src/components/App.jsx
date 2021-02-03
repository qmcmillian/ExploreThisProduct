import React from 'react';
import axios from 'axios';
import ExploreThisProduct from './ETPModule.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memberImages: [],
      hasData: false
    };
    this.setImages = this.setImages.bind(this);
  }

  setImages(array) {
    this.setState({
      memberImages: array,
      hasData: true
    });
  }

  componentDidMount() {
    const url = window.location.href.split('/');
    const candidateId = url[url.length - 1];
    const id = (isNaN(Number(candidateId)) || candidateId === '') ? 2 : Number(candidateId);
    axios.get(`/api/items/images/${id}`)
      .then((response)=> {
        this.setImages(response.data);
      })
      .catch((error)=>{
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {this.state.hasData ?
          <ExploreThisProduct images={this.state.memberImages}/> : null
        }
      </div>
    );
  }
}

export default App;