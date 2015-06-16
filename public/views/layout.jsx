'use strict';

var React = require('react');

module.exports = React.createClass({

  render: function render() {

    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>
            {this.props.title}
          </title>
        </head>
        <body>
          {this.props.children}
        </body>
        <script src='/bundle.js'></script>
      </html>
    );
  }
});