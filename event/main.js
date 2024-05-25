///bacgroumd changing color so easy //
// let name = prompt("please Enter your Name");
// let age = prompt("please enter your age");
// age = innerHTML;
let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
// console.log(modebtn);

let currMode = "light";
modebtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        body.classList.add("dark")
        body.classList.remove("light")

        // document.querySelector("body").style.backgroundColor = "orange";
    } else {
        currMode = "light";
        // document.querySelector("body").style.backgroundColor = "black";
        body.classList.add("light")
        body.classList.remove("dark")
    }
    console.log(currMode);
});