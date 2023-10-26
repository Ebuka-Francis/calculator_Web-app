// let butt = document.querySelector(".buttn").addEventListener('click', display);

// function display(){
//     let o = document.querySelector(".display").innerHTML = "7";
//     // o.style.display
// }


function Noi() {
  document.querySelector("display").innerHTML = eval(display.value);
}

let p = document.querySelector("body");
let i = document.querySelector("input");
let s = document.querySelector("section");
let but = document.querySelector(".but");
const buttons = document.querySelectorAll("input");

function p0() {
  p.style.backgroundColor = "hsl(222, 26%, 31%)";
  p.style.color = "#fff";
  i.style.backgroundColor = "hsl(224, 36%, 15%)";
  i.style.color = "#fff";
  s.style.backgroundColor = "hsl(223, 31%, 20%)";
  s.style.boxShadow = "0px 0px 0px 0px #333";
  but.style.backgroundColor = "hsl(223, 31%, 20%)";
  but.style.color = "#fff";

  let buttons = document.querySelectorAll(".buttn").forEach((p) => {
    if ((className = ".buttn")) {
      p.classList.add("bt");
      p.classList.remove("bts");
      p.classList.remove("bte");

    }
  });


}

function p1() {
  p.style.backgroundColor = "hsl(0, 0%, 90%)";
  p.style.color = "#000";
  i.style.backgroundColor = "#fff";
  i.style.color = "#000";
  s.style.backgroundColor = "hsl(0, 5%, 81%) ";
  s.style.boxShadow = "0px 0px 0px 0px #333";
  but.style.backgroundColor = "hsl(0, 0%, 90%)";
  but.style.color = "#000";

  let buttons = document.querySelectorAll(".buttn").forEach((e) => {
    if ((className = ".buttn")) {
      e.classList.add("bts");
      e.classList.remove("bte");
    }
  });
}
function p2() {
  p.style.backgroundColor = "hsl(268, 75%, 9%)";
  p.style.color = "#fff";
  i.style.backgroundColor = "hsl(268, 71%, 12%)";
  i.style.color = "hsl(52, 100%, 62%)";
  s.style.backgroundColor = "hsl(268, 75%, 9%)";
  s.style.boxShadow = "1px 3px 1px 5px #000";
  but.style.backgroundColor = "hsl(268, 75%, 9%)";
  but.style.color = "hsl(52, 100%, 62%)";

  let buttons = document.querySelectorAll(".buttn").forEach((r) => {
    if ((className = ".buttn")) {
      r.color = "";
      r.classList.add("bte");
    }
  });
}
