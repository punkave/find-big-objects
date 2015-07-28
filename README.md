# find-the-fat

```javascript
var findTheFat = require('find-the-fat');

var teensy = {
  title: 'teensy',
  thisObjectIs: 'really small'
};


findTheFat(teensy, teensy.title, 50000);
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

findTheFat(phatty, phatty.title, 50000);
```

Produces this output:

```
phatty (327765) :
  my(327708)
  my.thing(327698)
  my.thing.is(327691)
  my.thing.is.huge(327682)
```

## Changelog

* 0.1.2: just tweaking the README.

* 0.1.1: just pass in your own title. Show the sizes.

* 0.1.0: initial release. Tests passing.
