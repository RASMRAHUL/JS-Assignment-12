const employees = {
  id: [67, 48, 29],
  name: ["Hitanshu", "Ninad", "Amandeep"],
  salary: [75000, 82000, 98000],
};

// Print an array of all employee ids
console.log(employees.id);

// Print count of employees
console.log(employees.id.length);

// Print the name of the employee according to their id { key: value }
const idToName = {};
for (let i = 0; i < employees.id.length; i++) {
  idToName[employees.id[i]] = employees.name[i];
}
console.log(idToName);

// Store the salaries of all employees in an array
const salaries = employees.salary;
console.log(salaries);

// Calculate the average salary the company is paying to its employees
const totalSalary = salaries.reduce((acc, curr) => acc + curr, 0);
const averageSalary = totalSalary / salaries.length;
console.log(averageSalary);
