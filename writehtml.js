//const adddata = require('./adddata');

function writehtmlfile(teamdata) {
    console.log("writting!");
    console.log("teamdata: "+teamdata[0]);
  //  adddata.fetcharray(teamdata);
  /**based on the array, first element in each array showing their position based on index.js, so will categorize each based on that */
  for(var i=0; i<teamdata.length;i++){
    if(teamdata[i][0]=="1manager"){
        // will save the return from each method as an variable, and can be added to the html output
       var addm= addmanager(teamdata[i]);
    }
    else if(teamdata[i][0]=="2engineer"){
       var adde= addengineer(teamdata[i]);
    }
    else if(teamdata[i][0]=="3intern"){
      var addi=  addintern(teamdata[i]);
    }
}
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css">
        <title>TEST DOCUMENT</title>
        <h1> My Team </h1>
        <br/>
        <!--the manager section-->
        <div id="manager" class="individual">
        ${addm}
    
        </div>

        <!--the engineer section-->
        <div id="engineer" class="individual">
        ${adde}
        </div>

        <!--the intern section-->
        <div id="intern" class="individual">
        ${addi}
        </div>


    </head>
    <body>
    <script src="./adddata.js"></script>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    </body>

    <footer>
        <section class="footer-section">
            <p>
                &copy; Junya Q &#10084
            </p>
        </section>
        </footer>
    </html>
    
    
    `
    
;}

/*
function fetcharray(teamdata){
    for(var i=0; i<teamdata.length;i++){
        if(teamdata[i][0]=="1manager"){
            addmanager(teamdata[i]);
        }
        else if(teamdata[i][0]=="2engineer"){
            addengineer(teamdata[i]);
        }
        else if(teamdata[i][0]=="3intern"){
            addintern(teamdata[i]);
        }

    }

}
*/
function addmanager(arr){
    console.log("ADD MANAGER IS WRITING");
    
return`
<div class="one">
<h2 class = position>${arr[1]} <br/>
    Manager</h2>
<p class="id">ID: ${arr[2]}</p>
<p class="email">Email: ${arr[3]}</p>
<p class="office">Office number: ${arr[4]}</p>
</div>

`
}
function addengineer(arr){
    console.log("ADD ENGINEER IS WRITING");
    return`
    <div class="one">
<h2 class = position>${arr[1]} <br/>
    Engineer</h2>
<p class="id">ID: ${arr[2]}</p>
<p class="email">Email: ${arr[3]}</p>
<p class="github">GitHub: ${arr[4]}</p>
</div>

    
    `

}
function addintern(arr){
    console.log("ADD INTERN IS WRITING");
    return`
    <div class="one">
<h2 class = position>${arr[1]} <br/>
    Intern</h2>
<p class="id">ID: ${arr[2]}</p>
<p class="email">Email: ${arr[3]}</p>
<p class="school">School: ${arr[4]}</p>
</div>

    `
}


   //${adddata.addmanager()}
    module.exports  = writehtmlfile;
    