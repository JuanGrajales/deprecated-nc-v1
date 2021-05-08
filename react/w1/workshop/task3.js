class Student {
  constructor(name, email, community) {
    this.name = name;
    this.email = email;
    this.community = community;
  }
}

class Bootcamp {
  constructor(name, level, students = []) {
    this.name = name;
    this.level = level;
    this.students = students;
  }
  registerStudent(student) {
    let duplicatesFound = this.students.filter(
      (s) => s.email === student.email
    );
    if (duplicatesFound.length) {
      console.log(`The student ${student.email} is already registered!`);
    } else {
      this.students.push(student);
      console.log(`Registering ${student.email} to the bootcamp ${this.name}.`);
    }
    return this.students;
  }
}

const s1 = new Student("Juan", "juan@j.com", "react");
const s2 = new Student("Jess", "jess@j.com", "react");
const s3 = new Student("Jaime", "jaime@j.com", "react");
console.log(s1);

const bootcamp = new Bootcamp("Bootcamp", "react", [s1, s2, s3]);
console.log(bootcamp);

const s4 = new Student("Tiff", "tiff@t.com", "react");
bootcamp.registerStudent(s4);
console.log(bootcamp);
