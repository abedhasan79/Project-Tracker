
let projectDisplay = $('.project-display');
let projectModel = $('.projectModel');
let projectForm = $('.project-form');
let projectNameInput = $('.project-name-input');
let projectTypeInput = $('.project-type-input');
let projectHourlyRateInput = $('.project-hourly-rate-input');
let projectDueDate = $('.datePicker');

setInterval(function(){
    $('.currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
},1000);

//date picker
projectDueDate.datepicker({ minDate:1});

function createProjectInfo(name, type, hourlyRate, dueDate){
    let projectRow = $('<tr>');

    let projectNameInput = $('<td>').addClass('p-2').text(name);
    let projectTypeInput =$('<td>').addClass('p-2').text(type);
    let projectHourlyRateInput = $('<td>').addClass('p-2').text(hourlyRate);
    let projectDueDate = $('<td>').addClass("p-2").text(dueDate);

    let timeLeftToDueDate = moment(dueDate, 'MM/DD/YYYY').diff(moment(),'days');
    let daysTillDueDate = $('<td>').addClass('p-2').text(timeLeftToDueDate);

    let calculateEarningTillDueDate = calculatePotentialEarning(hourlyRate, timeLeftToDueDate);
    let totalPotentialEarning = $('<td>').addClass('p-2').text(calculateEarningTillDueDate);

    let btnToDeleteProject = $('<td>').addClass('p-2 text-center delete-project-btn').text('Remove');

    projectRow.append(projectNameInput, projectTypeInput, projectHourlyRateInput,
        projectDueDate, daysTillDueDate, totalPotentialEarning, btnToDeleteProject);
    
    projectDisplay.append(projectRow);

    projectModel.modal('hide');
}

function calculatePotentialEarning(rate, days){
    let earningPerDay = rate * 8;
    let totalInDays = earningPerDay * days;
    return totalInDays;

}


projectDisplay.on('click', '.delete-project-btn', function(e){
    let btnClicked = $(e.target);
    btnClicked.parent('tr').remove();
});
 
projectForm.on('submit', function(e){
    e.preventDefault();
    let name = projectNameInput.val().trim();
    let type = projectTypeInput.val().trim();
    let hourlyRate = projectHourlyRateInput.val().trim();
    let dueDate = projectDueDate.val().trim();
    createProjectInfo(name, type, hourlyRate, dueDate);
    
    projectForm[0].reset();

});