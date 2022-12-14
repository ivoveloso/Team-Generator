const Employee = require('../lib/Employee');

describe('Employee class', () => {
  it("should create an object with name, ID and email", () => {
    const employee = new Employee("Sarah", 3, 'sarah@email.com');

    // Verify that the new object has the correct properties
    expect(employee.name).toEqual("Sarah");
    expect(employee.id).toEqual(3);
    expect(employee.email).toEqual('sarah@email.com');
})

  it('should return functions as per their correct use', () => {
    const employee = new Employee("Sarah", 3, 'sarah@email.com');

    //Verify correct operation of functions
    expect(employee.getEmail()).toEqual('sarah@email.com');
    expect(employee.getName()).toEqual('Sarah');
    expect(employee.getId()).toEqual(3);
  })
});
