class person
{
    constructor(name,position,salary)
    {
this.name=name;
this.position=position;
this.salary=salary;
    }
    getSalary()
    {
        return this.salary;
    }
        
    
}
let obj=new person("pratik","manager",20000);
console.log(obj.getSalary());