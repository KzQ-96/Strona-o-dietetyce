import React, {Component} from 'react';
import '../styles/Hamburger.css';

const hamburger = document.querySelector('.hamburger_inner');


class Hamburger extends Component {
    state = { 
        aria: "false",
     }

     handleHamb = (e) => {
         hamburger.classList.toggle('hamburger--active')
         e.preventDefault();
        this.setState({
            aria: !this.state.aria,

        })
     }


    render() { 
        return (
            <button className="hamburger" aria-expanded={this.state.aria} onClick={this.handleHamb}>
            <span className="sr_only">Open/close menu</span>
            <span className="hamburger_box">
                <span className="hamburger_inner"></span>
            </span>
        </button>
         );
    }
}
 
export default Hamburger;