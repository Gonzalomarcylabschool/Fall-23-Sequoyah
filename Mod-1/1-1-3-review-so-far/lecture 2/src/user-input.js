const prompt = require('prompt-sync')({ sigint: true });

while (true) {
  const input = prompt('Enter a number: ');
  if (input === 'stop') break;
  console.log(input);
}