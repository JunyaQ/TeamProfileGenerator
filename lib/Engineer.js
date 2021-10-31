class Engineer extends Employee(){
    constructor(role,github){
        "Engineer" = role;
        this.github = github;
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return this.role;
    }
    
}