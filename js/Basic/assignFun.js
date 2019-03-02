var totalMarks = 100;
var currentMarks = 69;

var calculateGrade = function (cMarks, tMarks) {
  let percentage = (cMarks/tMarks)*100;
  let MyGrade = ''
  if (percentage >= 90) {
    MyGrade='A';
  } else if (percentage >= 70 && percentage <= 90) {
    MyGrade ='B';
  } else if (percentage >= 50 && percentage <= 70) {
    MyGrade = 'C';
  } else {
    MyGrade = 'F';
  }
  return `Your grade is '${MyGrade}' and marks is ${currentMarks} from totalMarks ${totalMarks}`
}
var result = calculateGrade(currentMarks,totalMarks);
console.log(result);
