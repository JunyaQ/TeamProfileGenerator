const Manager = require('../lib/Manager');


test ("check the Managerjs elements: ",()=>{
    // name, id, email, office,role
    const manager = new Manager("ManagerName",12345,"Managername@123.com",321);
   expect(manager.name).toEqual(expect.any(String));// test manager name
   expect(manager.id).toEqual(expect.any(Number));//test manager id;
   expect(manager.email).toContain("@");//test if it's an email address
   expect(manager.email).toEqual(expect.any(String));//test email
   expect(manager.officeNumber).toEqual(expect.any(Number));
   expect(manager.getRole()).toMatch("Manager");// test role if is manager
})