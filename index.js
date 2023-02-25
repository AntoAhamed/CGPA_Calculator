var numberOfCourses = document.getElementById("courses");
var primarySubmition = document.getElementById("submit1");
var credit = document.getElementById("credit");
var gradePoint = document.getElementById("gradePoint");
var secondarySubmition = document.getElementById("submit2");
var cgpa = document.getElementById("result");
var reset = document.getElementById("submit3");

var i = 0, count = 0, up, down, r;

var creditArray = new Array();
var gradePointArray = new Array();

primarySubmition.addEventListener('click', () => {
    let tmp = Number(numberOfCourses.value);
    if (tmp != 0) {
        i = tmp;
    }
});

secondarySubmition.addEventListener('click', () => {
    if (count < i) {
        let tmpC = Number(credit.value);
        let tmpGP = Number(gradePoint.value);
        creditArray.push(tmpC);
        gradePointArray.push(tmpGP);
        credit.value = '';
        gradePoint.value = '';
        count++;
    }
    if (count == i - 1) {
        secondarySubmition.value = "Calculate";
    }
    if (count == i) {
        result();
    }
});

function result() {
    up = 0;
    down = 0;
    for (let x = 0; x < i; x++) {
        up += creditArray[x] * gradePointArray[x];
        down += creditArray[x];
    }
    r = up / down;
    cgpa.value = r.toString();
    reset.style = "display:inline";
}

reset.addEventListener('click', () => {
    numberOfCourses.value = '';
    credit.value = '';
    gradePoint.value = '';
    cgpa.value = '';
    count = 0;
    for (let x = 0; x < i; x++) {
        creditArray.shift();
        gradePointArray.shift();
    }
    secondarySubmition.value = "Add";
    reset.style = "display:none";
});