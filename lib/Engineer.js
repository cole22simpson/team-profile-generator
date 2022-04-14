const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(github) {
        super(github);

        this.github = github;
    }

    getGitHub() {
        return `${this.github}`;
    }

    getRole() {
        return `Engineer`;
    }
}

module.exports = Engineer;