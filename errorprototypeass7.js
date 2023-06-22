class User{
    constructor(Username,password)
    {
        this.name=Username;
        this.password=password;
    }
    get password()
    {

        return this._pswd;
    }
set password(password)
{ 
   if(password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)){
    console.log(this.name);

    console.log("your password:",password.replace(/./g,'*'));


   }
   else{
    console.log(" length must be above 7 contain at least one uppercase and lower case char");
   }
}


}
let obj=new User("pratik","123aA456ad");
