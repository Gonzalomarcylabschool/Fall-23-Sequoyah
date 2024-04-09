const getId = ((id = 0) => {
  return () => ++id;
})()

module.exports = getId;