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
						<a className="nav-logo-link" href="/"></a>
						<a className="nav-link" href="/">Home</a>
						<a className="nav-link" href="/about">About</a>
						<a className="nav-link" href="/partners">Partners</a>
					</div>
				</div>
				<div className="navNarrow">
					<i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
					<div className="narrowLinks">
						<a href="/" onClick={this.burgerToggle}>Home</a>
						<a href="/about" onClick={this.burgerToggle}>About</a>
						<a href="/partners" onClick={this.burgerToggle}>Partners</a>
					</div>
				</div>
			</div>
		);
	}
};

//todo 
//make the logo go home when clicked