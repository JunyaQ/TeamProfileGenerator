const Engineer = require('../lib/Engineer');


test ("check the Engineerjs elements: ",()=>{
 //name, id , email, github
    const engineer = new Employee("EngineerName",12345,"Engineername@123.com","EngineerGithub");
   expect(engineer.name).toEqual(expect.any(String));// test engineer name
   expect(engineer.id).toEqual(expect.any(Number));//test engineer id;
   expect(engineer.email).toContain("@");//test if it's an email address
   expect(engineer.email).toEqual(expect.any(String));//test email
   expect(engineer.github).toEqual(expect.any(String));//test engineer github
   expect(engineer.getRole()).toMatch("Engineer");// test role if is engineer

})