//console.log("boo");
//Create JSON for each employee with the following details 
//(first name, department, designation, salary, raise eligible)
const employeeInfo =
{
    "employees": 
    [
        {
        "Name": "Sam", "Department": "Tech", "Designation": "Manager", "Salary": "40000", "RaiseEligible": "true"
        },
        {
        "Name": "Mary", "Department": "Finance", "Designation": "Trainee", "Salary": "18500", "RaiseEligible": "true"
        },
        {
        "Name": "Bill", "Department": "HR", "Designation": "Executive", "Salary": "21200", "RaiseEligible": "false"
        },
        {
            "Name": "Anna", "Department": "Tech", "Designation": "Executive", "Salary": "25600", "RaiseEligible": "false"
            },
    ]
}
console.log(employeeInfo);

//Create JSON for the company with the following details 
//(companyName, website, employees)
const companyInfo = 
{
    /*"companies" :
    [
    {
        "companyName": "Tech Stars", "Website": "www.techstars.site", "Employees": employeeInfo
    }
    ]
    */
    "companyName": "Tech Stars", 
    "Website": "www.techstars.site", 
    "Employees": employeeInfo
}
console.log(companyInfo);