import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      shoes: []
    };
  }

  componentDidMount(){
    fetch("http://127.0.0.1:8000/api/shoe")
    .then((res) => res.json())
    .then((data) => this.setState({shoes: data}))
  }

  render() {
   return (
    <div>
      <ul>
        
        {this.state.shoes.map(s => (
          <div>
          <ul><h2>Shoe Size</h2>{s.size}</ul>
          <ul><h2>Shoe Brandname</h2>{s.brand_name}</ul>
          <ul><h2>Shoe Manufacturer</h2>{s.manufacturer}</ul>
          <ul><h2>Shoe Color</h2>{s.color}</ul>
          <ul><h2>Shoe Material</h2>{s.material}</ul>
          <ul><h2>Shoe Type</h2>{s.shoe_type}</ul>
          <ul><h2>Shoe Fasten Type</h2>{s.fasten_type}</ul>
          <hr></hr>
          </div>
        ))}
        
      </ul>
    </div>
  ); 
  }
  
}

export default App;
