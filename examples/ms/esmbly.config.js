const path = require('path');
const JSDoc = require('@esmbly/transformer-jsdoc');

module.exports = [
  {
    input: ['./src/**/*.js'],
    transformers: [
      JSDoc.createTransformer({}),
    ],
    output: [
      {
        dir: 'dist',
        format: '.ts',
        flatten: true,
      },
    ],
  },
];


