const API_KEY = "32853ac2f3a8742f7f7898756f163f9a";
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    //받아온 각각의 위도, 경도, API 키를 한꺼번에 입력해줘야 url이 작동함.
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child"); // html에서 생성해둔 span을 불러오기
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name; 
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`; // 날씨와 온도를 같이 불러오기
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.") // 위치를 못찾을 시
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); //이 함수는 설명대로만 하면 된다. 마우스 커서를 올리면 설명 나옴.