module.exports = async function fetchDataFromJSONFile() {
    //Hämta data från JSON-fil
    let repsonse = await fetch("./data.json");
    let data = await repsonse.json();

    //Konvertera JSON data till JS objekt
    let myObj = JSON.parse(data);

    //Skriv ut data i konsol
    console.log(myObj);
};