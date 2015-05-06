/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/app-actions.js');


var Decrease =
    React.createClass({
        handleClick: function() {
            AppActions.decreaseItem(this.props.index);
        }
        ,render: function() {
            return <h1 onClick={this.handleClick}>-</h1>
        }
    });

module.exports = Decrease;