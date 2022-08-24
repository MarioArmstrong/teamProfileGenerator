const Engineer = require("../lib/engineer");

function createHTML(team) {

function generateTemplateHTML(answers) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
    `;
}

function generateEngineer(foo) {
    return `
    
    <div>
        <p>${foo.getName()}</p>
        <p>${foo.getId()}</p>
        <p>${foo.getEmail()}</p>
        <p>${foo.getGithub()}</p>
        <p>${foo.getRole()}</p>
    <div>
    `;
}
function generateIntern(foo) {
    return `
    
    <div>
    <p>${foo.getName()}</p>
    <p>${foo.getId()}</p>
    <p>${foo.getEmail()}</p>
    <p>${foo.getSchool()}</p>
    <p>${foo.getRole()}</p>
    <div>
    `;
}
function generateManager(foo) {
    return `
    
    <div>
    <p>${foo.getName()}</p>
    <p>${foo.getId()}</p>
    <p>${foo.getEmail()}</p>
    <p>${foo.officeNumber}</p>
    <p>${foo.getRole()}</p>
    <div>
    `;
}
}
foo.filer()