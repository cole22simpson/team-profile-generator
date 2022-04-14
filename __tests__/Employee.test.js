const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Cole', 1, 'cole22simpson@gmail.com');

    expect(employee.name).toEqual(expect.any(String));

    expect(employee.id).toEqual(expect.any(Number));

    expect(employee.email).toEqual(expect.any(String));
});

test("gets employee's name", () => {
    const employee = new Employee('Cole', 1, 'cole22simpson@gmail.com');

    expect(employee.getName()).toBe(employee.name);
});

test("gets employee's id", () => {
    const employee = new Employee('Cole', 1, 'cole22simpson@gmail.com');

    expect(employee.getId()).toBe(employee.id);
});

test("gets employee's email", () => {
    const employee = new Employee('Cole', 1, 'cole22simpson@gmail.com');

    expect(employee.getEmail()).toBe(employee.email);
});

test("gets employee's role", () => {
    const employee = new Employee('Cole', 1, 'cole22simpson@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
});