import React from 'react';


class Project extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
            imgLoaded: false
        }
	}

	 handleImgLoaded (event){
        this.setState({
            imgLoaded: true
        });
    }

	render() {
		return (
			<div className={"project" + (this.state.imgLoaded ? " image-loaded" : " image-loading")}>
				
				<div className="preview">
					<img src={this.props.imageUrl} onLoad={this.handleImgLoaded.bind(this)} className={this.props.imageClass} />
				</div>

				<div className="content">
					<h2 className="project-title">{this.props.title}</h2>
						<a href={this.props.href}>www</a>
						{this.props.github ? <span> • <a href={this.props.github}>code</a></span> : null}
					<h3 className="project-subheader">{this.props.description}</h3>
					{this.props.children}
				</div>
				
			</div>
		);
	}
}

export default Project;