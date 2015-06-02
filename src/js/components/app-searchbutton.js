/** @jsx React.DOM */
var React = require('react');

var SearchButton =
        React.createClass({
            /*getInitialState: function() {
                return {searchtext:''};
            }
            ,*/
            search: function(e) {
                this.props.onClick(e);//call parent's search method (basic child parent communication)
            }
            ,render: function() {
                return (
                    <input onClick={this.search} value={this.props.label} type="button" />
                );
            }
        });

module.exports = SearchButton;