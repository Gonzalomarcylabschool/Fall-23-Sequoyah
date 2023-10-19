// much easier to find the the missing brackets now because the indentation is correct
const thing = (hobbies) => {
  const person = {
    name: 'tom',
    age: 12,
    loudHobbies: hobbies.filter(hobby => {
      console.log(hobby)
      return hobby.toUppercase()
  };
  return person;
}