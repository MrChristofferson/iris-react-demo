var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <h4>
        <b>Bio:</b>
        <p>{this.props.bio}</p>
      </h4>
    );
  }
});