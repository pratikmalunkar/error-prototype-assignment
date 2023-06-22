//type conversion


function ConvertToNum(string)
{
    try {
   if(isNaN(string))
   {
    throw new err;
   }
 let int=Number(string);

    
return int;
    }
    catch(err)
    {
   console.log("not a number",err);
    }
}
let result=ConvertToNum("125");
console.log(result);