import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
		<div className="container">
			<div className="card margin-top-md">       
				<div className="card-body">
					<Link to="/photo" className="btn btn-md btn-primary">Photo Input</Link>
          			<Link to="/camera" className="btn btn-md btn-primary">Video</Link>
				</div>  
			</div>
		</div>
    );
  }
}
