const thing = (hobbies) => {
  const person = {
    name: 'tom',
    age: 12,
    loudHobbies: hobbies.filter(hobby => {
      console.log(hobby)
      return hobby.toUppercase()
    }), // IT WAS ME, BRACKETS
  };
  return person;
};

