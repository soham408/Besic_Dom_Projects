const randomColor = function () {
    let hex = '0123456789ABCDEF';
    color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let intervalID;
  let startChangingColor = () => {
    if (intervalID == null) {
      intervalID = setInterval(changeBgColor, 1000);
    }
    function changeBgColor() {
      document.body.style.backgroundColor = randomColor();
    }
  };
  
  document.querySelector('#start').addEventListener('click', startChangingColor);
  
  let stopChangingColor = () => {
    clearInterval(intervalID);
    intervalID = null;
  };
  
  document.querySelector('#stop').addEventListener('click', stopChangingColor);
  