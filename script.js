let studentsValue = document.querySelector(".students-value")
let submitStudentValue = document.querySelector(".submit-button")
let numberOfStudentsEl = document.querySelector(".numbers-display")
let generateButton = document.querySelector(".generate-button")

let numberOfStudents = null;

submitStudentValue.onclick = () => {
    numberOfStudents = studentsValue.value;
    numberOfStudentsEl.textContent = numberOfStudents;
console.log(numberOfStudents);}


generateButton.onclick = () => {
    let randomStudents = Math.floor(Math.random()*numberOfStudents+1);
    numberOfStudentsEl.textContent = randomStudents;

}