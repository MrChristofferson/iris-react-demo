var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <img src="" height="100px" width="100px" />
        <p>{this.props.name}</p>
      </div>
    );
  }
}); 

