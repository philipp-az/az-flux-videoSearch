/** @jsx React.DOM */
var React = require('react');

var SearchField =
        React.createClass({
            /*getInitialState: function() {
                return {searchtext:''};
            }
            ,*/
            changeSearchText: function(e) {
                //this.setState({searchtext: e.target.value});
                this.props.onChange(e);//call parent's onChange handler (basic child parent communication)
            }
            ,render: function() {
                return (
                    <input value={this.props.searchtext} onChange={this.changeSearchText} />
                );
            }
        });

module.exports = SearchField;