import React from "react";

class Tabs extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			selected: 0,
			imgLoaded: false
		}
	}

	getIntialState() {
		return {
			selected: this.props.selected
		};
	}
	
	handleClick(index, event) {
		event.preventDefault();
		this.setState({
			selected: index
		});
	}

	_renderTitles() {
		function labels(child, index) {
			let activeClass = (this.state.selected === index ? 'active' : '');
			if (child.props.label === 'home') {
				// if (this.state.selected === index) {
				// 	return
				// }
			};
			return (
				<li key={index}
					className="menu-item">
					<a href="#"
						className={activeClass}
						onClick={this.handleClick.bind(this, index)}>
						{child.props.label}
					</a>
				</li>
			);
		}
		return (
			<ul className="navigation">
				{this.props.children.map(labels.bind(this))}
			</ul>
		);
	}
	
	_renderContent() {
		return (
			<div className="main">
				{this.props.children[this.state.selected]}
			</div>
		);
	}
	_renderHomeToggle() {
		// if (this.state.selected === 0) {
		// 	return
		// }
		return (
			<a href="#"
				className={"menu-toggle" + (this.state.selected === 0 ? ' toggle-hidden' : ' toggle-visible')}
				onClick={this.handleClick.bind(this, 0)}>
				<span className="icon-menu">
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				</span>
			</a>
		)
	}
	render() {
		return (
			<div className="">
				<header>
					<h2>{this.props.pageTitle}</h2>
					{this._renderTitles()}
				</header>
				{this._renderContent()}
			</div>
		);
	}
}

export default Tabs;