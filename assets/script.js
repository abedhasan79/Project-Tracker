
setInterval(function(){
    $('.currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
},1000);

//date picker
$(".datePicker").datepicker({ minDate: -20, maxDate: "+1M +10D" });