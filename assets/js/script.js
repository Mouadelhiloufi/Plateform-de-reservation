
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

for (let i = 0; i < 7; i++) {

    let content = `  
      
      <div class="card" id="p${i + 1}">
                            
                                <p class="P_card${i+1}"> ${i + 1}</p>
                            </div>
                            
                            `

    container_card.innerHTML += content

}


form.addEventListener('submit', function (e) {
    e.preventDefault();


    let inputDate = document.getElementById("inputDate").value
    let txt_content = document.getElementById("taskText").value
    let cards=document.querySelectorAll(".card");
    
    //   let inputDay = document.getElementById("inputDay").value

    
   
    
    
    let regex = /^[A-Za-z "]+$/;
    if (!regex.test(txt_content)||inputDate>7) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Votre input value note valide!",
        });
        
    }
    else{ 
        const containerDay=document.getElementById(`p${inputDate}`);
        let P_card=document.createElement("p");
        P_card.className="PCard";
        P_card.textContent=  txt_content;
        containerDay.appendChild(P_card);
        

        

         P_card.addEventListener('click', function(e) {
            P_card.remove(); // supprime l'élément lui-même
        });
    }
});
    







    
    
    
    
    

    
    
    
    












