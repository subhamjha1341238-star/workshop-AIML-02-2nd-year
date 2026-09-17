class Student {
    static totalStudents = 0;

    constructor(rollNo, name, marks) {
        this.rollNo = rollNo;
        this.name = name;
        this.marks = marks;

        Student.totalStudents++;
    }
    displayResult() {

        if (this.marks >= 40) {
            console.log(
                "Roll No:", this.rollNo,
                "Name:", this.name,
                "Marks:", this.marks,
                "Status: Passed"
            );
        } else {
            console.log(
                "Roll No:", this.rollNo,
                "Name:", this.name,
                "Marks:", this.marks,
                "Status: Failed"
            );
        }
    }
    static displayTotalStudents() {
        console.log("Total Students:", Student.totalStudents);
    }
}

let student1 = new Student(101, "shubham", 85);
let student2 = new Student(102, "shiwang", 38);
let student3 = new Student(103, "Rohit", 72);

student1.displayResult();
student2.displayResult();
student3.displayResult();
Student.displayTotalStudents();
