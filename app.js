window.addEventListener('load', ()=> {
    let locationTimezone = document.querySelector(".location-timezone");
    let weatherIcon = document.querySelector(".icon");
    let tempDesc = document.querySelector(".temp-description");
    let tempDeg = document.querySelector(".temp-degree");
    let humidPercent = document.querySelector(".humidity-percentage");
    let cloud = document.querySelector(".cloudiness");
    let wind = document.querySelector(".windiness");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
            let api_key = 'add_api_key_from_openweathermap_api_login';
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${api_key}`;
            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const {temp, humidity} = data.main;
                    const {main, icon} = data.weather[0];
                    const {country} = data.sys;
                    const {speed} = data.wind;
                    locationTimezone.textContent = data.name + ", " + country;
                    tempDeg.textContent = temp;
                    humidPercent.textContent = humidity;
                    tempDesc.textContent = main;
                    cloud.textContent = data.clouds.all;
                    wind.textContent =speed;
                    var iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
                    document.getElementById("icon").src = iconurl;
                })
        });

    }
});
