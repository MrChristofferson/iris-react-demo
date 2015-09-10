var React = require('react');
var ProfileAside = require('./profile-aside');
var FriendListAside = require('./friend-list-aside');
var NewsFeed = require('./news-feed');
var $ = require('jquery');

var App = React.createClass({
  render: function() {
    return (
      <div className="container">
        <ProfileAside 
          firstname={this.props.firstname}
          imageUrl={this.props.imageUrl}
          position={this.props.position}
          bio={this.props.bio}
        />
      </div>
    );
  }
})


$.get('http://localhost:3000/users/1', function(users){
  console.log(users)
})
 
var element = React.createElement(App, userData)
React.render(element, document.getElementById('app'))










