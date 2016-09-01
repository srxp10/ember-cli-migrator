var string = require('underscore.string');

module.exports.dasherizePath = function (path) {
    return path.split('/').map(function (dir) {
        return string.dasherize(dir).replace(/^-/, '');
    }).join('/');
};