var Promise = require('es6-promise').Promise;
var Memcached = require('memcached');
var memcached = new Memcached("192.168.6.25:11211");

console.log('starting up!');


function testTouch(){
  return new Promise(function(resolve, reject){
    console.log('# testing touch');
    memcached.touch('ryan-test-key', 1000, function(err, ok){
      if (err){
        console.log('touch error: ' + err);
        reject(err);
      } else {
        console.log('touch result: ' + ok);
        resolve(ok);
      }
    });
  });
}

function testGet()
{
  return new Promise(function(resolve, reject){
    console.log('# testing get');
    memcached.get('ryan-test-key', function(err, ok){
      if (err){
        console.log('get error: ' + err);
        reject(err);
      } else {
        console.log('get result: ' + ok);
        resolve(ok);
      }
    });
  });
}

function testSet()
{
  return new Promise(function(resolve, reject){
    console.log('# testing set');
    memcached.set('ryan-test-key', 'ryan-test-value', 1000, function(err, ok){
      if (err)
      {
        console.log('set error: ' + err);
        reject(err);
      } else {
        console.log('set result: ' + ok);
        resolve(ok);
      }
    });
  });
}

function testDelete(){
  return new Promise(function(resolve, reject){
    console.log('# testing delete');
    memcached.delete('ryan-test-key', function(err, ok){
      if (err)
      {
        console.log('delete error: ' + err);
        reject(err);
      } else {
        console.log('delete result: ' + ok);
        resolve(ok);
      }
    });
  });
}

testSet()
.then(testTouch)
.then(testGet)
.then(testDelete)
.then(testGet)
.then(function(result){
  console.log('done!');
})
.catch(function(error){
  console.log('error occurred: ' + error);
});
