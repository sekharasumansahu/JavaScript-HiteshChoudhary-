let MySchedule = {
  day : 'Mon',
  meeting : 0,
  meetdone : 0,
}

let addMeet = function (schedule, meet) {
  schedule.meeting += meet;
}

let subMeet = function (schedule, meet) {
  schedule.meetdone += meet;
}

let summary = function (schedule) {
  return `Day ${schedule.day}, Total meet : ${schedule.meeting}, meetdone : ${schedule.meetdone}, Remaining : ${schedule.meeting - schedule.meetdone}`
}

let reset = function (schedule) {
  schedule.day = '';
  schedule.meeting = 0;
  schedule.meetdone = 0;
}

console.log(MySchedule);
addMeet(MySchedule, 5);
subMeet(MySchedule, 3);
console.log(MySchedule);
let summry = summary(MySchedule);
console.log(summry);
reset(MySchedule);
console.log(MySchedule);
