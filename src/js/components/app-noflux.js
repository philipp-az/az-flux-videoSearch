/** @jsx React.DOM */
var React = require('react');
var VideoSearch = require('../components/app-videosearch.js');


var APP =
    React.createClass({
        render: function() {
            return (
                <VideoSearch />
                );
        }
    });

module.exports = APP;