import React from 'react';
import './_home.scss';
import Logo from '../../assets/gm.png';
import ThreeAcross from '../../components/three-across'

// import { Parallax, Background } from 'react-parallax';
import YouTubePlayer from 'react-player/lib/players/YouTube';

export default class Home extends React.Component {
    render() {
      return(
        <div className="player-wrapper">
			<YouTubePlayer
			className='react-player'
			url='https://www.youtube.com/watch?v=mToV0JNQ0bE' 
			playing={true}
			width='100%'
			playbackRate={0.6}
			volume={0}
			muted={true}
			preload='true'
			loop={true}
			
			/>
		<div className="clear-layer">
		<img className='titleHome' src={Logo}/>
		<div className='spacer-home' />
		
		<ThreeAcross />

		{/* <h1 className='titleHome'>
			GAMACY
		</h1> */}

		</div>	

        </div>
      );
    }
  }