const apiKey='86e6a9ba1453d578880a347e4f150557';
const apiURL='https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");

async function checkWeather(city){
    const response = await fetch(apiURL+ city + `&appid=${apiKey}`);
    if (response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
        return;
    }
    var data= await response.json();
    
    
 
    document.querySelector(".city").innerHTML=data.name;

    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)  +'°C';
    document.querySelector(".humidity").innerHTML=data.main.humidity;
    document.querySelector(".wind").innerHTML=data.wind.speed+ 'km/h';

    let weatherDesc=data.weather[0].description;
    weatherDesc=weatherDesc[0].toUpperCase() + weatherDesc.slice(1)
    document.querySelector(".weather-description").innerHTML=weatherDesc;
    const weatherIcon = document.querySelector('.weather-icon');
    const imgToApply=data.weather[0].main;


    switch (imgToApply) {
        case 'Clouds':
            weatherIcon.setAttribute("src","./Images/clouds.png");
            break;
        case 'Rain':
            weatherIcon.setAttribute("src","./Images/rain.png");
            break;
        case 'Snow':
            weatherIcon.setAttribute("src","./Images/snow.png");
            break;
        case 'Drizzle':
             weatherIcon.setAttribute("src","./Images/drizzle.png");
            break;           
         case 'Clear':
             weatherIcon.setAttribute("src","./Images/clear.png");
            break;
            case 'Mist':
                weatherIcon.setAttribute("src","./Images/mist.png");
               break;
        default:
            break;

         
    }
    document.querySelector(".weather").style.display="block"
    document.querySelector(".error").style.display="none"
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
document.addEventListener("keydown",(event)=>{
    if(event.key==='Enter')
         checkWeather(searchBox.value);
})