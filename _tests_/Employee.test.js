const Employee = require('../lib/Employee');

test ("check the employeejs elements: ",()=>{
    // name, id, email,role
    const employee = new Employee("EmployeeName",12345,"Employeename@123.com");
   expect(employee.name).toEqual(expect.any(String));// test employee name
   expect(employee.id).toEqual(expect.any(Number));//test employee id;
   expect(employee.email).toContain("@");//test if it's an email address
   expect(employee.email).toEqual(expect.any(String));//test email
   expect(employee.getRole()).toMatch("Employee");// test role if is employee

})