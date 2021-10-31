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
function addmanager(arr){
    console.log("ADD MANAGER IS WRITING");
    //document.getElementById

}
function addengineer(arr){
    console.log("ADD ENGINEER IS WRITING");

}
function addintern(arr){
    console.log("ADD INTERN IS WRITING");
}



module.exports.fetcharray = fetcharray;
module.exports.addmanager = addmanager;
module.exports.addengineer = addengineer;
module.exports.addintern = addintern;