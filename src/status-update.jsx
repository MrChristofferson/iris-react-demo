var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="status-update">
        <div className="thumbnail">
            <h3>Share your thoughts...</h3>
            <input type="text" placeholder="I'm having the best day ever!"></input>
            <a href="#" className="btn btn-primary" role="button">Post</a>
        </div>
      </div>
    );
  }
});