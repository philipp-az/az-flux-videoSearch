/** @jsx React.DOM */
var React = require('react');
var SearchField = require('../components/app-searchfield.js');
var SearchResults = require('../components/app-searchresults.js');


var VideoSearch =
    React.createClass({
        getInitialState: function() {
            return {searchtext:'Ma'};
        }
        ,onChange: function(e) {
            this.setState({searchtext: e.target.value});
        }
        ,render: function() {
            return (
                <div>
                    <h1>Kaltura Video Search</h1>
                    <SearchField searchtext={this.state.searchtext} onChange={this.onChange} />
                    <br />
                    Search results for {this.state.searchtext}<br />
                    <SearchResults searchtext={this.state.searchtext} videos={videos}/>
                </div>
                );
        }
    });

var videos = [
    {id:'1',title: 'Event Horizon'}
    ,{id:'2',title: 'Pulp Fiction'}
    ,{id:'3',title: 'Magnolia'}

];

module.exports = VideoSearch;