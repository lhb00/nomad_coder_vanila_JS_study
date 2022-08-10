const clockTitle = document.querySelector(".js-clock");
const date = new Date();
const christmas = new Date(`December 25, ${date.getFullYear()} 00:00:00`);
//date.getFullYear로 연도가 바뀌어도 자동 갱신되게 만들기
function diffDay() {
  const difference = christmas - date; //밀리세컨드 값이 나온다.
  const days = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
    2,
    "0"
  );
  const hours = String(Math.floor(difference / (1000 * 60 * 60)) % 24).padStart(
    2,
    "0"
  );
  const minutes = String(Math.floor(difference / (1000 * 60)) % 60).padStart(
    2,
    "0"
  );
  const seconds = String(Math.floor(difference / 1000) % 60).padStart(2, "0");
  //날짜, 시간, 분, 초에 맞게 계산을 때려준다.
  clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`; //출력.
}
diffDay(); //바로 실행되도록 추가.
setInterval(diffDay, 1000); //역시 밀리세컨드 기준이니 1000으로