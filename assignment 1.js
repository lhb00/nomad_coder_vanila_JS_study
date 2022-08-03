import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const title = document.querySelector("body");
const superEventHandler = {
  handleMouseEnter: function () {
    title.innerText = "The mouse is here!";
    title.style.color = colors[0];
  }, //마우스가 올라갔을 때의 함수 선언

  handleMouseLeave: function () {
    title.innerText = "The mouse is gone!";
    title.style.color = colors[1];
  }, //마우스가 내려갔을 때의 함수 선언

  handleRightClick: function () {
    title.innerHTML = "That was a right click!";
    title.style.color = colors[3];
  }, // 우클릭 시의 함수 선언

  handleWindowResize: function () {
    title.innerText = "You just resized!";
    title.style.color = colors[2];
  } // 크기 조정 시의 함수 선언
};
title.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("contextmenu", superEventHandler.handleRightClick); //텍스트 뿐만 아니라 다른 곳에서도 작동하려면 window.으로 해주어야함.
window.addEventListener("resize", superEventHandler.handleWindowResize);