var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <img src={this.props.imageUrl} alt="" height="200px" width="200px" />
      </div>
    );
  }
});