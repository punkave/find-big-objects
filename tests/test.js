var assert = require('assert');

var findBigObjects = require('../index.js');

describe('find-big-objects', function() {
  it('does not trigger on a small object', function() {
    var small = {
      title: 'small',
      thisObjectIs: 'really small'
    };

    var called = false;
    findBigObjects(small, small.title, 50000, function(s) {
      called = true;
    });
    assert(!called);
  });

  it('does trigger on a big object', function() {

    var big = {
      title: 'big',
      my: {
        thing: {
          is: {
            huge: 'huge '
          }
        }
      },
      other: 'not so big property'
    };

    var i;
    for (i = 0; (i < 16); i++) {
      big.my.thing.is.huge += big.my.thing.is.huge;
    }

    var called = false;
    var output = [];
    findBigObjects(big, big.title, 50000, function(s) {
      called = true;
      output.push(s);
    });
    assert(called);
    assert(output.length === 5);
    assert(output[0].match(/big/));
    assert(output[1] && output[1].match(/my/));
    assert(output[1] && (!output[1].match(/huge/)));
    assert(output[2] && output[2].match(/thing/));
    assert(output[3] && output[3].match(/is/));
    assert(output[4] && output[4].match(/huge/));

  });
});

