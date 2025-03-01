//your JS code here. If required.

// let button=document.getElementsByTagName("input");
// button[0].addEventListener("click", function () {
//       let task=document.getElementById("colorSelect");
//       // let list=document.getElementsByTagName("option");
// 	 let input=task.selectedIndex;
//      task.remove(input);
// });
document.querySelector("input").addEventListener("click", function () {
    let task = document.querySelector("#colorSelect");
    let inputId = task.selectedIndex;
    task.remove(inputId);
});
