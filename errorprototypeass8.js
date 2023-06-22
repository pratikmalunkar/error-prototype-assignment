function student(name)
{
    this.name=name;
}
student.prototype.printdetails=function()
{
    console.log("hello, my name is  "+this.name);
};
 var obj= new student("mithun");
 obj.printdetails();