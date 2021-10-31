class Intern extends Employee(){
constructor(role,school){
    "Intern" = role;
    this.school = school;
}    
getSchool(){
    return this.school;
}
getRole(){
    return this.role;
}
}