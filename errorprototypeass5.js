
class person
{
    constructor(name="om",age=21)
    {
        this.name=name;
        this.age=age;

    }
    getDetailes()
    {
        console.log("name:",this.name,"age:",this.age);
    }
}
let obj=new person("prastik",20);
obj.getDetailes();

// this is defualt
let obj2=new person();
obj2.getDetailes();