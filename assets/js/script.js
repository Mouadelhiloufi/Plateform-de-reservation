
let btn = document.getElementById("Add_task")

const secondBox = document.querySelector(".second_box");
const container_card = document.querySelector(".container_card");
let datee = document.querySelector("#inputDate")
const textArea = document.querySelector("#taskText");
let options = document.getElementById("select");
let popUp = document.querySelector(".popUp");
const formModif= document.getElementById("formPop");
let dateModif = document.querySelector("#inputDateM")
let tasktxtM = document.querySelector("#taskTextM")
let selectM = document.querySelector("#selectM")
let hourM = document.querySelector("#hourM")



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
                        
                                <p class="P_card${i + 1}"> ${i + 1}</p>
                            </div>
                            
                            `

    container_card.innerHTML += content

}




btn.addEventListener('click', function (e) {
    e.preventDefault();


    let inputDate = document.getElementById("inputDate").value
    let txt_content = document.getElementById("taskText").value
    let cards = document.querySelectorAll(".card");
    let heure = document.getElementById("hour").value;

    //   let inputDay = document.getElementById("inputDay").value





    let regex = /^[A-Za-z "]+$/;
    let regex_hour = /^[0-9HhrR"]+$/;
    if (!regex.test(txt_content) || inputDate > 5) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Votre input value note valide!",
        });



    } else if (!regex_hour.test(heure)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Votre input value note valide!",
        });

    } else {


        const containerDay = document.getElementById(`p${inputDate}`);
        let P_card = document.createElement("p");
        let dev = document.createElement("div");

        dev.className = "div_style"
        
       let btnmodif = document.createElement("button");
       
        P_card.className = "PCard";
        // let icon=document.createElement("i");

        // icon.classList="fas fa-font-awesome"
        // P_card.appendChild("icon")
        P_card.textContent = txt_content;
        btnmodif.className ="modif";
        btnmodif.textContent = "modifier";
        
        

        let p_hour = document.createElement("p")
        p_hour.textContent = heure;
        p_hour.className = "pHour";
        containerDay.appendChild(dev)
        dev.appendChild(p_hour);
        dev.appendChild(P_card);
        dev.appendChild(btnmodif);
        



        if (options.value === "VIP") {
          
            dev.style.backgroundColor = "red";

        }
        else if (options.value === "Aniversaire") {

            dev.style.backgroundColor = "green";
            

        }
        else if (options.value === "Standard") {
            dev.style.backgroundColor = "blue";
        }

        else if (options.value === "Group") {
            dev.style.backgroundColor = "yellow";
        }



        dev.addEventListener('dblclick', function (e) {
            
            e.currentTarget.remove(); // supprimer l element
            popUp.style.display="none";
        });
        btnmodif.addEventListener('click',function(e){
          
            popUp.style.display="flex";
            formModif.addEventListener('submit',function(e){
                
                console.log(dateModif)
                    dateModif=inputDate;
                    tasktxtM=txt_content;
                    hourM=heure;
                    console.log(inputDate)

                



            });

            
            });













        form.reset();


    }
});













container_card
















