# find-big-objects

This code:

```javascript
var findBigObjects = require('find-big-objects');

var small = {
  title: 'small',
  thisObjectIs: 'really small'
};


findBigObjects(small, small.title, 50000);
// No output produced here

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

findBigObjects(big, big.title, 50000);
```

Produces this output on the console:

```
big (327765) :
  my(327708)
  my.thing(327698)
  my.thing.is(327691)
  my.thing.is.huge(327682)
```

The first argument is your object. The second argument is a label to display if your object is too large. The third argument is the number of bytes considered to be "too large;" anything with a JSON representation that large or larger will generate output.

You can also pass your own output function as the last argument. The output function is a simple synchronous function that takes a string and is expected to add a newline on its own.

## Changelog

* 0.1.3: documented the features a little more formally. Switched to a more meaningful, inoffensive name.

* 0.1.2: just tweaking the README.

* 0.1.1: just pass in your own title. Show the sizes.

* 0.1.0: initial release. Tests passing.
