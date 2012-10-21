# myWeather2

A simple node.js interface to the [myWeather2](http://www.myweather2.com/developer/) API.

## Installing

  $ npm install moduleName

## Example

```js

var myweather2 = require('myweather2');
var weather = myweather2('yourapikey');  // API Key

weather.forecast('B191AS', function(err, res) {
    console.log(res);
});

```
