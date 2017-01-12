import React from 'react';

class List extends React.Component {
	
	render() {
		return (
			<div className="list">
				<h3>{this.props.title}</h3>
				<ul>
					{this.props.list.map(function(listValue, index){
						return <li key={index}>{listValue}</li>;
					})}
				</ul>
			</div>
		);
	}
}

export default List;