/** @jsx React.DOM */
var React = require('react');


var SearchResults =
        React.createClass({
            render: function() {
                //console.log('SearchResults props: ',this.props);
                //console.log('SearchResults state: ',this.state);
                if (this.props.videos) {
                    var videos = this.props.videos;
                    var searchTextLowerCase = this.props.searchtext.trim().toLowerCase();
                    /*var videosFilteredByTitle = videos.filter(function(v) {
                        return v.name.toLowerCase().match( searchTextLowerCase );
                    });*/

                    var content = videos.map(function(r) {
                        return <SearchItem key={r.id} id={r.id} name={r.name} />;
                    });
                } else {
                    content = <p>Loading Videos...</p>;
                }

                return (
                    <div>
                    {content}
                    </div>
                );
            }
        });


var SearchItem =
    React.createClass({
        render: function() {
            return (
                <p>
                {this.props.id} - {this.props.name}
                </p>
                );
        }
    });




module.exports = SearchResults;