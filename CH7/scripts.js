// Exercise 1

// const answers = ['Yes', 'No', 'Maybe', 'Ask again later']

// const random_choice = Math.floor(Math.random() * answers.length)


// prompt('What\'s your question? ')
// alert(answers[random_choice])

// Exercise 2

/*

const employees = [
'John Smith',
'Jackie Jackson',
'Chris Jones',
'Amanda Cullen',
'Jeremy Goodwin'
]

// print the list of names when the program runs first time

function displayEmployees () {
console.log(`There are ${employees.length} employees:`)
for (let employee of employees) {
    console.log(employee)
}
}

displayEmployees()

// prompt user for employee name 
const employee = prompt('Enter an employee name to remove: ')


// remove that employee name from employees array
if (employees.includes(employee)) {
    let index = employees.indexOf(employee)
    employees.splice(index, 1)
}

else if (!(employees.includes(employee))) {
  alert("Name does not exist !");
}

displayEmployees()

*/

// Exercise 7


// place employee data into objects

const employees = [
    
{first_name: 'John', last_name: 'Johnson',
Position: 'Manager', Seperation_date :'2016-12-31'},

{first_name: 'Tou', last_name: 'Xiong',
Position: 'Software Engineer', Seperation_date :'2016-10-05'}, 

{first_name: 'Michaela', last_name: 'Michaelson',
Position: 'District Manager', Seperation_date :'2015-12-19'}, 

{first_name: 'Jake', last_name: 'Jacobson',
Position: 'Programmer'}, 

{first_name: 'Jacquelyn', last_name: 'Jackson',
Position: 'DBA'},

{first_name: 'Sally', last_name: 'Weber',
Position: 'Web Developer', Seperation_date :'2015-12-18'},  
 
]

employees.sort((a, b) => {
  let fa = a.last_name.toLowerCase(),
      fb = b.last_name.toLowerCase();

  if (fa < fb) {
      return -1;
  }
  if (fa > fb) {
      return 1;
  }
  return 0;
});

console.log(employees)




