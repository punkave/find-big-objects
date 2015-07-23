var _ = require('lodash');

// Fourth argument is an output function, by default
// it writes to console.log. Fourth argument is mostly
// used for testing

module.exports = function(object, label, threshold, _output) {
  if (!_output) {
    _output = output;
  }
  var size = JSON.stringify(object).length;
  if (size < threshold) {
    return;
  }
  _output(label + ' (' + size + ') :');
  spelunk(object, '');
  function spelunk(object, dotPath) {
    _.forOwn(object, function(value, name) {
      var myDotPath = dotPath ? (dotPath + '.' + name) : name;
      var size = JSON.stringify(value).length;
      if (size > threshold) {
        _output('  ' + myDotPath + '(' + size + ')');
        if (typeof(value) === 'object') {
          spelunk(value, myDotPath);
        }
      }
    });
  }
};

function output(s) {
  console.log(s);
}
