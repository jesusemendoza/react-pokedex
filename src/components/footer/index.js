import React from 'react';
import './_footer.scss';

export default class OverviewFooter extends React.Component {
    render() {
      return <footer>
        <div className="footWide">
			<div className="wideDiv">
			<div className="social-links-container">
				<div className="social-links" >
					<a className="social-link twitter" href="/"></a>
				</div>
				<div className="social-links" >
					<a className="social-link facebook" href="/about"></a>
				</div>	
				<div className="social-links" >
					<a className="social-link instagram" href="/partners"></a>
				</div>
			</div>		
			</div>
	    </div>
     </footer>
    }
  }