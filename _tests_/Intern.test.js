const Intern = require('../lib/Intern');
test ("check the Internjs elements: ",()=>{
     //name, id, email, school
    const intern = new Intern("InternName",12345,"Internname@123.com","Bootcamp");
   expect(intern.name).toEqual(expect.any(String));// test intern name
   expect(intern.id).toEqual(expect.any(Number));//test intern id;
   expect(intern.email).toContain("@");//test if it's an email address
   expect(intern.email).toEqual(expect.any(String));//test email
   expect(intern.school).toEqual(expect.any(String));//test intern school
   expect(intern.getRole()).toMatch("Intern");// test role if is intern
})