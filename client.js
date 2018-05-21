console.log( 'js' );

$(document).ready( onReady );

function onReady(){
    console.log( 'jq' );
    $('#employeeButton').on( 'click', addEmployee );
}

let employeeArray = [];

class Employee{
    constructor( firstName, lastName, id, title, annualSalary ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.title = title;
        this.annualSalary = annualSalary;
    } // end constructor
} // end class Employee

function addEmployee(){
    console.log( 'in add employee' );
    //get user input
    //make a new employee from input
    let newEmployee = new Employee( $('#firstName').val(), $('#lastName').val(), $('#id').val(), $('#title').val(), $('#annualSalary').val() );
    //push newEmployee to employeeArray
    employeeArray.push( newEmployee );
    //update DOM
    displayEmployee();
    //clear input fields
    $('#firstName').val("");
    $('#lastName').val("");
    $('#id').val("");
    $('#title').val("");
    $('#annualSalary').val("");
    appendMonthly();
} //end addEmployee

function displayEmployee(){
    console.log( 'in displayEmployee' );
    //target output element
    let el = $( '.tableData');
    //empty the output element
    el.empty();
    //loop through array
    for( newEmployee of employeeArray ){
        let outputString = '<tr>';
            outputString += '<td>' + newEmployee.firstName + '</td>';
            outputString += '<td>' + newEmployee.lastName + '</td>';
            outputString += '<td>' + newEmployee.id + '</td>';
            outputString += '<td>' + newEmployee.title + '</td>';
            outputString += '<td>' + newEmployee.annualSalary + '</td>';
            outputString += '</tr>';
        el.append( outputString );
    } //end for of loop
} //end displayEmployee

let sum = 0;

function totalMonthly(){
    for( newEmployee of employeeArray){
        sum += (Math.floor(parseInt(newEmployee.annualSalary))) ;
        
    }
    sum=Math.floor(sum/12);
    return sum;
   //end math
} //end totalMonthly
//and ???

function appendMonthly(){
    totalMonthly();
    $('#totalMonthly').empty();
    if (sum <= 20000){
        $('#totalMonthly').append(`Total Monthly Expense: $${sum}`);
    } else {
        $('#totalMonthly').css('background-color', 'red');
        $('#totalMonthly').append(`Total Monthly Expense: $${sum}`);
    }
}
