const API_URL =  "https://restcountries.com/v3.1/all" ;
function reqListener() {
    const countriesData = JSON.parse(this.responseText);
    console.log(countriesData);
    for (let ind = 0; ind < countriesData.length; ind ++){
        console.log(countriesData[ind].name.common, countriesData[ind].region, countriesData[ind].subregion, countriesData[ind].population);
  }
}
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", API_URL );
  req.send();