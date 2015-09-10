var React = require('react');
var UserImg = require('./user-image');
var UserPosition = require('./user-position');
var UserBio = require('./user-bio');
var UserGreeting = require('./user-greeting');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="col-md-3 profile-aside">
        <UserImg />
        <UserGreeting />
        <UserPosition />
        <UserBio />
      </div>
    );
  }
})