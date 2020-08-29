/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

const getData = async () => {

const res = await fetch('all');

try {
  const all = await response.json();
  console.log(all);
  return all;
}

catch(error) {
  console.log("error", error)
}

}

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
  const newData = await response.json();
  console.log(data);
  return data;
} catch (error) {
  console.log("error", error)
}

};
