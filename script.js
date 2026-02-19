const name = document.getElementById("studname");
const age = document.getElementById("age");
const course = document.getElementById("course");
const submitBtn = document.getElementById("submitBtn");
const regisss = document.getElementById("regisss");
const numOfStudents = document.getElementById("studentnumber");
const courseTaken = document.getElementById("courseTaken");
const averageAge = document.getElementById("averageage");
let students = [];

submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    const student = {
        name: name.value,
        age: parseInt(age.value),
        course: course.value
    };
    students.push(student);
    updateTable();
    updateStats();
    name.value = "";
    age.value = "";
    course.value = "";
});
function updateTable(){
    regisss.textContent = "";
    students.forEach((student, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.course}</td>
        `;
        regisss.appendChild(row);
    });
}
function updateStats(){
    numOfStudents.textContent = students.length;
    const courses = [...new Set(students.map(s => s.course))];
    courseTaken.textContent = courses.join(", ");
    const average = students.reduce((sum, s) => sum + s.age, 0) / students.length;
    averageAge.textContent = average.toFixed(2);
}
