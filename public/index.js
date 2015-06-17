var Client = require('react-engine/lib/client');

require('./**/**/*.jsx', {glob: true});

var options = {
  viewResolver: function(viewName) {
    console.log(viewName);
    return require('./views/' + viewName);
  }
};

document.addEventListener('DOMContentLoaded', function onLoad() {
  Client.boot(options);
});

