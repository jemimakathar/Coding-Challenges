
const Input=require('prompt-sync')();
const age=Input("Enter age ");
const Age=Number(age);
const sex=Input("Enter the Sex ");
const materialStatus=Input("Enter the MaterialStatus ");


function employeeDetails(Age:number,sex:string,materialStatus:string):string
{
    if(sex=="F")
    {
        return "She will work only in urban areas";
    }
    else if(sex=="M") 
    {
        if(Age>=20 && Age<=40)
        {
            return "he may work in anywhere";
        }
        else if(Age>=40 && Age<=60)
        {
            return "he will work in urban areas only";
        }  
    }
        return "ERROR";
}
console.log(employeeDetails(Age,sex,materialStatus));
