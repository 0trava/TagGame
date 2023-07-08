const Box = document.querySelector(".box");
const Btn = document.querySelector('.btn');

console.log(Box);
console.log(Btn);

let Number = ['1','2','3','4','5','6','7','8','empty']


for ( var i of Number) {
  let BoxItem = document.createElement('div');
  Box.appendChild(BoxItem);
  BoxItem.classList.add(i);
  BoxItem.innerText = i
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
       if (Number[Index + 3] === "empty") { 
           Number[Index + 3] = clickItem; 
           Number[Index] = "empty";
       }
       break;
    case 1:
        if (Number[Index - 1] === "empty") {
            Number[Index - 1] = clickItem; 
            Number[Index] = "empty"
       }
       if (Number[Index + 1] === "empty") { 
           Number[Index + 1] = clickItem; 
           Number[Index] = "empty"
       }
       if (Number[Index + 3] === "empty") { 
           Number[Index + 3] = clickItem; 
           Number[Index] = "empty";
       }
       break;
    case 2:
        if (Number[Index - 1] === "empty") {
            Number[Index - 1] = clickItem; 
            Number[Index] = "empty"
       }
       if (Number[Index + 3] === "empty") { 
           Number[Index + 3] = clickItem; 
           Number[Index] = "empty";
       }
       break;
    case 3:
       if (Number[Index + 1] === "empty") { 
           Number[Index + 1] = clickItem; 
           Number[Index] = "empty"
       }
       if (Number[Index + 3] === "empty") { 
           Number[Index + 3] = clickItem; 
           Number[Index] = "empty";
       }
       if (Number[Index - 3] === "empty") {
           Number[Index - 3] = clickItem; 
           Number[Index] = "empty"
       }
       break;
    case 4:
        if (Number[Index - 1] === "empty") {
            Number[Index - 1] = clickItem; 
            Number[Index] = "empty"
       }
       if (Number[Index + 1] === "empty") { 
           Number[Index + 1] = clickItem; 
           Number[Index] = "empty"
       }
       if (Number[Index + 3] === "empty") { 
           Number[Index + 3] = clickItem; 
           Number[Index] = "empty";
       }
       if (Number[Index - 3] === "empty") {
           Number[Index - 3] = clickItem; 
           Number[Index] = "empty"
       }
       break;
    case 5:
        if (Number[Index - 1] === "empty") {
            Number[Index - 1] = clickItem; 
            Number[Index] = "empty"
       }
       if (Number[Index + 3] === "empty") { 
           Number[Index + 3] = clickItem; 
           Number[Index] = "empty";
       }
       if (Number[Index - 3] === "empty") {
           Number[Index - 3] = clickItem; 
           Number[Index] = "empty"
       }
       break;
    case 6:
       if (Number[Index + 1] === "empty") { 
           Number[Index + 1] = clickItem; 
           Number[Index] = "empty"
       }
       if (Number[Index - 3] === "empty") {
           Number[Index - 3] = clickItem; 
           Number[Index] = "empty"
       }
       break;
    case 7:
        if (Number[Index - 1] === "empty") {
            Number[Index - 1] = clickItem; 
            Number[Index] = "empty"
       }
       if (Number[Index + 1] === "empty") { 
           Number[Index + 1] = clickItem; 
           Number[Index] = "empty"
       }
       if (Number[Index - 3] === "empty") {
           Number[Index - 3] = clickItem; 
           Number[Index] = "empty"
       }
       break;
    case 8:
        if (Number[Index - 1] === "empty") {
            Number[Index - 1] = clickItem; 
            Number[Index] = "empty"
       }
       if (Number[Index - 3] === "empty") {
           Number[Index - 3] = clickItem; 
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
        if (test == 8) {
            console.log("win")
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





