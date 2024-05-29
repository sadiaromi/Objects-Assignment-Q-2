//............................ STEP# 1 ........................
type Employee={
    name: string,
    dept: string,
    role: string,
 
//.......................... STEP# 2 ......................... 

contact:{
        phone: number,
        email: string,
    };
//......................... STEP# 3 ............................

    employ: "Intern"| "Manager"| "Engineer";
    skills: string,
};
const employee : Employee = {
    name: "sadia",
    dept: "giaic",
    role: "student",
    contact:{
       phone: 2135367745,
        email: "romii112@gmail.com",
},
employ:"Intern",
skills: "Developer",
}

//.......................... STEP# 4 .............................

console.log(employee.contact , "call the property of object");

console.log(employee, "calling the whole object");
