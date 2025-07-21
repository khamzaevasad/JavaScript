/* 
1.  Bahosi 5, 4, 3 bo’lgan o’quvchilarni ismlaridan iborat massiv qaytaruvchi getNamesByGrade(students, grade) funksiya tuzing. (map, filter)
5 baho - (85 - 100)
4 baho - (70 - 85)
3 baho – (60 - 70)
*/

const students = [
  { name: "Quincy", percent: 96 },
  { name: "Jason", percent: 84 },
  { name: "Alexis", percent: 100 },
  { name: "Sam", percent: 65 },
  { name: "Katie", percent: 90 },
  { name: "Anna", percent: 75 },
];

const studentGrade = students.map((student) => {
  if (student.percent <= 100 && student.percent >= 85) {
    return { ...student, grade: 5 };
  } else if (student.percent <= 85 && student.percent >= 70) {
    return { ...student, grade: 4 };
  } else if (student.percent <= 70 && student.percent >= 60) {
    return { ...student, grade: 3 };
  }
});
