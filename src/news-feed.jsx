var React = require('react');
var StatusUpdate = require('./status-update');


module.exports = React.createClass({
  render: function() {
    return (
      <div className="news-feed col-md-6" imageUrl={this.props.imageUrl}>
        <StatusUpdate />
      </div>  
    );
  }
});