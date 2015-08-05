var _ = require('underscore');

//this will store the tweets
var data = [];


var add = function (name, text) {
  data.push({ name: name, text: text });
};

var list = function () {
  return _.clone(data);
};

var find = function (properties) {
  return _.where(data, properties);
};

module.exports = { add: add, list: list, find: find };

