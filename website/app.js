/* Global Variables */
const apiKey = 'c385c18d161b14df158500c5452637e5';
const countryCode = 'US';
let userZipCode;
let baseUrl = `http://api.openweathermap.org/data/2.5/weather?zip=${userZipCode},${countryCode}&appid=${apiKey}`;

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

//grabs generate button, when it's clicked run sendData function with relevant parameters for api call
document.getElementById('generate').addEventListener('click', function(){
    userZipCode = document.getElementById('zip').value;
    baseUrl = `http://api.openweathermap.org/data/2.5/weather?zip=${userZipCode},${countryCode}&appid=${apiKey}`
    getData(baseUrl)
    // .then(function(data){
    //     console.log(data);
    //     //add data to post request
    //     let userResponse = document.getElementById('feelings').value;
    //     postData('/addData', {temperature: data.main.temp, date: newDate, userResponse: userResponse})
    // })
});

//getData async function to make get request to OpenWeatherMap api (get the weather)
const getData = async(url) => {
    //await response of call to api for data
    const response = await fetch(url);
    //if fetch call successful, run try code
    try {
        //wait for data to be fetched and turned in json
        const data = await response.json();
        //see the json data in console
        console.log(data);
        return data;
    }
    //if fetch call unsuccessful, run catch code
    catch (error){
        console.log('Error!', error);
    }
}

//postData async function to store the weather data in the app 
const postData = async(path, dataObject) => {
    const response = await fetch(path, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataObject),
    });
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log('Error!', error);
    }
}
