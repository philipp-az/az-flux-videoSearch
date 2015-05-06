/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/app-actions.js');


var AddToCart =
    React.createClass({
        handleClick: function() {
            AppActions.addItem(this.props.item);
        }
        ,render: function() {
            return <h1 onClick={this.handleClick}>Add to cart</h1>
        }
    });

module.exports = AddToCart;