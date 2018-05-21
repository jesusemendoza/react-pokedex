import React from 'react'
import './_navbar.scss'

export default class AppBar extends React.Component {

    constructor(props){
        super(props)

        this.burgerToggle = this.burgerToggle.bind();
    }

    burgerToggle() {
		let linksEl = document.querySelector('.narrowLinks');
		if (linksEl.style.display === 'block') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'block';
		}
	}

render() {


		return (
			<div className='nav-bar'>
				<div className="navWide">
					<div className="wideDiv">
						<a className="nav-logo-link" href="/home"></a>
						<a className="nav-link" href="/home">Home</a>
						<a className="nav-link" href="/pokedex">Pokedex</a>
					</div>
				</div>
				<div className="navNarrow">
					<i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
					<div className="narrowLinks">
						<a href="/home" onClick={this.burgerToggle}>Home</a>
						<a href="/pokedex" onClick={this.burgerToggle}>Pokedex</a>
					</div>
				</div>
			</div>
		);
	}
};

//todo 
//make the logo go home when clicked