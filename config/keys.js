if (process.env.NODE_ENV === 'production') {
    module.exports = require('./fromProcess');
  } else if (process.env.NODE_ENV === 'ci') {
    module.exports = require('./fromProcess');
  } else {
    module.exports = require('./dev');
  }