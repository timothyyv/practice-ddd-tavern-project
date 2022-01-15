
import { error } from "winston";
import Item from "../entities/Item";
import Person from "../entities/Person";
import Transaction from "../value-objects/Transaction";

/** Customer aggregate, which is an object identified by the person id 
 * A customer is a person
 * can hold many products 
 * can perform transcations
*/
interface Customer {
    person: Person,
    products: Item[],
    transactions: Transaction[]
}

//set a simple factory method to add a new customer
const newCustomer = (name: string) => {
    if(name === '') {
        throw new Error("Please provide a name!");
    }

    //Create a new person
    const person: Person = {
        name: name,
        id: "89202",
        age: "26"
    }

    const customer: Customer = {
        person: person,
        products: [],
        transactions: []
    }
    return customer;
}

export default newCustomer;
