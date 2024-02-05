const getIdMaker = (id = 0) => {
  return () => ++id;
}
const getId = getIdMaker();

export default getId;