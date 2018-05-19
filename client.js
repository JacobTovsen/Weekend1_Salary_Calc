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
} //end addEmployee

function displayEmployee(){
    console.log( 'in displayEmployee' );
}

