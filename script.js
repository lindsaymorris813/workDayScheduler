var hour9Block = $("#9am-block");
var hour10Block = $("#10am-block");
var hour11Block = $("#11am-block");
var hour12Block = $("#12pm-block");
var hour1Block = $("#1pm-block");
var hour2Block = $("#2pm-block");
var hour3Block = $("#3pm-block");
var hour4Block = $("#4pm-block");
var hour5Block = $("#5pm-block");
var hour9Save = $("#9am-save");
var hour10Save = $("#10am-save");
var hour11Save = $("#11am-save");
var hour12Save = $("#12pm-save");
var hour1Save = $("#1pm-save");
var hour2Save = $("#2pm-save");
var hour3Save = $("#3pm-save");
var hour4Save = $("#4pm-save");
var hour5Save = $("#5pm-save");
//adding current day for jumbotron
var date = $("#currentDay");
date.html(moment().format('dddd, LL'));
var taskObj = [];
var newTask = {};

//saving hour blocks to array to run for loop
var hoursArray = [hour9Block, hour10Block, hour11Block, hour12Block, hour1Block, hour2Block, hour3Block, hour4Block, hour5Block];
var currentTimeOfDay = (moment().format('HH'));

//function to color code hours based on past, present, and future
for (var i = 0; i < 9; i++) {
    if (parseInt(currentTimeOfDay) > parseInt(hoursArray[i].attr("data-hour"))) {
        hoursArray[i].attr("class", "col-md-10 form-control past");
    } else if (parseInt(currentTimeOfDay) === parseInt(hoursArray[i].attr("data-hour"))) {
        hoursArray[i].attr("class", "col-md-10 form-control present");
    } else {
        hoursArray[i].attr("class", "col-md-10 form-control future");
    }
};
//Click save button, saves task to task obj
$(".saveBtn9").on("click", function () {
    var task = $("#9am-block").val();
    localStorage.setItem("9am-block", JSON.stringify(newTask));
});
$(".saveBtn10").on("click", function () {
    var task = $("#10am-block").val();
    localStorage.setItem("10am-block", JSON.stringify(newTask));
});
$(".saveBtn11").on("click", function () {
    var task = $("#11am-block").val();
    localStorage.setItem("11am-block", JSON.stringify(newTask));
});
$(".saveBtn12").on("click", function () {
    var task = $("#12pm-block").val();
    localStorage.setItem("12pm-block", JSON.stringify(newTask));
});
$(".saveBtn1").on("click", function () {
    var task = $("#1pm-block").val();
    localStorage.setItem("1pm-block", JSON.stringify(newTask));
});
$(".saveBtn2").on("click", function () {
    var task = $("#2pm-block").val();
    localStorage.setItem("2pm-block", JSON.stringify(newTask));
});
$(".saveBtn3").on("click", function () {
    var task = $("#3pm-block").val();
    newTask = {"3pm-block": task}
    console.log(newTask)
    localStorage.setItem("3pm-block", JSON.stringify(newTask));
});
$(".saveBtn4").on("click", function () {
    var task = $("#4pm-block").val();
    newTask = {"4pm-block": task}
    localStorage.setItem("4pm-block", JSON.stringify(newTask));
});
$(".saveBtn5").on("click", function () {
    var newT= $("#5pm-block").val();
    localStorage.setItem("5pm-block", JSON.stringify(newTask));
});

// function renderSchedule() {
//     taskObj = JSON.parse(localStorage.getItem("9am-block"));
//     if (taskObj === null) {
//         return;
//     } else {
//         $("9am-block").val()=task
// }

// renderSchedule();