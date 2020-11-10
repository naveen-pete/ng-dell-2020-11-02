console.log('promise demo');
console.log('------------');

// ES6 / ES2015
function getUser(username) {
  return new Promise((resolve, reject) => {
    console.log('getUser() has started..');
    setTimeout(() => {
      const result = users.find(u => u.name === username);

      if (result) {
        resolve(result); // success
      } else {
        reject('user not found!'); // failure
      }

    }, 5000);
  });
}

console.log('begin');

getUser('ram')
  .then(user => console.log('user:', user))
  .catch(error => console.log('Error:', error));

console.log('perform some other operation..'); // independent of getUser() result

console.log('end');
