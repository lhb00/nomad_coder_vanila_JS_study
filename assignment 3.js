const casinoInput1 = document.querySelector("#casinonum1"); // 1번 input 가져오기
const casinoInput2 = document.querySelector("#casinonum2"); // 2번 input 가져오기
const casinoButton = document.querySelector("#casino-form button"); //버튼 가져오기
const casinoResult1 = document.querySelector("#result1"); // 1번 줄 출력을 위해 가져오기
const casinoResult2 = document.querySelector("#result2"); // 2번 줄 출력을 위해 가져오기
function casinoGame(event) {
  // 함수 생성
  const num1 = casinoInput1.value; //값 가져오기
  const num2 = casinoInput2.value; //마찬가지
  const num3 = Math.floor(Math.random() * num1); //random 함수 이용하여 랜덤한 값 가져오기
  event.preventDefault(); //새로고침 방지
  casinoResult1.innerText = `You chose : ${num2}, the machine chose: ${num3}\n`; //첫번째 줄 문장 추가
  casinoResult1.classList.remove("hidden"); //계속 숨겨진 상태면 안되니 추가
  if (num2 >= num3) {
    //if 조건으로 두번째 줄 문장 분류
    casinoResult2.innerText = "You win!";
  } else {
    casinoResult2.innerText = "You lose!";
  }
  casinoResult2.classList.remove("hidden"); //마찬가지
}
casinoButton.addEventListener("click", casinoGame); //eventListener 추가
