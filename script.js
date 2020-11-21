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
    newTask = { "nineAM": task }
    localStorage.setItem("nineAM", JSON.stringify(newTask));
});
$(".saveBtn10").on("click", function () {
    var task = $("#10am-block").val();
    newTask = { "tenAM": task }
    localStorage.setItem("tenAM", JSON.stringify(newTask));
});
$(".saveBtn11").on("click", function () {
    var task = $("#11am-block").val();
    newTask = { "elevenAM": task }
    localStorage.setItem("elevenAM", JSON.stringify(newTask));
});
$(".saveBtn12").on("click", function () {
    var task = $("#12pm-block").val();
    newTask = { "twelvePM": task }
    localStorage.setItem("twelvePM", JSON.stringify(newTask));
});
$(".saveBtn1").on("click", function () {
    var task = $("#1pm-block").val();
    newTask = { "onePM": task }
    localStorage.setItem("onePM", JSON.stringify(newTask));
});
$(".saveBtn2").on("click", function () {
    var task = $("#2pm-block").val();
    newTask = { "twoPM": task }
    localStorage.setItem("twoPM", JSON.stringify(newTask));
});
$(".saveBtn3").on("click", function () {
    var task = $("#3pm-block").val();
    newTask = { "threePM": task }
    localStorage.setItem("threePM", JSON.stringify(newTask));
});
$(".saveBtn4").on("click", function () {
    var task = $("#4pm-block").val();
    newTask = { "fourPM": task }
    localStorage.setItem("fourPM", JSON.stringify(newTask));
});
$(".saveBtn5").on("click", function () {
    var task = $("#5pm-block").val();
    newTask = { "fivePM": task }
    localStorage.setItem("fivePM", JSON.stringify(newTask));
});

function renderSchedule() {
    var render9am = JSON.parse(localStorage.getItem("nineAM"));
    if (render9am === null) {
        return;
    } else {
        console.log(render9am)
        $("#9am-block").val(render9am.nineAM);
    }
    var render10am = JSON.parse(localStorage.getItem("tenAM"));
    if (render10am === null) {
        return;
    } else {
        console.log(render10am)
        $("#10am-block").val(render10am.tenAM);
    }

    var render11am = JSON.parse(localStorage.getItem("elevenAM"));
    if (render11am === null) {
        return;
    } else {
        console.log(render11am)
        $("#11am-block").val(render11am.elevenAM);
    }

    var render12pm = JSON.parse(localStorage.getItem("twelvePM"));
    if (render12pm === null) {
        return;
    } else {
        console.log(render12pm)
        $("#12pm-block").val(render12pm.twelvePM);
    }

    var render1pm = JSON.parse(localStorage.getItem("onePM"));
    if (render1pm === null) {
        return;
    } else {
        console.log(render1pm)
        $("#1pm-block").val(render1pm.onePM);
    }

    var render2pm = JSON.parse(localStorage.getItem("twoPM"));
    if (render2pm === null) {
        return;
    } else {
        console.log(render2pm)
        $("#2pm-block").val(render2pm.twoPM);
    }

    var render3pm = JSON.parse(localStorage.getItem("threePM"));
    if (render3pm === null) {
        return;
    } else {
        console.log(render3pm)
        $("#3pm-block").val(render3pm.threePM);
    }

    var render4pm = JSON.parse(localStorage.getItem("fourPM"));
    if (render4pm === null) {
        return;
    } else {
        console.log(render1pm)
        $("#4pm-block").val(render4pm.fourPM);
    }
    var render5pm = JSON.parse(localStorage.getItem("fivePM"));
    if (render5pm === null) {
        return;
    } else {
        console.log(render5pm)
        $("#5pm-block").val(render5pm.fivePM);
    }
}

    renderSchedule();