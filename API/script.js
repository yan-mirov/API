const form = document.querySelector(".form");
const city = document.querySelector(".city");
const wrapper = document.querySelector(".swiper-wrapper");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const apiKey = '5ff1f0c896f1bab0c8e77edb081f9c86';
    const result = document.querySelector("#answer");

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city.value}&appid=${apiKey}&units=metric&lang=ru`, {mode: "cors"})
        .then(answer => answer.json())
        .then((answer) => {
            let date = new Date();
            let today = date.toISOString().slice(0,10);
            let todayWeather = answer.list.filter(day => day.dt_txt.includes(today));

            console.log(todayWeather);
            wrapper.innerHTML="";

            // Очищаем слайды
            wrapper.innerHTML = "";

            todayWeather.forEach(temp => {
                const card = document.createElement("div");
                card.classList.add("swiper-slide");
                card.innerHTML = `
                <div class="weather-card">
            <h4 class="location">${answer.city.country}</h4>

            <h3 class="location">
              <img class="loc" src="images/icons8-place-marker-50 (1).png" alt="">
              ${answer.city.name}
            </h3>
            <img class="weather-img" src="https://openweathermap.org/img/wn/${temp.weather[0].icon}.png">
            <h1 class="unit">
              ${temp.main.temp}°C
            </h1>
            <span class="time">${String(temp.dt_txt).slice(11,)}</span>
            <span class="date">${String(temp.dt_txt).slice(0,10)}</span>
          </div>

                `;
                wrapper.append(card);
            });

            // Обновляем Swiper после добавления новых слайдов
            swiper.update();
        })
        .catch(err => {
            result.textContent = "Ошибка! Проверь название города.";
            console.error(err);
        });
});



const weather = document.querySelector("#weather");
weather.addEventListener("submit",(e)=>{
    e.preventDefault()
    
    result.innerHTML = answer.main.temp
});

































































































