var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello, <b>{this.props.firstname}</b>!</h1>
      </div>
    );
  }
});