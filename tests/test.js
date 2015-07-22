var assert = require('assert');

var findTheFat = require('../index.js');

describe('find-the-fat', function() {
  it('does not trigger on a teensy object', function() {
    var teensy = {
      title: 'teensy',
      thisObjectIs: 'really small'
    };

    var called = false;
    findTheFat(teensy, 'title', 50000, function(s) {
      called = true;
    });
    assert(!called);
  });

  it('does trigger on a phatty object', function() {

    var phatty = {
      title: 'phatty',
      my: {
        thing: {
          is: {
            huge: 'huge '
          }
        }
      },
      other: 'not so phatty property'
    };

    var i;
    for (i = 0; (i < 16); i++) {
      phatty.my.thing.is.huge += phatty.my.thing.is.huge;
    }

    var called = false;
    var output = [];
    findTheFat(phatty, 'title', 50000, function(s) {
      called = true;
      output.push(s);
    });
    assert(called);
    assert(output.length === 5);
    assert(output[0].match(/phatty/));
    assert(output[1] && output[1].match(/my/));
    assert(output[1] && (!output[1].match(/huge/)));
    assert(output[2] && output[2].match(/thing/));
    assert(output[3] && output[3].match(/is/));
    assert(output[4] && output[4].match(/huge/));

  });
});

