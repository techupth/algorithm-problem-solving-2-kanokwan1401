function findStudentIndex(students, searchStudent) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  for (let i = 0; i < students.length; i++) {
    if (students[i] === searchStudent) {
      return i;
    }
  }
  return -1;
}

let students = [
  "Andrew",
  "Bobby",
  "Diana",
  "George",
  "Hannah",
  "Isaac",
  "Jasmine",
  "John",
];

let searchStudent = "John";

console.log(findStudentIndex(students, searchStudent));

// ตอบคำถามตรงนี้จ้า
// Big O = O(n) เพราะลูปผ่านสมาชิกทุกตัว
