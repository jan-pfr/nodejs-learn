let id = 'bathroom';
fetch('http://localhost:3000/gettemperature/'+ id)
    .then(response => response.json())
    .then(data => console.log(data));

let degrees = 30;
fetch('http://localhost:3000/settemperature/'+ id +'/'+ degrees)
    .then(response => response.json())
    .then(data => console.log(data));

