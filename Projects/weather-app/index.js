const weather = document.querySelector('.weather1');
const weatherLocation = document.querySelector('.weather2 p');
const weatherDate = document.querySelector('.weather2 span');
const weatherIcon = document.querySelector('.weather3 p img');
const conditionText = document.querySelector('.weather3 span');
const searchInput = document.querySelector('.searchField');
const form = document.querySelector('form');

let targetCity = 'delhi';

const fetchData = async (targetCity) => {
    const apiData = await fetch(`https://api.weatherapi.com/v1/current.json?key=38dd7740f4b2477f94e50720233103&q=${targetCity}`);
    const res = await apiData.json();
    const {current: {temp_c, last_updated, condition: {text, icon}}, location: {name, localtime}} = res;
    updateDom(temp_c, name, last_updated, icon, text, localtime)
}

function updateDom (temp, city, localtime, icon, text) {
    weather.innerText = temp;
    weatherLocation.innerText = city;
    weatherIcon.src=icon;
    conditionText.innerText = text;

    const exactTime = localtime.split(" ")[1];
    const exactDate = localtime.split(" ")[0];
    const exactDay = new Date(exactDate).getDay();
    weatherDate.innerText = `${exactTime} - ${getDayFullName(exactDay)} ${exactDate}`;

    function getDayFullName(num) {
        switch(num) {
            case 0:
                return "Sunday";
            case 1:
                return "Monday";
            case 2:
                return "Tuesday";
            case 3:
                return "Wednesday";
            case 4:
                return "Thursday";
            case 5:
                return "Friday";
            case 6:
                return "Saturday";
            default:
                return "Don't know"
            break;
            
        }
    }   
}

fetchData(targetCity);

const searchFunc = (e) => {
    e.preventDefault();
    targetCity = searchInput.value; 
    fetchData(targetCity);
}

form.addEventListener('submit', searchFunc);



