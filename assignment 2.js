const body = document.querySelector("body");

function handleWindowResize() {
  const windowWidth = window.innerWidth; //윈도우 창의 너비 불러오기
  if (windowWidth < 500) {
    document.body.style.backgroundColor = "cornflowerblue"; //기준을 설정된게 없으니 일단 500으로 잡았다.
  } else if (windowWidth >= 500 && windowWidth < 1000) {
    document.body.style.backgroundColor = "purple";
  } else {
    document.body.style.backgroundColor = "yellow";
  }
}

window.addEventListener("resize", handleWindowResize);
