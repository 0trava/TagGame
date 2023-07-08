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
    console.log(clickItem);

    let Index = Number.indexOf(clickItem);
    console.log(Index);

    if (Number[Index - 1] === "empty") { Number[Index - 1] = clickItem; Number[Index] = "empty"}
    if (Number[Index + 1] === "empty") { console.log("+1")}
    if (Number[Index + 3] === "empty") { 
        Number[Index + 3] = clickItem; 
        Number[Index] = "empty";
    }
    if (Number[Index - 3] === "empty") { console.log("-3")}

    // Emam = ['1','2','empty','3','4','5','6','7','8'];


    moveItem(Number);

}


function moveItem(newArrey) {
    for ( var i of Number) {
        let BoxItem = document.getElementsByClassName(i);
        Box.removeChild(BoxItem[0]);
        console.log(BoxItem[0]);
      }
    
      for ( var i of newArrey) {
        let BoxItem = document.createElement('div');
        Box.appendChild(BoxItem);
        BoxItem.classList.add(i);
        BoxItem.innerText = i
      }
};

Box.addEventListener('click', chackClick);





