/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/app-actions.js');


var RemoveFromCart =
    React.createClass({
        handleClick: function() {
            AppActions.removeItem(this.props.index);
        }
        ,render: function() {
            return <h1 onClick={this.handleClick}>x</h1>
        }
    });

module.exports = RemoveFromCart;