import React from 'react';
import ReactDOM from 'react-dom';

// components

import List from './components/List.js';
import Pane from './components/Pane.js';
import Project from './components/Project.js';
import Tabs from './components/Tabs.js';

// stylesheet

require('./main.scss');

class App extends React.Component {
	render() {
		return (
			<div>
				<Tabs pageTitle="lizzie cullen davison" selected={0}>

					<Pane label="about">
							<div className="intro">
								<h1>hey! i'm lizzie, a front-end web developer from the uk currently based in berlin, germany</h1>
								<p>you can check out my CSS animation experiments over on <a href="https://codepen.io/em-cd">codepen</a>, and see some of my source code on <a href="https://github.com/em-cd">github</a></p>
								<p>i'm currently available for freelance work. feel free to reach me at <a href="https://twitter.com/emc_dav">@emc_dav</a> or <a href="mailto:lizzie.cullendavison@gmail.com">lizzie.cullendavison@gmail.com</a></p>
							</div>
							<div className="skills">
								<List title="languages" list={["html5", "css3, sass", "javascript", "php / mysql"]} />
								<List title="frameworks & tools" list={["jquery", "react.js, angular.js", "npm", "webpack", "wordpress, wp rest api", "git, bitbucket"]} />
							</div>
							
					</Pane>

					<Pane label="projects">

						<Project
							title="brace.club"
							description="development"
							href="http://brace.club"
							imageUrl="../assets/braceclub.png"
							imageClass="desktop"
						>
							<p>website for productions startup BRACE CLUB. the site uses angular in the front end with wordpress in the back end, using custom endpoints for the wp rest api to fetch the data.</p>
							<p className="tech">angular, wordpress, WP REST API, jquery</p>
						</Project>

						<Project
							title="jakewarren.org"
							description="design & development"
							href="http://jakewarren.org"
							imageUrl="../assets/jakewarren.png"
							imageClass="desktop"
						>
							<p>website for journalist/producer jake warren. fully responsive, custom wordpress theme with integrated embedding for different video hosting platforms.</p>
							<p className="tech">html5, css3, javascript, jquery, wordpress</p>
						</Project>

						<Project
							title="get down"
							description="design & development"
							href="http://emcd.me/get-down"
							github="http://github.com/em-cd/get-down"
							imageUrl="../assets/get-down-app.png"
							imageClass="mobile"
						>
							<p>a web app that recommends bars in leeds for your tinder dates. created as part of the <a href="http://www.codefirstgirls.org.uk/">code first: girls</a> beginners web development course.
							</p>
							<p className="tech">html, css, javascript, jquery</p>
						</Project>

						<Project
							title="emcd.me"
							description="design & development"
							href="http://emcd.me"
							github="http://github.com/em-cd/emcd.me"
							imageUrl="../assets/emcd.png"
							imageClass="desktop"
						>
							<p>my personal website. experimental site created using react, with sass generating the css. </p>
							<p className="tech">react, sass, webpack</p>
						</Project>
			
						<Project
							title="ducsiegenthaler.ch"
							description="design & development"
							href="http://ducsiegenthaler.ch"
							imageUrl="../assets/duc-project.png"
							imageClass="desktop"
						>
							<p>temporarily unavailable :'(</p>
							<p>minimalist website for swiss fashion student duc siegenthaler. custom wordpress theme, responsive when viewed on desktop or mobile.</p>
							<p className="tech">html5, css, javascript, jquery, wordpress</p>
						</Project>

					</Pane>



				</Tabs>
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<App/>, app);