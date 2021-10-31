const manager = new Manager("ManagerName",12345,"ManagerName@123.com",321);
const engineer = new Engineer("EngineerName",23456,"EngineerName@234.com","EngineerNameGithub");
const enginner2 = new Engineer("EngineerName2",234567,"EngineerName2@234.com","EngineerNameGithub2");
const intern = new Intern("InternName",34567,"InternName@345.com","some university");
//npm run test to run the test
function Manager(mname, mid, memail, moffice){
    this.mname = mname;
    this.mid = mid;
    this.memail = memail;
    this.moffice = moffice;

}
test ("check the manager section: ",()=>{
     // name, id, email, office
    expect(manager.mname).toEqual(expect.any(String));// test manager name;
    expect(manager.mid).toEqual(expect.any(Number));//test manager id;
    expect(manager.memail).toContain("@");//test if it's an email address
    expect(manager.moffice).toEqual(expect.any(Number));// test if the office is an number

})
function Engineer(ename,eid, eemail, egithub){
    this.ename = ename;
    this.eid = eid;
    this.eemail = eemail;
    this.egithub = egithub;

}
test("check the engineer section: ",()=>{
    //name, id , email, github
    expect(engineer.ename).toEqual(expect.any(String));// test engineer name
    expect(engineer.eid).toEqual(expect.any(Number));//test engineer id
    expect(engineer.eemail).toContain("@");// to test if it's an email address
    expect(engineer.egithub).toEqual(expect.any(String));
    
})
function Intern(iname, iid, iemail,ischool){
    this.iname = iname;
    this.iid = iid;
    this.iemail = iemail;
    this.ischool = ischool;

}
test("check the intern section: ",()=>{
    //name, id, email, school
    expect(intern.iname).toEqual(expect.any(String));//test intern name
    expect(intern.iid).toEqual(expect.any(Number));// test intern id
    expect(intern.iemail).toContain("@");// test if it's email
    expect(intern.ischool).toEqual(expect.any(String))// test school name
})

test("make sure people are different for each position: ",()=>{
    expect(manager.mname == engineer.ename == intern.iname).toBeFalsy();// manager, engineer and intern not same person
    expect(manager.mid == engineer.eid == intern.iid).toBeFalsy();// manager, enginner and intern not the same id
    expect(manager.memail == engineer.eemail == intern.iemail).toBeFalsy()// manager, engineer and intern nmot have the same email
    
})