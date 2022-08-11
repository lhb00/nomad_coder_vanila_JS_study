const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];
  const body = document.querySelector("body");
  const button = document.querySelector("button");
  function backgroundColorHandler() {
    const color1 = Math.floor(Math.random() * colors.length); //random 함수를 이용하여 색상 2개를 정의.
    const color2 = Math.floor(Math.random() * colors.length);
  
    if (color1 !== color2) {
      document.body.style.background = `linear-gradient(${colors[color1]}, ${colors[color2]})`; // 같은 숫자가 뽑혔을 때는 의미가 없으므로 다른 숫자일때만 적용되도록 한다.
    }
  }
  
  button.addEventListener("click", backgroundColorHandler);
  