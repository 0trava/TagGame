const Box = document.querySelector(".box");
const Btn = document.querySelector('.btn');
const winBox = document.querySelector('.box_win');


let Number = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','empty']


for ( var i of Number) {
  let BoxItem = document.createElement('div');
  Box.appendChild(BoxItem);
  BoxItem.classList.add(i);
  BoxItem.innerText = i
}

function chackClick(e) {
    const clickItem = e.target.classList[0];
    
    let Index = Number.indexOf(clickItem);
    console.log(Index);
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

for (let i = 0; i < 9; i++) {
    let test = i + 1;
   if (checkArrey[i] == test) {
        if (test == 14) {
            console.log("win");
            winBox.classList.remove('hidden')

        }
   } else {
    i = 9;
   }
}
}


function moveItem(newArrey) {
    for ( var i of Number) {
        let BoxItem = document.getElementsByClassName(i);
        Box.removeChild(BoxItem[0]);
      }
    
      for ( var i of newArrey) {
        let BoxItem = document.createElement('div');
        Box.appendChild(BoxItem);
        BoxItem.classList.add(i);
        BoxItem.innerText = i
      }
};

function mixArrey (e) {
    winBox.classList.add('hidden')
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





