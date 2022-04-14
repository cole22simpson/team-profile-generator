const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('cole22simpson');

    expect(engineer.github).toEqual(expect.any(String));
});

test('gets github username', () => {
    const engineer = new Engineer('cole22simpson');

    expect(engineer.getGitHub()).toBe(engineer.github);
});

test('changes role to engineer', () => {
    const engineer = new Engineer('cole22simpson');

    expect(engineer.getRole()).toEqual('Engineer');
});