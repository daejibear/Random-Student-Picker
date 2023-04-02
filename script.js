let studentsValue = document.querySelector(".students-value")
let submitStudentValue = document.querySelector(".submit-button")

let numberOfStudents = null;

submitStudentValue.onclick = () => {
    numberOfStudents = studentsValue.value;
console.log(numberOfStudents);}