/** @jsx React.DOM */
var React = require('react');


var SearchResults =
        React.createClass({
            render: function() {
                var videos = this.props.videos;
                var searchTextLowerCase = this.props.searchtext.trim().toLowerCase();
                var videosFilteredByTitle = videos.filter(function(v) {
                     return v.title.toLowerCase().match( searchTextLowerCase );
                });

                return (
                    <div>
                    {videosFilteredByTitle.map(function(r) {
                        return <SearchItem key={r.id} id={r.id} title={r.title} />;
                    })}
                    </div>
                );
            }
        });


var SearchItem =
    React.createClass({
        render: function() {
            return (
                <p>
                {this.props.id} - {this.props.title}
                </p>
                );
        }
    });




module.exports = SearchResults;