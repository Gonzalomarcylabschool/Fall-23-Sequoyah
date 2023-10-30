const THIS_VARIABLE = 'THIS GLOBAL CONSTANT';
const regex = (pattern, str) => {
  const regexPattern = new RegExp(`${pattern}`, 'g');
  return regexPattern.test(str) ? 'yes' : 'no';
};

module.exports = {
  THIS_VARIABLE,
  regex,
};
