type Customer = {
    birthday: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id===0? null: { birthday: new Date()};

}

let Customer = getCustomer(1);
//if (Customer !== null && Customer !== undefined)
// Optional property access operator
console.log(Customer?.birthday.getFullYear());