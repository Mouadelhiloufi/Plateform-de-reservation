
let btn = document.getElementById("Add_task")
const secondBox = document.querySelector(".second_box");
const container_card = document.querySelector(".container_card");
let datee = document.querySelector("#inputDate")
const textArea = document.querySelector("#taskText");


const form= document.querySelector(".taskInput");




let days = `
    <div class="days">
    <p id="monday">Monday</p>
    <p id="tuesday">Tuesday</p>
    <p id="wednesday">Wednesday</p>
    <p id="thursday">Thursday</p>
    <p id="friday">Friday</p>
    <p id="saturday">Saturday</p>
    <p id="sunday">Sunday</p></div>
    `
container_card.innerHTML += days;

for (let i = 0; i < 31; i++) {

    let content = `  
      
      <div class="card" id="${i + 1}">
                            
                                <p>${i + 1}</p>
                            </div>`

    container_card.innerHTML += content
}










