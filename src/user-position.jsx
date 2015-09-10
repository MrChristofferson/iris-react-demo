var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <h3>
       <b>Position: </b>
       <p>{this.props.position}</p>
      </h3>
    );
  }
});