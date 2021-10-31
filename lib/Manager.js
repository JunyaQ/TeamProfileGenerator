class Manager extends Employee(){
constructor(role, officeNumber){
    "Manager" = role;
    this.officeNumber = officeNumber;

}
getOfficeNumber(){
    return this.officeNumber;
}
getRole(){
    return this.role;
}

}