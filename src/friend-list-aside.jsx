var React = require('react');
var FriendItem = require('./friend-item');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="col-md-3 friend-list-aside">
          <FriendItem />
      </div>
    );
  }
})