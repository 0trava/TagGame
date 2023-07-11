const Box = document.querySelector(".box");
const Btn = document.querySelector('.btn');
const winBox = document.querySelector('.box_win');
const label = document.querySelector('#color_mode');
const hours = document.querySelector('.timer__hours');
const minutes = document.querySelector('.timer__minutes');
const seconds = document.querySelector('.timer__seconds');
const alien = document.querySelector('.alien');
const alien_like = document.querySelector('.alien_like');

let Number = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','empty'];
let Tagle = false;
let Timer = ["00", "00", "00"];
let hour = "00";
let minute = "00";
let second = "00";
let t;
let win = 0;


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

for (let i = 0; i < 15; i++) {

   if (checkArrey[i] == i + 1) {
        win = win + 1;
        if (win > 7) {
            alien.classList.remove('hidden');
        } else {
            alien.classList.add('hidden');
            alien_like.classList.add('hidden');
        }

        if (win > 11) {
            alien.classList.add('hidden');
            alien_like.classList.remove('hidden');
        }

        if (win > 14) {
            alien.classList.add('hidden');
            Box.classList.add('hidden');
            alien_like.classList.add('hidden');
            winBox.classList.remove('hidden');
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
    e.preventDefault();

    winBox.classList.add('hidden');
    Box.classList.remove('hidden');
    alien.classList.add('hidden');

    let Mix = Number.sort(function(){
        return Math.random() - 0.5;
      });

    checkCollection(Mix);  
    moveItem(Mix);
    TimerStart();   



}


function timer() {
    t = setTimeout(TimerStart, 1000);
}


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


function TimerStart(){
    tick();
    if (second < 10) { second = `0${second}`;};
    if (minute >= 1 && minute > Timer[1]){ minute = `0${minute}`;};
    if (hour >= 1 && hour > Timer[0]){ hour = `0${hour}`;};

    Timer = [hour, minute, second];

    hours.innerText = Timer[0];
    minutes.innerText = Timer[1];
    seconds.innerText = Timer[2];
    timer();
}

Box.addEventListener('click', chackClick);
Btn.addEventListener('click', mixArrey);
label.addEventListener('click', changeTagle);





