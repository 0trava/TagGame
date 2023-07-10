const Box = document.querySelector(".box");
const Btn = document.querySelector('.btn');
const winBox = document.querySelector('.box_win');
const label = document.querySelector('#color_mode');
const hours = document.querySelector('.timer__hours');
const minutes = document.querySelector('.timer__minutes');
const seconds = document.querySelector('.timer__seconds');


let Number = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','empty'];
let Tagle = false;
let Timer = ["00", "00", "00"];
let hour = "00";
let minute = "00";
let second = "";
let t;


function changeTagle(e) {
    Tagle  = e.target.checked;
    moveItem(Number);
 
}


function Tagle_number(List){
    for ( var i of List) {
        let BoxItem = document.createElement('div');
        Box.appendChild(BoxItem);
        BoxItem.classList.add(i);
        BoxItem.innerText = i;
      
      }
}

function Tagle_img(List){
    for ( var i of List) {
        let BoxItem = document.createElement("img");
        BoxItem.src = `./public/image_for_game/image_part_${i}.jpg`;
        Box.appendChild(BoxItem);
        BoxItem.classList.add(i);
        BoxItem.innerText = i;
      }
}

if (Tagle){
    Tagle_img(Number);
} else {
    Tagle_number(Number);
}




function chackClick(e) {
    const clickItem = e.target.classList[0];
    
    let Index = Number.indexOf(clickItem);
 switch (Index) {
    case 0:
       if (Number[Index + 1] === "empty") { 
           Number[Index + 1] = clickItem; 
           Number[Index] = "empty"
       }
       if (Number[Index + 4] === "empty") { 
           Number[Index + 4] = clickItem; 
           Number[Index] = "empty";
       }
       break;
    case 1:
    case 2:
        if (Number[Index - 1] === "empty") {
            Number[Index - 1] = clickItem; 
            Number[Index] = "empty"
       }
       if (Number[Index + 1] === "empty") { 
           Number[Index + 1] = clickItem; 
           Number[Index] = "empty"
       }
       if (Number[Index + 4] === "empty") { 
           Number[Index + 4] = clickItem; 
           Number[Index] = "empty";
       }
       break;
    case 3:
        if (Number[Index - 1] === "empty") {
            Number[Index - 1] = clickItem; 
            Number[Index] = "empty"
       }
       if (Number[Index + 4] === "empty") { 
           Number[Index + 4] = clickItem; 
           Number[Index] = "empty";
       }
       break;
    case 4:
    case 8:
       if (Number[Index + 1] === "empty") { 
           Number[Index + 1] = clickItem; 
           Number[Index] = "empty"
       }
       if (Number[Index + 4] === "empty") { 
           Number[Index + 4] = clickItem; 
           Number[Index] = "empty";
       }
       if (Number[Index - 4] === "empty") {
           Number[Index - 4] = clickItem; 
           Number[Index] = "empty"
       }
       break;
    case 5:
    case 6:
    case 9:
    case 10:
        if (Number[Index - 1] === "empty") {
            Number[Index - 1] = clickItem; 
            Number[Index] = "empty"
       }
       if (Number[Index + 1] === "empty") { 
           Number[Index + 1] = clickItem; 
           Number[Index] = "empty"
       }
       if (Number[Index + 4] === "empty") { 
           Number[Index + 4] = clickItem; 
           Number[Index] = "empty";
       }
       if (Number[Index - 4] === "empty") {
           Number[Index - 4] = clickItem; 
           Number[Index] = "empty"
       }
       break;
    case 7:
    case 11:
        if (Number[Index - 1] === "empty") {
            Number[Index - 1] = clickItem; 
            Number[Index] = "empty"
       }
       if (Number[Index + 4] === "empty") { 
           Number[Index + 4] = clickItem; 
           Number[Index] = "empty";
       }
       if (Number[Index - 4] === "empty") {
           Number[Index - 4] = clickItem; 
           Number[Index] = "empty"
       }
       break;
    case 12:
       if (Number[Index + 1] === "empty") { 
           Number[Index + 1] = clickItem; 
           Number[Index] = "empty"
       }
       if (Number[Index - 4] === "empty") {
           Number[Index - 4] = clickItem; 
           Number[Index] = "empty"
       }
       break;
    case 13:
    case 14:
        if (Number[Index - 1] === "empty") {
            Number[Index - 1] = clickItem; 
            Number[Index] = "empty"
       }
       if (Number[Index + 1] === "empty") { 
           Number[Index + 1] = clickItem; 
           Number[Index] = "empty"
       }
       if (Number[Index - 4] === "empty") {
           Number[Index - 4] = clickItem; 
           Number[Index] = "empty"
       }
       break;
    case 15:
        if (Number[Index - 1] === "empty") {
            Number[Index - 1] = clickItem; 
            Number[Index] = "empty"
       }
       if (Number[Index - 4] === "empty") {
           Number[Index - 4] = clickItem; 
           Number[Index] = "empty"
       }
       break;
 }
    moveItem(Number);
    checkCollection(Number);

}

function checkCollection(checkArrey) {
let win = 0;
for (let i = 0; i < 15; i++) {
    let test = i + 1;
    

   if (checkArrey[i] == test) {
        win = win + 1;
        console.log(win);
        if (win > 14) {
            console.log("win");
            winBox.classList.remove('hidden');
            Box.classList.add('hidden');
        }
   } else {
    i = 16;
    win = 0;
   }
}
}


function moveItem(Number) {
    for ( var i of Number) {
        let BoxItem = document.getElementsByClassName(i);
        Box.removeChild(BoxItem[0]);
      }
    

    if (Tagle){
        Tagle_img(Number);
    } else {
        Tagle_number(Number);
    }
};

function mixArrey (e) {
    winBox.classList.add('hidden');
    Box.classList.remove('hidden');
    e.preventDefault();
    let Mix = Number.sort(function(){
        return Math.random() - 0.5;
      });
    moveItem(Number);
    checkCollection(Number);
    TimerStart(["00", "00", "00"]);

}


function timer() {
    t = setTimeout(add, 1000);
}

function add() {
    tick();
    if (second < 10) { second = `0${second}`;};

    Timer = [hour, minute, second];

    
    hours.innerText = Timer[0];
    minutes.innerText = Timer[1];
    seconds.innerText = Timer[2];
    timer();
};

function tick(){
    second++;
    if (second >= 60) {
        second = 0;
        minute++;
        if (minute >= 60) {
            minute = 0;
            hour++;
        }
    }
}


function TimerStart(time){
Timer = time;
console.log(Timer);

add()



}

Box.addEventListener('click', chackClick);
Btn.addEventListener('click', mixArrey);
label.addEventListener('click', changeTagle);





