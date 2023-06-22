
let arr=[1,2,3,6];



function numcheck(arr)
{ var flag;
     function presentornot(num)
    {
       for(let i=0;i<=arr.length;i++)
       {
        if(arr[i]==num)
        {
         flag=1;
         break;
        }
      
       }
       if(flag==1){
        console.log("true");
    }
    else{
        console.log("false");
    }
    }
    return presentornot;
    
   
   
} 

let result=numcheck(arr);
result(8);