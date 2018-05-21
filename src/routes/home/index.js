import React from 'react';
import './_home.scss';
import Logo from '../../assets/gm.png';
import ThreeAcross from '../../components/three-across'
import NavBar from '../../components/nav-bar'
import { Parallax, Background } from 'react-parallax';
import bg1 from '../../assets/pk-bg.jpg';




// import { Parallax, Background } from 'react-parallax';
import YouTubePlayer from 'react-player/lib/players/YouTube';

export default class Home extends React.Component {
    render() {
      return(
	<div className='landing-container'>
		<NavBar />
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
		<p className='poke-p'> PokeDex</p>
		

		{/* <h1 className='titleHome'>
			GAMACY
		</h1> */}

		</div>	

        </div>
		<div className='spacer-home'>
		</div>
		<Parallax
	  className='bg1'	
      blur={{ min: -15, max: 15 }}
      bgImage={bg1}
      bgImageAlt="the dog"
      strength={200}
    >
      <div style={{ height: '300px' }} />
    </Parallax>
		<ThreeAcross />
	</div>
	
      );
    }
  }