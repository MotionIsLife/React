/** @jsx React.DOM */
'use strict';
var HelloWorld = React.createClass({displayName: 'HelloWorld',
	getInitialState: function() {
		return {message: this.props.initialMessage};
	},
	clicked: function(event) {
		this.setState({message: "Clicked to h3"});
	},
	render: function() {
		return (
			React.DOM.h3( {onClick:this.clicked}, this.state.message)
		);
	}
});

React.renderComponent(
	HelloWorld({initialMessage: 'Hello, Kitty!'}),
	document.getElementById('app')
);
