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
								<h1>hey! i'm lizzie, a front-end web developer based in london, uk</h1>
								<p>you can check out my CSS animation experiments over on <a href="https://codepen.io/em-cd">codepen</a>, and see some of my source code on <a href="https://github.com/em-cd">github</a></p>
								<p>i'm currently available for freelance or full-time work. feel free to reach me at <a href="https://twitter.com/emc_dav">@emc_dav</a> or <a href="mailto:lizzie.cullendavison@gmail.com">lizzie.cullendavison@gmail.com</a></p>
							</div>
							<div className="skills">
								<List title="languages" list={["html5", "css3, sass", "javascript", "php / mysql"]} />
								<List title="frameworks & tools" list={["jquery", "react.js, angular.js", "npm", "webpack", "wordpress, wp rest api", "git, bitbucket"]} />
							</div>
							
					</Pane>

					<Pane label="projects">

						<Project
							title="berlin feminist film week"
							description="design & development"
							href="http://berlinfeministfilmweek.com"
							imageUrl="../assets/bffw-program.jpg"
							imageClass="desktop"
						>
							<p>website for the fourth edition of the feminist film festival in berlin. browse through the program, past events, or have a look through an extensive database of feminist films.</p>
							<p className="tech">wordpress, sass, jquery, ajax</p>
						</Project>

						<Project
							title="BRACE CLUB"
							description="development"
							imageUrl="../assets/braceclub.jpg"
							imageClass="desktop"
						>
							<p>website for productions startup BRACE CLUB, using angular in the front end, wordpress in the back. the site used custom endpoints to fetch the data with the wp rest api, with smooth animated transitions between pages.</p>
							<p className="tech">angular, wordpress, WP REST API, jquery</p>
						</Project>

						<Project
							title="jakewarren.org"
							description="design & development"
							href="http://jakewarren.org"
							imageUrl="../assets/jakewarren.jpg"
							imageClass="desktop"
						>
							<p>website for journalist/producer jake warren. fully responsive, custom wordpress theme with integrated embedding for multiple video hosting platforms.</p>
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
							<p>a web app that recommends bars in leeds to suit your preferences. created as part of the <a href="http://www.codefirstgirls.org.uk/">code first: girls</a> beginners web development course.
							</p>
							<p className="tech">html, css, javascript, jquery</p>
						</Project>

						<Project
							title="emcd.me"
							description="design & development"
							href="http://emcd.me"
							github="http://github.com/em-cd/emcd.me"
							imageUrl="../assets/emcd.jpg"
							imageClass="desktop"
						>
							<p>my personal website. experimental site created using react and sass.</p>
							<p className="tech">react, sass, webpack</p>
						</Project>
			
						<Project
							title="ducsiegenthaler.ch"
							description="design & development"
							href="http://ducsiegenthaler.ch"
							imageUrl="../assets/duc-project.jpg"
							imageClass="desktop"
						>
							<p>minimalist website for swiss fashion student duc siegenthaler. custom built wordpress theme, responsive when viewed on desktop or mobile.</p>
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