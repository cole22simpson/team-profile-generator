const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager(101);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('changes role to manager', () => {
    const manager = new Manager(101);

    expect(manager.getRole()).toEqual('Manager')
});