
const path = require('path');

const promises = {
  readFile: jest.fn(() => Promise.resolve('success')),

  access: jest.fn(() => Promise.resolve()),
};

module.exports = {
  promises,
};
