const inquirer = require("inquirer");
const fs = require("fs");
const generate = require('./src/writehtml');
var teamdata = [];

//questions for the manager 
const managerquestions=()=> {
// name, id, email, office
return inquirer.prompt([
{
    type:"input",
    name:"mname",
    message:"please enter the team manager name: ",
    validate: mname => {
        if (mname) {
            return true;
        } else {
            console.log('please enter the team manager name:');
            return false;
        }
        }


},
{
    type:"input",
    name:"mid",
    message:"Please enter the team manager id: ",
    validate: mid =>{
        if(isNaN(mid)==false){
            return true;

        }
        else{
            console.log("Please enter a valid team manager id: ");
        }
    }

},
{
    type:"input",
    name:"memail",
    message:"Please enter your email: ",
    validate:memail =>{
        if(memail.includes("@")==true){
            return true;
            
        }
        else{
            console.log("Please enter a valid email address: ");
        }
    }


},
{
    type:"input",
    name:"mofficenum",
    message:"please enter your office number: ",
    validate: mofficenum =>{
        if(isNaN(mofficenum)==false){
            return true;
        }
        else{
            console.log("Please check the office number again");
        }
    }

}])

.then (manageranswers => {
    var manager = [];
    // name, id, email, office
    //push 5 data into manager item
    //console.log(Number(manageranswers.mid));
    manager.push("1manager");
    manager.push(manageranswers.mname);
    manager.push(manageranswers.mid);
    manager.push(manageranswers.memail);
    manager.push(manageranswers.mofficenum);

    teamdata.push(manager); 
    // console.log("test: "+manager); 
    //console.log(manageranswers);   
    return manageranswers;  
})
    
}

//questions for the engineer
const engineerquestions=()=>{
    return inquirer.prompt([
        //name, id , email, github
        {
            type:"input",
            name:"ename",
            message:"Please enter the engineer name: ",
            validate:(ename)=>{
                if(ename){
                    return true;
                }
                else{
                    console.log("Please enter the engineer name: ");
                }
            }
            
        },
        {
            type:"input",
            name:"eid",
            message:"Please enter the engineer id: " ,
            validate:(eid)=>{
                if(isNaN(eid)==false){
                    return true;
                }
                else{
                    console.log("please enter a valid engineer id: ");
                }
            }
        },
        {
            type:"input",
            name:"eemail",
            message:"Please enter the engineer email: ",
            validate:(eemail)=>{
                if(eemail.includes("@")){
                    return true;
                }
                else{
                    console.log("Please enter a valid engineer email: ")
                }
            }
        },
        {
            type:"input",
            name:"egithub",
            message:"Please enter the engineer github name: ",
            validate:(egithub)=>{
                if(egithub){
                    return true;
                }
                else{
                    console.log("Please enter engineer github namne: ")
                }
            }
            
        }])
        
        .then(engineeranswers => {
            //name, id , email, github
            //5 data in engineer item
            var engineer = [];
            engineer.push("2engineer");
            engineer.push(engineeranswers.ename);
            engineer.push(engineeranswers.eid);
            engineer.push(engineeranswers.eemail);
            engineer.push(engineeranswers.egithub);

            teamdata.push(engineer);  
            return engineeranswers;     
        })
        }


        //questions for the interns 
const internquestions=()=>{
    return inquirer.prompt([
        //name, id, email, school
        {
            type:"input",
            name:"iname",
            message:"Please enter the Intern name: ",
            validate:(iname)=>{
                if(iname){
                    return true;
                }
                else{
                    console.log("Please enter the Intern name: ")
                }    
            }
            
        },
        {
            type:"input",
            name:"iid",
            message:"Please enter the Intern id: ",
            validate:(iid)=>{
                if(isNaN(iid)==false){
                    return true;
                }
                else{
                    console.log("Please enter a valid Intern id: ");
                }
            }
        },
        {
            type: "input",
            name:"iemail",
            message:"Please enter the Intern email: ",
            validate:(iemail)=>{
                if(iemail.includes("@")){
                    return true;
                }
                else{
                    console.log("Please enter a valid email address: ");
                }
            }
        },
        {
            type:"input",
            name:"ischool",
            message:"Please enter the Intern shcool: ",
            validate:(ischool)=>{
                if(ischool){
                    return true;
                }
                else{
                    console.log("Please enter the school name: ")
                }
            }
        }])
        
            .then(internanswers => {
                //name, id, email, school
                // 5 data into intern item
                var intern = [];
                intern.push("3intern");
                intern.push(internanswers.iname);
                intern.push(internanswers.iid);
                intern.push(internanswers.iemail);
                intern.push(internanswers.ischool);

            teamdata.push(intern);  
            return internanswers;
            })

            }


var options=[{
    // start to ask with the manager first and then the option of choose from the engineer and intern
            type:"list",
            name:"position",
            message:"Please choose between the following option, exit option when finish the team editing",
            choices:['Engineer','Intern','exit'],
        }
    ]
    const startquestions=()=>{
    inquirer.prompt(options).then(optionanswers=>{
        console.log("test: "+optionanswers.position);

    // console.log("options: "+optionanswers.position);
    if(optionanswers.position == "Engineer"){
        console.log("engineer");
        engineerquestions()
        .then(startquestions)
        // var engineeranswers = await engineerquestions();
        // generatefile()
        
    
    }
    else if(optionanswers.position == "Intern"){
        console.log("intern");
        internquestions()
        .then(startquestions)
        //var internanswers = await internquestions();
        //generatefile();

    }
    else{
        
    const writehtml = generate(teamdata);
    fs.writeFile('./dist/test_index.html', writehtml,err=>{
        if(err){
            console.log("write file error");
        }
    });
    //console.log("teamdata: "+teamdata);
    //xconsole.log('Write file success');
    }
    })

    }
    

managerquestions()
    .then(options)
    .then(manageranswers=>{
        startquestions()
    // optionanswers =  options();
    
})



