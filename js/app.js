const Box = document.querySelector(".box");
const Btn = document.querySelector('.btn');
const winBox = document.querySelector('.box_win');
const label = document.querySelector('#color_mode');
const time = document.querySelector('.time');

let Number = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','empty'];
let Tagle = false;


label.addEventListener('click', changeTagle);



function changeTagle(e) {
    Tagle  = e.target.checked;
    moveItem(Number);
 
}


function Tagle_number(List){
    for ( var i of List) {
        let BoxItem = document.createElement('div');
        Box.appendChild(BoxItem);
        BoxItem.classList.add(i);
        BoxItem.innerText = i
      
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
    let test = i + 1;

   if (checkArrey[i] == test) {
        console.log(checkArrey[i]);
        console.log(test);
        if (test === 15 || checkArrey[15] === "empty") {
            console.log("win");
            winBox.classList.remove('hidden');
            Box.classList.add('hidden');

        }
   } else {
    i = 16;
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
    console.log(Mix);
    moveItem(Number);
    checkCollection(Number);

}

Box.addEventListener('click', chackClick);

Btn.addEventListener('click', mixArrey)





