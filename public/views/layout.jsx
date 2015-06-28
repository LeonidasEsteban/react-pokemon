'use strict';

var React = require('react');

module.exports = React.createClass({

  render: function render() {

    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'/>
          <link rel="stylesheet" href="/css/pokemon.css"/>
          <title>
            {this.props.title}
          </title>
        </head>
        <body>
          <div id="container">
            {this.props.children}
          </div>
        </body>
        <script src='/js/index.js'></script>
      </html>
    );
  }
});