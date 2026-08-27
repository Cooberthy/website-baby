const score1 = document.getElementById("1score")
const score2 = document.getElementById("2score")
const page = document.body;
let darkmode = localStorage.getItem("darkmode");
let p1score = 0
let p2score = 0

if (darkmode === "yes") {
  page.classList.remove("light");
  page.classList.add("dark");
}


function klikk() {
  if (page.classList.contains("light")) {
    page.classList.remove("light");
    page.classList.add("dark");
    localStorage.setItem("darkmode", "yes");
  } else if (page.classList.contains("dark")) {
    page.classList.remove("dark");
    page.classList.add("light");
    localStorage.setItem("darkmode", null);
  }
  darkmode = localStorage.getItem("darkmode");
}

function add1(){
    p1score +=1
    score1.textContent = p1score
}
function take1(){
    p1score-= 1
    score1.textContent = p1score
}

function add2(){
    p2score +=1
    score2.textContent = p2score
}
function take2(){
    p2score-= 1
    score2.textContent = p2score
}