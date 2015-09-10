var React = require('react');
var UserImg = require('./user-image');
var UserPosition = require('./user-position');
var UserBio = require('./user-bio');
var UserGreeting = require('./user-greeting');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="col-md-3 profile-aside">
        <UserImg imageUrl={this.props.imageUrl} />
        <UserGreeting firstname={this.props.firstname} />
        <UserPosition position={this.props.position} />
        <UserBio bio={this.props.bio} />
      </div>
    );
  }
})