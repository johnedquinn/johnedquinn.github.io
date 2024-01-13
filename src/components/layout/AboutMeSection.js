/// @file:      HomeContent.js
/// @author:    John Ed Quinn
// @desc:       Content for Home Page

/* IMPORTS */
import React, { Fragment } from 'react';

/* NAVBAR */
const AboutMeSection = () => {
	return (
		<Fragment>
			<div className="container">
			<div className="row py-5"></div>
				<div className="text-center desk-empty">
					<h1 className="card-title text-dark">About Me</h1>
				</div>
				<div className="row py-3 mobile-center">
					<div className="col col-2 text-center mobile-empty">
						<h1 className="card-title text-dark">About Me</h1>
					</div>
					<div className="col col-10 mobile-center">
						<p className="text-dark">I am a software engineer with a passion for compilers and databases.</p>
            <p className="text-dark">I am currently developing <a href="https://github.com/partiql/">PartiQL</a>, the next generation of SQL, at Amazon. My expertise lies in compiler construction and databases, honed through academic pursuits at the University of Notre Dame and professional experience in Seattle.</p>
					</div>
				</div>
			<div className="row py-5"></div>
			</div>

		</Fragment>
	);
}

/* EXPORTS */
export default AboutMeSection;
