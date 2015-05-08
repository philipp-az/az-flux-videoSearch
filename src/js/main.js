/** @jsx React.DOM */
var APP = require('./components/app');
var React = require('react');
var MaterialUI = require('material-ui');
var RaisedButton = MaterialUI.RaisedButton;

React.render(
    <APP />,
    document.getElementById('main')
);
