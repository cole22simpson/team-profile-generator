function generateManager(teamMembers) {
    
    const [name, id, email, officeNumber] = teamMembers.Manager;
    
    return `
    <div class="col-3 content-container">
        <div class="card" style="width: 18rem;">
            <div class="card-header-style card-header">
                <h3 class="card-title">
                    ${name}
                </h3>
                <h5 class="card-text">
                    <i class="fa-solid fa-mug-hot"></i> Manager
                </h5>
            </div>
            <div class="ul-container">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        ID: ${id}
                    </li>
                    <li class="list-group-item">
                        Email: ${email}
                    </li>
                    <li class="list-group-item">
                        Office Number: ${officeNumber}
                    </li>
                </ul>
            </div>
        </div>
    </div>
    `;
}

function generateHTML(teamMembers) {
    console.log("PLACEHOLDER")
    console.log(teamMembers);
    return `
        ${generateManager()}
    `;
};

module.exports = generateHTML;