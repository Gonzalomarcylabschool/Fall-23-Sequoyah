/** Part 2: Explaining how callbacks can help us */

/* start here, point out flaws */
const greet = (person, msg, volumeLevel) => {
  let result = '';
  if (volumeLevel === 'loud') {
    result = `${person} said, "${msg.toUpperCase()}!"`
  } else if (volumeLevel === 'quiet') {
    result = `${person} said, "...${msg.toLowerCase()}..."`
  }
  console.log(result)
  return result;
}

greet('Maya', 'Hello', 'loud')
greet('Zo', 'Bye', 'quiet')
/* greet('Zo', 'Bye', 'scream') won't work */

/* refactor to use callbacks */
const yell = (msg) => `${msg.toUpperCase()}!!`;
const whisper = (msg) => `...${msg.toLowerCase()}...`;

const greetBetter = (person, msg, voiceCallback) => {
  const result = `${person} said, "${voiceCallback(msg)}"`
  console.log(result);
  return result;
}

greetBetter('Maya', 'Hello', yell);
greetBetter('Zo', 'Bye', whisper);

/* now we can EASILY alter behavior with extra functions */
/* Here we're defining an "inline function" */
greetBetter('Sara', 'Hi', (msg) => `AH! ${msg.toUpperCase()}!!`);