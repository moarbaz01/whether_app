const input = document.querySelector('#input-bar') ;
const btn = document.querySelector('#btn')

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
const apiKey = '43f151bd89bbb4641704d14bcbe00033' ;


async function getApi(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`) ;
    const jsonData = await response.json() ;
    console.log(jsonData);


    document.querySelector('#city').innerHTML = jsonData.name ;
    document.querySelector('#wind-speed-span').innerHTML = jsonData.wind.speed + 'km/h' ;
    document.querySelector('#humidity-span').innerHTML = jsonData.main.humidity + '%' ;
    document.querySelector('#temp').innerHTML = Math.round(jsonData.main.temp) + '°C' ;

    if(jsonData.weather[0].main == 'Clear'){
        document.getElementById('whether-icon').src = './images/clear.png'  
    }
    else if(jsonData.weather[0].main == 'Rain'){
        document.getElementById('whether-icon').src = './images/rain.png'  
    }
    else if(jsonData.weather[0].main == 'Clouds'){
        document.getElementById('whether-icon').src = './images/clouds.png'  
    }
    else if(jsonData.weather[0].main == 'Drizzle'){
        document.getElementById('whether-icon').src = './images/drizzle.png'  
    }
    else if(jsonData.weather[0].main == 'Mist'){
        document.getElementById('whether-icon').src = './images/drizzle.png'  
    }


    document.querySelector('.whether-info').classList.remove('displayNone')
    document.querySelector('.col-container').classList.remove('displayNone')



    
}
