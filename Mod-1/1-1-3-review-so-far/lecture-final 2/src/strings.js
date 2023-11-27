const hello = 'Hello, world!';

console.log('length:', hello.length);
console.log('first index:', hello[0]);
console.log('last index', hello[hello.length - 1]);
console.log('----------------', );

console.log(hello.toUpperCase());
console.log(hello.toLowerCase());
console.log('----------------', );

console.log('indexOf world:', hello.indexOf('world'));
console.log('includes World:', hello.includes('World'));
console.log('----------------', );

console.log('slice first word:', hello.slice(0, 5));
console.log('slice to end:', hello.slice(7));
console.log('----------------', );

console.log('replace:', hello.replace('world', 'class'));
console.log('replace all regex:', hello.replace(/o/g, '0'));
console.log('replaceAll:', hello.replaceAll('o', '0'));