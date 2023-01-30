const path = require('path');
const { root } = require('./rootPath');

const vendorsLibraries = [
  'react',
  'bootstrap'
];

const vendor = 'vendors';

const entriesNames = [
  'global',
  // FFRONTEND SECTIONS ENTRIES //
  'homepage',
  'contact',
];

const entry = {};

entriesNames.forEach(name => {
  console.log('Building: ', name);
  entry[name] = path.join(root, 'src/pages/', name, '/index.js');
});

entry[vendor] = vendorsLibraries;

module.exports = {
  entry,
  // customNames: entriesNames,
  // all: Object.keys(entries),
  // vendor,
};
