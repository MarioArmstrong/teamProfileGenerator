// const Engineer = require('../lib/engineer');
// const Employee = require('../lib/employee');
// const Intern = require('../lib/intern');
// const Manager = require('../lib/manager');

function createHTML(team) {
  const html = [];

  // console.log('createHtml',team);

  for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() === "manager") {
      html.push(generateManager(team[i]));
      // console.log(html);
    } else if (team[i].getRole() === "engineer") {
      html.push(generateEngineer(team[i]));
      // console.log(html);
    } else {
      html.push(generateIntern(team[i]));
      // console.log(html);
    }
  }

  function generateEngineer(engineer) {
    return `
    <section class="card col-sm">
      <div class="card-body">
          <h4 class="card-title">${engineer.getName()}</h4>
          <h5 class="card-subtitle">${engineer.getRole()}</h5>
            <div class="border">
              <p class="card-text">ID: ${engineer.getId()}</p>
              <p class="card-text">Email: ${engineer.getEmail()}</p>
              <p class="card-text">Github: ${engineer.getGithub()}</p>
            </div>
      <div>
    </section>
    `;
  }

  function generateIntern(intern) {
    return `
    <section class="card col-sm">
      <div class="card-body">
          <h4 class="card-title">${intern.getName()}</h4>
          <h5 class="card-subtitle">${intern.getRole()}</h5>
            <div class="border">
                <p class="card-text">ID: ${intern.getId()}</p>
                <p class="card-text">Email: ${intern.getEmail()}</p>
                <p class="card-text">School: ${intern.getSchool()}</p>
            </div>
      <div>
    </section>
    `;
  }

  function generateManager(manager) {
    return `
    <section class="card col-sm">
      <div class="card-body">
          <h4 class="card-title">${manager.getName()}</h4>
          <h5 class="card-subtitle">${manager.getRole()}</h5>
              <div class="border">
                <p class="card-text">ID: ${manager.getId()}</p>
                <p class="card-text">Email: ${manager.getEmail()}</p>
                <p class="card-text">Office Nummber: ${manager.officeNumber}</p>
              </div>
      <div>
    </section>
    `;
  }
  return html.join("");
}

function generateTemplateHTML(storedMembers) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Bootstrap CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
        <link rel="stylesheet" href="./css/style.css"> <!--link to my stylesheet-->
        <title>Template HTML</title>
    </head>
    <body>
        <header class="bg-danger text-center pt-4 pb-4">
            <h1 class="text-white">My Team</h1>
        </header>
        <section id="cardsSection" class="d-flex justify-content-center pt-5">
          <div class="row">
            ${createHTML(storedMembers)}
          </div>
        </section>
    </body>
    </html>
    `;
}

module.exports = generateTemplateHTML;
