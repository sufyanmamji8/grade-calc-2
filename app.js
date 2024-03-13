let totalMarks = +prompt("enter your total numbers in exam");
let obtMarks = +prompt("enter your obtained numbers in exam");

let percentage = (obtMarks * 100) / totalMarks;
let grade;


if (percentage >= 80) {
  grade = "your grade is A+";
}

else if (percentage >= 70) {
  grade = "your grade is A";
}

else if (percentage >= 60) {
  grade = "your grade is B";
}

else if (percentage >= 50) {
  grade = "your grade is C";
}

else{
    grade= "you are fail"
}

document.querySelector("#result").innerHTML = "percentage= "+ percentage.toFixed(2) + "%<br>" + grade;






