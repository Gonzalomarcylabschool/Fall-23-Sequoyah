if (user.default_name) delete user.default_name;
Database.User.migrate(user);

// Why are we deleting default_name?
// It's the only time we see it in the entire repo


// GOOD EXAMPLE

// Enrollment API throws an error in v2 if default_name exists
if (user.default_name) delete user.default_name;
Database.User.migrate(user);


// also ok to try a named function, but it might be clunky
const ensureEnrollmentAPIV2DoesNotThrowErrorWithDefaultName = (user) => {
  if (user.default_name) delete user.default_name;
}
ensureEnrollmentAPIV2DoesNotThrowErrorWithDefaultName(user);
Database.User.migrate(user);