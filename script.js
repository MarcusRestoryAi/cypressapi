async function fetchDataFromSource(source) {
    //Hämta data från JSON-fil
    let repsonse = await fetch(source);
    let data = await repsonse.json();
/*
    console.log(data);

    //Konvertera JSON data till JS objekt
    let myObj = JSON.parse(data);
*/
    //Skriv ut data i konsol
    console.log(data);

    return data;
};

//Den anonyma funktionen måste vara Async för att invänta svar från annan async metod
document.getElementById("btnFetchJsonFile").addEventListener("click", async () => {
    let data = await fetchDataFromSource("./data.json");

    document.getElementById("output").innerText = data.firstName;
    document.getElementById("status").innerText = "success";
})

document.getElementById("btnFetchISSData").addEventListener("click", async () => {
    let data = await fetchDataFromSource("https://api.wheretheiss.at/v1/satellites/25544");

    let output = "";

    for (x in data) {
        // x = attributnamn
        // data[x] = attributvärde

        output += `${x}: ${data[x]}\n`;
    }

    document.getElementById("output").innerText = output;
    document.getElementById("status").innerText = "success";
})