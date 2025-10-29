
let btn = document.getElementById("Add_task")

const secondBox = document.querySelector(".second_box");
const container_card = document.querySelector(".container_card");
let datee = document.querySelector("#inputDate")
const textArea = document.querySelector("#taskText");


const form = document.querySelector(".taskInput");




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
                            
                                <p class="P_card">${i + 1}</p>
                            </div>
                            
                            `

    container_card.innerHTML += content

}


form.addEventListener('submit', function (e) {
    e.preventDefault();

    let inputDate = document.getElementById("inputDate").value
    let txt_content = document.getElementById("taskText").value
    let cards=document.querySelectorAll(".card");
    console.log(cards);
    //   let inputDay = document.getElementById("inputDay").value

    
    
    
    
    let regex = /^[A-Za-z0-9 "]+$/;
    if (!regex.test(txt_content)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Votre input value note valide!",
        });
        
    }
    else{
    const dayContainer=document.getElementById(`${inputDate}`);
    let pElement = document.createElement("p");
    pElement.className="P_element"
    pElement.textContent=txt_content;
    dayContainer.appendChild(pElement)
    }







    
    
    
    
    

    
    
    
    
})











