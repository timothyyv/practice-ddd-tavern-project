import chai from "chai";
import newCustomer from "../src/aggregates/Customer";

const {expect} = chai;

describe('Customer Factory Test', () => {
    it('should return a new customer', () => {
        const customer = newCustomer("James")
        expect(customer.person.name).to.equal("James");
    })
})