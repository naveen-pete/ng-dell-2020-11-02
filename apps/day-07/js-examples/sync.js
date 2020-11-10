console.log('sync demo');
console.log('---------');

function getUser(username) {
  const user = users.find(u => u.name === username);
  return user;
}

console.log('begin');

const user = getUser('ram');
console.log('user:', user);  // dependent on getUser() result

console.log('perform some other operation..'); // independent of getUser() result

console.log('end');
