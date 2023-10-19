// REDUNDANT COMMENT EXAMPLE

// add students to honor roll if they have a high grade
students.forEach(student => {
  if (student.grade > honorRoll) {
    honorRollStudents.push(student)
  }
});

// Obviously OK for notes, but not ideal for real world code
