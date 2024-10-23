var Input = require('prompt-sync')();
var age = Input("Enter age ");
var Age = Number(age);
var sex = Input("Enter the Sex ");
var materialStatus = Input("Enter the MaterialStatus ");
function employeeDetails(Age, sex, materialStatus) {
    if (sex == "F") {
        return "She will work only in urban areas";
    }
    else if (sex == "M") {
        if (Age >= 20 && Age <= 40) {
            return "he may work in anywhere";
        }
        else if (Age >= 40 && Age <= 60) {
            return "he will work in urban areas only";
        }
    }
    return "ERROR";
}
console.log(employeeDetails(Age, sex, materialStatus));
