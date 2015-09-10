var React = require('react');
var ProfileAside = require('./profile-aside');
var FriendListAside = require('./friend-list-aside');
var NewsFeed = require('./news-feed');

var App = React.createClass({
  render: function() {
    return (
      <div className="container">
        <ProfileAside />
      </div>
    );
  }
})

var element = React.createElement(App, options)
React.render(element, document.getElementById('app'));

var options = {
  firstname: 'Chris'
}








