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
        <NewsFeed 
          imageUrl={this.props.imageUrl}
        />
        <FriendListAside
          friends={this.props.friends}
        />
      </div>
    );
  }
})

var userData = {
  id: 1,
  firstname: "Chris",
  imageUrl: "https://media.licdn.com/media/AAEAAQAAAAAAAAU5AAAAJDhlNTI2ZDg0LWViMzgtNDQ3Zi05MjBkLThjODI3M2UzOTk5Mg.jpg",
  position: "Web Developer",
  bio: "Aspiring React genius... I love playing music, eating mysterious foods, learning new things, making people smile, and talking to dogs as if they're humans.",
  friends: [
    {name: 'Kate'},
    {name: 'Joe'},
    {name: 'Jack'}
  ]
}

var element = React.createElement(App, userData)
React.render(element, document.getElementById('app'))




