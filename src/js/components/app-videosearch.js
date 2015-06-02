/** @jsx React.DOM */
var React = require('react');
var SearchField = require('../components/app-searchfield.js');
var SearchResults = require('../components/app-searchresults.js');
var SearchButton = require('../components/app-searchbutton.js');


var VideoSearch =
    React.createClass({
        getInitialState: function() {
            return {
                    searchtext:''
                    ,kaltura: {categoryId:'21939571',ks:null}
                    ,videos:[]
            };
        }
        ,componentWillMount: function() {
            if (!this.state.kaltura.ks) {
                this.getKalturaSession();
            }

        }
        ,componentWillUpdate: function(nextProps, nextState) {
            //console.log('componentWillUpdate: nextState: ',nextState);
        }
        ,onChange: function(e) {
            this.setState({searchtext: e.target.value});
        }
        ,getKalturaSession: function() {
            $.getJSON('http://yoleidoo.com/az/kaltura-code-samples/az/player%20embedding/getKS.php', function( data ) {
                setKS(data);//implement this on your production server, make sure you use a user with restricted rights
                            //this link is for development purposed only. The KS generated grants admin rights.
            });
            var _self = this;
            var setKS = function(data) {
                _self.setState( { kaltura: {ks: data[0]}} );
            }
        }
        ,getKalturaVideosByNameAndCategory: function() {
            var _self = this;
            var getKalturaVideos = function () {
                // get videos using Kaltura Client Library API
                var partnerId =1719221;
                var config = new KalturaConfiguration(partnerId);
                config.serviceUrl = "http://www.kaltura.com/";
                var client = new KalturaClient(config);
                client.ks = _self.state.kaltura.ks;
                var filter = new KalturaBaseEntryFilter();
                filter.categoriesIdsMatchOr = _self.state.kaltura.categoryId;//21939571: ZüriNews
                //filter.categoryAncestorIdIn = _self.state.kaltura.categoryId;//21939571: ZüriNews
                filter.freeText = _self.state.searchtext+'*';
                filter.orderBy = '-createdAt';//KalturaBaseEntryOrderBy.CREATED_AT_ASC;
                //var filter.typeEqual = KalturaEntryType.MEDIA_CLIP;
                var pager = null;

                // load media entries
                var mediaDataLoaded = function (success, results) {
                    if (!success) {
                        console.log('ERROR: '+results);
                    }

                    if (results.code && results.message) {
                        console.log(results.objects);
                        console.log('ERROR: '+results.message);
                    }

                    // set loaded data to component's state
                    if (_self.isMounted()) {
                        _self.setState({videos: results.objects});
                    }
                };
                var result = client.baseEntry.listAction(mediaDataLoaded, filter, pager);

            };
            getKalturaVideos();
        }
        ,search: function(e) {
            if (this.state.kaltura.ks) {
                this.setState({videos: null});//remove videos to render "loading spinner"
                this.getKalturaVideosByNameAndCategory();
            }
        }
        ,render: function() {
            return (
                <div>
                    <h1>Kaltura Video Search</h1>
                    <SearchField searchtext={this.state.searchtext} onChange={this.onChange} /> <SearchButton onClick={this.search} label="suchen" />
                    <br />
                    Search results for {this.state.searchtext}<br />
                    <SearchResults searchtext={this.state.searchtext} videos={this.state.videos} />
                </div>
                );
        }
    });

/*var videosMock = [
    {id:'1',name: 'Event Horizon'}
    ,{id:'2',name: 'Pulp Fiction'}
    ,{id:'3',name: 'Magnolia'}

];*/

module.exports = VideoSearch;