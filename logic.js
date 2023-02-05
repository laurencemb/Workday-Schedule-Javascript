/* link html to javascript */
const submitBtnEl = $('.submitBtn');
const task1El = document.querySelector('#task1')
const form = document.querySelector('.form')

/* container to hold the time */
const timeBlockContainer = $('#timeBlockContainer');

const timeNow = moment().hour();



/* Set time at the top */

var currentDate = $('#currentDay');

function displayTime(){
    var currentMoment = moment().format('ddd DD MMM YY [at] hh:mm:ss a');
    currentDate.text(currentMoment);
}

/* run display time every second */
setInterval(displayTime, 1000)

/* for loop running through saved notes for each index in the local storage */
for(var i = 9; i<=17; i++){
    var savedNote = localStorage.getItem(`${i}am`);

    if(savedNote){
        $(`#task${i-8}`).val(savedNote)
    }
}

/* saving info to local storage - grabbing id of tr element
saving them to the local storage and element id and the note */

function saveToLocal (){
    var elementId = $(this).parent().parent().attr('id')
    var note = $(`#task${elementId-8}`).val()
    localStorage.setItem(`${elementId}am`, note)
}

/* function for each submit button saves to local */
submitBtnEl.each(function(){
    $(this).on('click',saveToLocal)
    
})

/* set the colours for past present and future
by leaving remove class empty ensure there is no class  */
function showHours (){
$('.timeSlot').each(function() {
    const hourBlock = parseInt($(this).attr('id'));

    if (hourBlock < timeNow){
        $(this).removeClass();
        $(this).addClass('past');
    } else if (hourBlock === timeNow) {
        $(this).removeClass(); 
        $(this).addClass('present');
    } else {
        $(this).removeClass();
        $(this).addClass('future');
    }
});
}
showHours();


/* =================================================
old working below
==================================================== */








/* Run time/Day function */




/* 9am slot */



/* function saveInput(event){
   
    localStorage.setItem('9:00am', task1.value),
    localStorage.setItem('10:00am', task2.value)
    localStorage.setItem('11:00am', task3.value)
    localStorage.setItem('12:00pm', task4.value)
    localStorage.setItem('1:00pm', task5.value)
    localStorage.setItem('2:00pm', task6.value)
    localStorage.setItem('3:00pm', task7.value)
    localStorage.setItem('4:00pm', task8.value)
    localStorage.setItem('5:00pm', task9.value)
    

}; */



/* let eventTextDefault = localStorage.getItem('.hourInd.innerText')
    if (eventTextDefault=== null){
        document.getElementById('task1').setAttribute("value", "")
    }

    else {let taskHour = $(this).parent().attr('id');
    let eventText = $(this).siblings('.taskInput').val();
} */
  /*   else { document.getElementById('task1').setAttribute("value", localStorage.getItem('9:00am')) }
 */ 

/*    $('.submitBtn').on('click', saveInput) */   
    



