'use strict'

var combyne = require('combyne')

exports.name = 'combyne'
exports.outputFormat = 'html'

exports.compile = function (str, options) {
  var template = combyne(str, options)
  // TODO: Register filters here.
  return function (locals) {
    return template.render(locals)
  }
}
