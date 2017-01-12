import React from 'react';

class Pane extends React.Component {
	
	render() {
		return (
			<div className={(this.props.label)+ " section"}>
				{this.props.children}
			</div>
		);
	}
}

export default Pane;