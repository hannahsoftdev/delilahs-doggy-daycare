/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var selectedDays = []; 
var dailyRate = 35;

var totalCostElement = document.getElementById('totalCost');
var dayButtons = document.querySelectorAll('.day-button');
var clearButton = document.getElementById('clear-button');
var halfDayButton = document.getElementById('half-day');
var fullDayButton = document.getElementById('full-day');

var halfDayRate = 20;
var fullDayRate = 35;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function toggleDay(dayButton) {
    var day = dayButton.dataset.day; 

    if (dayButton.classList.contains('clicked')) {
        dayButton.classList.remove('clicked');
        selectedDays = selectedDays.filter(function(selectedDay) {
            return selectedDay !== day;
        }); 
    } else {
        dayButton.classList.add('clicked');
        selectedDays.push(day); 
    }

    updateTotalCost(); 
}

dayButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        toggleDay(button);
    });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearSelections() {
    dayButtons.forEach(function(button) {
        button.classList.remove('clicked'); 
    });
    selectedDays = []; 
    updateTotalCost(); 
}

clearButton.addEventListener('click', clearSelections);

/********* change rate *********/

function changeRate(rate, selectedButton, unselectedButton) {
    dailyRate = rate;
    selectedButton.classList.add('clicked'); 
    unselectedButton.classList.remove('clicked');
    updateTotalCost(); 
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

halfDayButton.addEventListener('click', function() {
    changeRate(halfDayRate, halfDayButton, fullDayButton);
});

fullDayButton.addEventListener('click', function() {
    changeRate(fullDayRate, fullDayButton, halfDayButton);
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function updateTotalCost() {
    var totalCost = selectedDays.length * dailyRate; 
    totalCostElement.innerHTML = '$' + totalCost; 
}
