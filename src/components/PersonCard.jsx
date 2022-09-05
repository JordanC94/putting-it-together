import React, { Component } from "react";
import { useState } from "react";



class PersonCard extends Component {
  constructor(props){
    super(props);
    this.state= {age: this.props.age}

  }
  render() {
    const {firstName, lastName, hairColor, age} = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="card justify-content-center">
              <div className="card-body">
                <h1 className = "card-title">{firstName} {lastName}</h1>
                <p>Age:{this.state.age}</p>
                <p>Hair Color:{hairColor}</p>
                <button onClick={()=> {this.setState({age: this.state.age+=1})}}>Birthday button for: {firstName} {lastName}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonCard;
