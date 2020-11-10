console.log('callback demo');
console.log('-------------');

// ES5
function getUser(username, cb) {
  console.log('getUser() has started..');
  setTimeout(() => {
    const result = users.find(u => u.name === username);

    if (result) {
      cb(null, result);
    } else {
      // cb('user not found!', null);
      cb('user not found!');
    }

  }, 5000);

  // return undefined
}

console.log('begin');

getUser('ram', (error, user) => {
  if (error) {
    console.log('Error:', error);
    return;
  }

  console.log('user:', user);  // dependent on getUser() result
});

console.log('perform some other operation..'); // independent of getUser() result

console.log('end');
