class car
{
    constructor(company,year ,model)
    {
        this.company=company;
        this.year=year;
        this.model=model;
    }
    getDescription()
    {
    console.log("this is a" ,this.company,this.year,this.model);
    }
}
let obj=new car("tata",2023,"harrier");
obj.getDescription();