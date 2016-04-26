# node-memcached-quick-tester
A quick app to test memcached connectivity and basic operations.

## To use:
- Update the memcached server location(s) in app.js, like:
```js
var memcached = new Memcached("192.168.6.25:11211");
```
- install dependencies w/ `npm install`
- run w/ `node app.js`
