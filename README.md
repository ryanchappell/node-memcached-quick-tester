# node-memcached-quick-tester
A quick app to test memcached connectivity and basic operations.

## To use:
- Update the memcached server location(s), like:
```js
//app.js
var memcached = new Memcached("192.168.6.25:11211");
```
- `npm install` to install dependencies
- `node app.js` to run
