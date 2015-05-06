/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/app-actions.js');


var Increase =
    React.createClass({
        handleClick: function() {
            AppActions.increaseItem(this.props.index);
        }
        ,render: function() {
            return <h1 onClick={this.handleClick}>+</h1>
        }
    });

module.exports = Increase;