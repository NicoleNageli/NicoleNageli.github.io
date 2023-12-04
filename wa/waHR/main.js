//console.log("boo");
//Create JSON for each employee with the following details 
//(first name, department, designation, salary, raise eligible)
//prob 1
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
       /* {
            "Name": "Anna", "Department": "Tech", "Designation": "Executive", "Salary": "25600", "RaiseEligible": "false"
            },
            */
    ]
}
console.log(employeeInfo);

//prob 2
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

//problem 3
//employeeInfo.employees.push({"Name": "Anna", "Department": "Tech", "Designation": "Executive", "Salary": "25600", "RaiseEligible": "false"});
employeeInfo.employees[3]={"Name": "Anna", "Department": "Tech", "Designation": "Executive", "Salary": "25600", "RaiseEligible": "false"}
console.log(employeeInfo);
//prob 4
//calculate the total salary for all company employees.
function calculateTotalSalary(employeeInfo) {
    let totalSalary = 0;

    for (const employee of employeeInfo.employees) {
        totalSalary += parseInt(employee.Salary, 10); //converts to integer
    }

    return totalSalary;
}
const totalSalary = calculateTotalSalary(employeeInfo);

console.log(totalSalary);

//prob 5
function applySalaryRaise(employeeInfo) {
    for (const employee of employeeInfo.employees) {
        if (employee.RaiseEligible === 'true') {
            const currentSalary = parseInt(employee.Salary, 10);
            const raiseAmount = 0.1 * currentSalary; //raise amount by
            const newSalary = currentSalary + raiseAmount;
            employee.Salary = newSalary.toString();
            employee.RaiseEligible = 'false';
        }
    }
}
applySalaryRaise(employeeInfo);
console.log(employeeInfo);

//prob 6
const employeewfh = ['Anna', 'Sam'];
function updateCompanyWFHStatus(companyInfo, wfhArray) {
    for (const employee of companyInfo.Employees.employees) {
        const isWFH = wfhArray.includes(employee.Name);
        employee.wfh = isWFH;
    }
}
updateCompanyWFHStatus(companyInfo, employeewfh);
console.log(companyInfo);