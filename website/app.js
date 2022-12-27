/* Global Variables */

// Create a new date instance dynamically with JS

const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip='
const apiKey = '&APPID=85c0955723ea8d8ca16a480fd439457a&units=imperial'

generateButton = document.getElementById('generate');

generateButton.addEventListener('click', action);

generateButton.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    validate(e);
  }
});

function validate(e) {
  const text = e.target.value;
}


/*** function action ***/

//set default value of zipcode
document.getElementById('zip').value = 94102;


function action() {

  const userResponse = document.getElementById('feelings').value;
  const zip = document.getElementById('zip').value;

  getData(baseURL+zip+apiKey)
  .then(function (data) {
    console.log(data);
    console.log("success");

    // CHANGE UI

    let d = new Date(data.dt * 1000);
    let newDate = 'Month: '+ (d.getMonth()+1)+' Day: '+ d.getDate()+' Year: '+ d.getFullYear();
    let city = data.name;

    document.getElementById('date').innerHTML = newDate;
    document.getElementById('temp').innerHTML = Math.round((5/9)*(data.main.temp-32)) + "˚C / " + Math.round(data.main.temp) + "˚F";
    document.getElementById('city').innerHTML = city;
    document.getElementById('content').innerHTML = userResponse;


    sendData('/add', {temperature: data.main.temp, date:data.dt, userResponse:userResponse});
  })

  .then (setTimeout(changeUI, 4000))
}


/**** getData ****/
const getData = async (url='') => {

const res = await fetch(url);

try {
  const data = await res.json();
  console.log(data);
  return data;
}

catch(error) {
  console.log("error", error)
}

}

/**** sendData ****/
const sendData = async (url='', data={}) => {
console.log(data);
const res = await fetch(url, {
  method: 'POST',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
});

try {
  const returnedData = await res.json();
  console.log(returnedData);
  return returnedData;
} catch (error) {
  console.log("error", error)
}

};

/**** changeUI ****/
const changeUI = async () => {
  const req = await fetch ('/add');
  try {
    const all = await req.json();
    console.log(all);

    let d = new Date(all.date * 1000);
    let newDate = (d.getMonth()+1)+'.'+ d.getDate()+'.'+ d.getFullYear();

    document.getElementById('date').innerHTML = newDate;
    document.getElementById('temp').innerHTML = all.temperature;
    document.getElementById('content').innerHTML = all.userResponse;
    return all;
  } catch(error) {
    console.log("error", error);
  }
}
