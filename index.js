const inquirer = require("inquirer");
const ind = require("./individual");
const fs = require("fs");
const writehtml = require('./writehtml');
const Choice = require("inquirer/lib/objects/choice");
var teamdata = [];

//questions for the manager 
function managerquestions() {
    // name, id, email, office
    return inquirer.prompt([
    {
        type:"input",
        name:"mname",
        message:"please enter the team manager name: ",


    },
    {
        type:"input",
        name:"mid",
        message:"Please enter the team manager id: ",

    },
    {
        type:"input",
        name:"memail",
        message:"Please enter your email: ",


    },
    {
        type:"input",
        name:"mofficenum",
        message:"please enter your office number: ",

    }])
    .then (manageranswers => {
        var manager = [];
        // name, id, email, office
        //push 5 data into manager item
        manager.push("manager");
        manager.push(manageranswers.mname);
        manager.push(manageranswers.mid);
        manager.push(manageranswers.memail);
        manager.push(manageranswers.mofficenum);

        teamdata.push(manager); 
        console.log("test: "+manager); 
       console.log(manageranswers);     
    })
     
    }



    //questions for the engineer
    function engineerquestions(){
        return inquirer.prompt([
           //name, id , email, github
           {
               type:"input",
               name:"ename",
               message:"Please enter the engineer name: "
           },
           {
              type:"input",
              name:"eid",
              message:"Please enter the engineer id: " 
           },
           {
               type:"input",
               name:"eemail",
               message:"Please enter the engineer email: "
           },
           {
               type:"input",
               name:"egithub",
               message:"Please enter the engineer github name: "
           }])
            .then(engineeranswers => {
                //name, id , email, github
                //5 data in engineer item
                var engineer = [];
                engineer.push("engineer");
                engineer.push(engineeranswers.ename);
                engineer.push(engineeranswers.eid);
                engineer.push(engineeranswers.eemail);
                engineer.push(engineeranswers.egithub);

                teamdata.push(engineer);       
            })
            }


            //questions for the interns 
   function internquestions(){
        return inquirer.prompt([
            //name, id, email, school
           {
               type:"input",
               name:"iname",
               message:"Please enter the Intern name: ",
           },
           {
               type:"input",
               name:"iid",
               message:"Please enter the Intern id: ",
           },
           {
               type: "input",
               name:"iemail",
               message:"Please enter the Intern email: ",
           },
           {
               type:"input",
               name:"ischool",
               message:"Please enter the Intern shcool: ",
           }])
             .then(internanswers => {
                 //name, id, email, school
                 // 5 data into intern item
                 var intern = [];
                 intern.push("intern");
                 intern.push(internanswers.iname);
                 intern.push(internanswers.iid);
                 intern.push(internanswers.iemail);
                 intern.push(internanswers.ischool);

                teamdata.push(intern);   
             })
             }


  function options(){
      // start to ask with the manager first and then the option of choose from the engineer and intern
      return inquirer.prompt([
          {
              type:"list",
              name:"position",
              message:"Please choose between the following option, exit option when finish the team editing",
              choices:['Engineer','Intern','exit'],
          }
      ])
  }
  // write files after question done
  async function writefile(){
    // wait till all question finish to generate
    const manageranswers = await managerquestions();

    console.log('Write file success');
    }


    function init() {
        try {
            writefile();
        }   catch(err) {
            console.log(err);
        }
      }
      
      // Function call to initialize app
      init();

