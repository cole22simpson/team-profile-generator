const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('UC Berkeley');

    expect(intern.school).toEqual(expect.any(String));
});

test("gets the intern's school", () => {
    const intern = new Intern('UC Berkeley');

    expect(intern.getGitHub).toBe(intern.github);
});

test("changes the role to intern", () => {
    const intern = new Intern('UC Berkeley');

    expect(intern.getRole()).toEqual('Intern');
});