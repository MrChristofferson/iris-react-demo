var React = require('react');
var FriendItem = require('./friend-item');

module.exports = React.createClass({
  render: function() {
    var friendsList = this.props.friends.map(function(friends){
      return <FriendItem {...friends} />
    })  
    return (
      <div className="col-md-3 friend-list-aside">
        {friendsList}
      </div>
    );
  }
});


