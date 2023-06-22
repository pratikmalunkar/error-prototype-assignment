

function GetPerson(personinfo)
{
// this.name=personinfo.name;
// this.age=personinfo.age;
try{
if( personinfo===null||!('name' in personinfo)|| !('age' in personinfo))
{throw new Error('invalid');
}

return [personinfo.name,personinfo.age];
}
catch(err)
{
    console.log("invalid parameter or missing ");
}
}

let person={ name:"pratik", age:20 };
console.log(GetPerson(person));//run
let person2={ name:"pratik" }
console.log(GetPerson(person2));//show error