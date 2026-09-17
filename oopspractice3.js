class Employee {
  constructor(employeeId, employeeName, employeeSalary) {
    this.employeeId = employeeId;
    this.employeeName = employeeName;
    this.employeeSalary = employeeSalary;
  }

  // Fixed typo: calculateSalary instead of calclateSalary
  // Return the value so callers can use it directly
  calculateSalary() {
    return this.employeeSalary;
  }
}

class Manager extends Employee {
  constructor(id, name, salary, incentive) {
    super(id, name, salary);
    this.incentive = incentive;
  }

  // Uses this.employeeSalary instead of this.basicSalary
  calculateSalary() {
    return this.employeeSalary + this.incentive;
  }
}

let emp1 = new Employee(101, "shubham", 50000);
console.log("Employee Salary:", emp1.calculateSalary());

let emp2 = new Manager(102, "shiwang", 60000, 10000);
console.log("Manager Salary:", emp2.calculateSalary());