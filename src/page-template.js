function generateManager(teamMembers) {
    console.log("PLACEHOLDER");
    
    console.log(teamMembers);

    return `
    <div class="col-3 content-container">
        <div class="card" style="width: 18rem;">
            <div class="card-header-style card-header">
                <h3 class="card-title">
                    ${teamMembers.name}
                </h3>
                <h5 class="card-text">
                    <i class="fa-solid fa-mug-hot"></i> Manager
                </h5>
            </div>
            <div class="ul-container">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        ID: ${teamMembers.id}
                    </li>
                    <li class="list-group-item">
                        Email: ${teamMembers.email}
                    </li>
                    <li class="list-group-item">
                        Office Number: ${teamMembers.officeNumber}
                    </li>
                </ul>
            </div>
        </div>
    </div>
    `;
}

function generateIntern(intern) {

    return `
    <div class="col-3 content-container">
        <div class="card" style="width: 18rem;">
            <div class="card-header-style card-header">
                <h3 class="card-title">
                    ${intern.name}
                </h3>
                <h5 class="card-text">
                <i class="fa-solid fa-user-graduate"></i> Intern
                </h5>
            </div>
            <div class="ul-container">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        ID: ${intern.id}
                    </li>
                    <li class="list-group-item">
                        Email: ${intern.email}
                    </li>
                    <li class="list-group-item">
                        School: ${intern.school}
                    </li>
                </ul>
            </div>
        </div>
    </div>
    `;
}

function generateEngineer(engineer) {

    return `
    <div class="col-3 content-container">
        <div class="card" style="width: 18rem;">
            <div class="card-header-style card-header">
                <h3 class="card-title">
                    ${engineer.name}
                </h3>
                <h5 class="card-text">
                <i class="fa-solid fa-glasses"></i> Engineer
                </h5>
            </div>
            <div class="ul-container">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        ID: ${engineer.id}
                    </li>
                    <li class="list-group-item">
                        Email: ${engineer.email}
                    </li>
                    <li class="list-group-item">
                        Github: ${engineer.github}
                    </li>
                </ul>
            </div>
        </div>
    </div>
    `;
}

function generateHTML(teamMembers) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="../src/style.css">
        <title>Team Profile Generator</title>
    </head>

    <header>
        <h1>
            My Team
        </h1>
    </header>

    <body>
        <div class="container">
            <div class="row justify-content-center">
                ${generateManager(teamMembers)}
                ${generateIntern(teamMembers)}
                ${generateEngineer(teamMembers)}
            </div>
        </div>
            
        <script src="https://kit.fontawesome.com/115c070486.js" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
};

module.exports = generateHTML;