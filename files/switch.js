document.getElementById("toggleSwitch").onclick = function() {
    myFunction()
  };

  function myFunction() {
    let color = document.body.style.background;
    if (color === 'dimgray') {
      document.body.style.background = "white";
      document.body.style.color = "black";
    } else {
      document.body.style.background = "dimgray";
      document.body.style.color = "black";
    }

  }