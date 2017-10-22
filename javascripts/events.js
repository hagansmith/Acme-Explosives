"use strict";

var filter = require('./data');

$('#category-selector').change((event) => {
  filter.dataFilter(event.target.value);
});

module.exports = {};
