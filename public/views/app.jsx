'use strict';

var React = require('react');
var Router = require('react-router');
var Layout = require('./layout.jsx');


module.exports = React.createClass({

  render: function render() {
    return (
      <Layout {...this.props}>
        <Router.RouteHandler {...this.props}/>
      </Layout>
    );
  },
  
});
