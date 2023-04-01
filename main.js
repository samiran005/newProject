
const slidingText = document.querySelector(".sliding-text");

const leftTrees = document.querySelector(".left-tree");
const rightTrees = document.querySelector(".right-tree");

const leftGate = document.querySelector(".left-gate");
const rightGate = document.querySelector(".right-gate");

console.log(leftTrees, rightTrees)

window.addEventListener("scroll", (e)=>{
    valueY = window.scrollY;
    slidingText.style.transform = `translateX(${1600 - (valueY * 8)}px)`;
    leftTrees.style.transform = `translateX(${-valueY}px)`;
    rightTrees.style.transform = `translateX(${valueY}px)`;

    leftGate.style.transform = `translateX(${valueY * 0.6}px)`;
    rightGate.style.transform = `translateX(${-valueY * 0.6}px)`;
})


const btn = document.querySelector(".btn");
const aprilFool = document.querySelector(".april-fool");


btn.addEventListener("click", ()=>{
    btn.style.display = "none";
    aprilFool.style.display = "flex";
})


const wholePage = document.querySelector(".rapper");
const mobileAlert = document.querySelector(".window--mobile");


if(window.innerWidth < 900){
    wholePage.style.display = "none";
    mobileAlert.style.display = "block"

}