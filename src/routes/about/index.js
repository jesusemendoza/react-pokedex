import React from 'react';
import Logo from '../../assets/blockchainlogo.png';
import bg1 from '../../assets/bg-img1.jpg';
import bg2 from '../../assets/bg-img2.jpg';
import bg0 from '../../assets/bg-img0.jpg';
import Dan from '../../assets/dan.png';
import Ed from '../../assets/ed.png';
import Hector from '../../assets/hector.png';
import Jesus from '../../assets/jesus.png';
import Info1 from '../../assets/info1.png';
import Info2 from '../../assets/info2.png';
import Info3 from '../../assets/info3a.png';
import './_about.scss';
import { Parallax, Background } from 'react-parallax';




export default class Home extends React.Component {
    render() {
      return(
        <div>
          

          <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={bg1}
      bgImageAlt="the dog"
      strength={200}
    >
      Blur transition from min to max
      <div style={{ height: '500px' }} />
    </Parallax>
            
          <p className='aboutheading'>About Us</p>
          <div className='boxabout'>
            <div className='boxaboutimg'>
              <img className='teamimg' src={Dan}/>
            </div>
            <div className='boxaboutimg'>
              <img className='teamimg' src={Ed}/>
            </div>
            <div className='boxaboutimg'>
              <img className='teamimg' src={Hector}/>
            </div>
            <div className='boxaboutimg'>
              <img className='teamimg' src={Jesus}/>
            </div>
          </div>

          
  
          <div className='boxabout'>
            <div className='boxabouttext1'><p>Full Stack Software Developer. Has a passion for building applications from the ground up both as a Backend and Frontend; and an overwhelming enjoyment for puzzles and troubleshooting.</p></div>
            <div className='boxabouttext'><p>JavaScript and iOS developer with a background in banking legacy systems. Creating simple user interfaces to accomplish technically complex tasks is my strength.</p></div>
            <div className='boxabouttext'><p>Full Stack JavaScript Developer. Passionate about all things Front End/UX-UI and being involved in the community.</p></div>
            <div className='boxabouttext'><p>I like moonlit walks on the beach and I believe in love at first sight. Perfect has 7 letters and so does meeeeee. Coincidence? I think not. I'm a cupcake looking for a stud muffin.</p></div>
          </div>
          <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={bg2}
      bgImageAlt="the dog"
      strength={200}
    >
      Blur transition from min to max
      <div style={{ height: '800px' }} />
    </Parallax>
        </div>
      );
    }
  }