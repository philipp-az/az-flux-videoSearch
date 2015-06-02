/** @jsx React.DOM */

var APP = require('./components/app-noflux');
var React = require('react');

//Not working: var KalturaClient = require('./vendor/KalturaClient.min.js');

//var MaterialUI = require('material-ui');
//var RaisedButton = MaterialUI.RaisedButton;

React.render(
    <APP />,
    document.getElementById('main')
);
