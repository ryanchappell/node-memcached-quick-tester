var Memcached = require('memcached');
var memcached = new Memcached("192.168.6.25:11211");

console.log('starting up!');

console.log('testing touch');
memcached.touch('ryan-test-key', 1000, function(err, ok){
  if (err){
    console.log('touch error: ' + err);
  } else {
    console.log('touch result: ' + ok);
  }
});

console.log('testing get');
memcached.get('ryan-test-key', function(err, ok){
  if (err){
    console.log('get error: ' + err);
  } else {
    console.log('get result: ' + ok);
  }
});
//
console.log('testing set');
memcached.set('ryan-test-key', 'ryan-test-value', 1000, function(err, ok){
  if (err)
  {
    console.log('set error: ' + err);
  } else {
    console.log('set result: ' + ok);
  }

});
//
console.log('testing delete');
memcached.delete('ryan-test-key', function(err, ok){
  if (err)
  {
    console.log('delete error: ' + err);
  } else {
    console.log('delete result: ' + ok);
  }
});

console.log('done!');
