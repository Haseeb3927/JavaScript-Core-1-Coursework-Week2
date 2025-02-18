/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/
var name = "Daniel";
var danielsRole = "mentor";
function roleInCYF(name, danielsRole) {
  if (danielsRole === "mentor") {
    return `Hi,  I'm ${name}, I'm a ${danielsRole}.`;
  } else {
    return `Hi, I'm ${name}, I'm a student.`;
  }
}

//console.log(roleInCYF(name, danielsRole)); // logs "Hi, I'm Daniel, I'm a mentor."

/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/
