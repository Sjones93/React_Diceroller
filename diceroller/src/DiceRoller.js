import React, { Component } from 'react';
import "./DiceRoller.css";


class DiceRoller extends Component {

    
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

        this.state = { 
            random: null,
         }
      }
      // set the min and max number possible (max must be 121 because of line 24 having max-min would be 120)
      min = 1;
      max = 121;


      // what happens when the button is clicked
      handleClick =() => {
        // get a random number between 1 and 120
        this.setState({random: this.min + (Math.floor((Math.random() * (this.max - this.min))))});
        
      }
    
      render() {
        return (
          <div>
            {/* make the button */}
            <button onClick={this.handleClick}>Roll the Dodecacontagon</button>

            {/* create output for button */}
            <div>You rolled a: {this.state.random}
            </div>
          </div>
        );
      }

}

export default DiceRoller;
