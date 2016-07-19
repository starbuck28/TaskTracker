//Array of prepopulated tasks
var data = [
	{"name": "Test Task #1", "date": "12/01/2012", "assigned": "John Doe" },
	{"name": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe" },
	{"name": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe" },
	{"name": "Test Task #4", "date": "12/04/2012", "assigned": "John Doe" },
	{"name": "Test Task #5", "date": "12/05/2012", "assigned": "John Doe" },
	{"name": "Test Task #6", "date": "12/06/2012", "assigned": "John Doe" },
	{"name": "Test Task #7", "date": "12/07/2012", "assigned": "John Doe" }
];


//Function to change background of task if even number
function selectBackground() {
  $('.tsk-lst li:nth-child(even)').addClass('gray');
}

//Loop through task array and generate HTML list
for (var i = 0; i < data.length; i++) {
  var html = '';
  var dataName = data[i].name;
  var dataDate = data[i].date;
  var dataAssigned = data[i].assigned;
  
  html += '<li class="tsk-container clearfix"><p class="tsk-name clearfix"><strong>';
  html += dataName;
  html += '</strong></p><p class="tsk-date clearfix">';
  html += dataDate;
  html += '</p><p class="tsk-person"><strong>';
  html += dataAssigned;
  html += '</strong></p></li>';
  $(".tsk-lst").append(html); 
}

//When submit button is clicked
$("button").click(function() {
  //Assign input values to variables
  var taskVal = $("#task").val();
  var dateVal = $("#date").val();
  var assignedVal = $("#assigned").val();
  //Generate task list item html
  var createHTML = "";
  createHTML +='<li class="tsk-container clearfix"><p class="tsk-name clearfix"><strong>';
  createHTML += taskVal;
  createHTML += '</strong></p><p class="tsk-date clearfix">';
  createHTML += dateVal;
  createHTML += '</p><p class="tsk-person"><strong>';
  createHTML += assignedVal;
  createHTML += '</strong></p></li>';
  //Append html to existing tasks list
  $(".tsk-lst").append(createHTML); 
  //Change background of task item if even
  selectBackground();
});

//Change background of even-numbered task items
selectBackground();