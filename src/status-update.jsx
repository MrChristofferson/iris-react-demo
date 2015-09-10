var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="status-update">
        <div className="thumbnail">
          <img src="..." alt="..." />
          <div className="caption">
            <h3>Thumbnail label</h3>
            <p><a href="#" className="btn btn-primary" role="button">Button</a></p>
          </div>
        </div>
      </div>
    );
  }
});