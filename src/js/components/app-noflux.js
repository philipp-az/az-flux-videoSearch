/** @jsx React.DOM */
var React = require('react');
var Catalog = require('../components/app-catalog.js');
var Cart = require('../components/app-cart.js');

var MaterialUI = require('material-ui');
var RaisedButton = MaterialUI.RaisedButton;


var APP =
    React.createClass({
        /*handleClick: function() {
         AppActions.addItem('this is the items');
         },
         render: function() {
         return <h1 onClick={this.handleClick}>MY FLUX APP!</h1>
         }*/
        render: function() {
            return (
                <div>
                    <h1>Let's shop</h1>
                    <Catalog />
                    <h1>Cart</h1>
                    <Cart />
                    <h1>Material UI Tests</h1>
                    <RaisedButton label="TEST: Material UI RaisedButton" />
                </div>
                );
        }
    });

module.exports = APP;