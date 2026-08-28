const score1 = document.getElementById("1score")
const score2 = document.getElementById("2score")
const page = document.body;
let darkmode = localStorage.getItem("darkmode");
let p1score = 0
let p2score = 0
let list = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "so carefull of the type? but no from scarped cliff and quarried stone se cries a thousands types are fona i care for nothing all shall go", "never gonna give you up never gonna let you down never gonna run around and desert you", "God said, Let there be light: and there was light.", "dette sitatet er sponset av Raid: Shadow Legends™"]
let word = list[Math.floor(Math.random() * list.length)]

function wow(){
    word = list[Math.floor(Math.random() * list.length)]
    document.getElementById("sitat").textContent = word
}


/* darkk mode */
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
function nullstill1(){
    p1score = 0
    score1.textContent = p1score
}
function nullstill2(){
    p2score = 0
    score2.textContent = p2score
}

function comic(){
    if(page.classList.contains("sans")){
        page.classList.remove("sans") 
    } else {
        page.classList.add("sans")
    }
}