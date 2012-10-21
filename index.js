var request = require('superagent');

// MW2 factory
module.exports = function myWeather2(key, temp, ws) {
    return new MW2(key, temp, ws);
};

// Constructor
function MW2(key, temp, ws) {
    this.key  = key;
    this.temp = temp;
    this.ws   = ws;
}

// Forecast
MW2.prototype.forecast = function(query, done) {
    request
    .get('http://www.myweather2.com/developer/forecast.ashx')
    .query({ uac: this.key })
    .query({ output: 'json'})
    .query({ query: query })
    .query({ temp_unit: this.temp })
    .query({ ws_unit: this.ws })
    .end(function(err, res) {
        return done(err, JSON.parse(res.text));
    });
};
