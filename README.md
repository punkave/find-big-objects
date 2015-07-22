# find-the-fat

```javascript
var findTheFat = require('find-the-fat');

var teensy = {
  title: 'teensy',
  thisObjectIs: 'really small'
};


findTheFat(object, 'title', 50000);
// No output produced here

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

findTheFat(object, 'title', 50000);
// phatty: 327680 bytes
//   my: 327680 bytes
//   my.thing: 327680 bytes
//   my.thing.is: 327680 bytes
//   my.thing.is.huge: 327680 bytes
```

## Changelog

0.1.0: initial release. Tests passing.
