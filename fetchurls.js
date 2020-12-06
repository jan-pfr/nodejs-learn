fetch('http://localhost:3000/gettemperature/office').then(function (response){
    console.log(response.json());
});