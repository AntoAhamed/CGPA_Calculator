var numberOfCourses = document.getElementById("courses");
var primarySubmition = document.getElementById("submit1");
var credit = document.getElementById("credit");
var gradePoint = document.getElementById("gradePoint");
var secondarySubmition = document.getElementById("submit2");
var cgpa = document.getElementById("result");
var reset = document.getElementById("submit3");
var infoDiv = document.getElementById("showInfoDiv");
//var info = document.getElementById("showInfo");

var i = 0, count = 0, up, down, r;

var creditArray = new Array();
var gradePointArray = new Array();

primarySubmition.addEventListener('click', () => {
    let tmp = Number(numberOfCourses.value);
    if (tmp != 0) {
        i = tmp;
        if (i === 1) {
            secondarySubmition.value = "Calculate";
        }
        alert("Number of courses are submited");
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

    for (let j = 0; j < creditArray.length; j++) {
        const para = document.createElement("p");
        const node = document.createTextNode((j + 1) + " Credit " + creditArray[j] + " gradePoint " + gradePointArray[j]);
        para.appendChild(node);
        infoDiv.appendChild(para);
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
    cgpa.innerHTML = parseFloat(r).toFixed(2);
    reset.style = "display:inline";
    alert("Your cgpa is " + parseFloat(r).toFixed(2));
}

reset.addEventListener('click', () => {
    numberOfCourses.value = '';
    //info.innerHTML = "Here the given info will be shown";
    credit.value = '';
    gradePoint.value = '';
    cgpa.innerHTML = "CGPA";
    infoDiv.remove();
    count = 0;
    for (let x = 0; x < i; x++) {
        creditArray.shift();
        gradePointArray.shift();
    }
    secondarySubmition.value = "Add";
    reset.style = "display:none";
});