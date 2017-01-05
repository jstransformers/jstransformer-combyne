# jstransformer-combyne

[Combyne](https://github.com/tbranyen/combyne) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-combyne/master.svg)](https://travis-ci.org/jstransformers/jstransformer-combyne)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-combyne/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-combyne)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-combyne/master.svg)](http://david-dm.org/jstransformers/jstransformer-combyne)
[![NPM version](https://img.shields.io/npm/v/jstransformer-combyne.svg)](https://www.npmjs.org/package/jstransformer-combyne)

## Installation

    npm install jstransformer-combyne

## API

```js
var combyne = require('jstransformer')(require('jstransformer-combyne'));

combyne.render('Hello, {{name}}!', { name: 'World'}).body
//=> 'Hello, World!'
```

## License

MIT
