
let btn = document.getElementById("Add_task")

const secondBox = document.querySelector(".second_box");
const container_card = document.querySelector(".container_card");
let datee = document.querySelector("#inputDate")
const textArea = document.querySelector("#taskText");
let options = document.getElementById("select");


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
    let heure = document.getElementById("hour").value;
    
    //   let inputDay = document.getElementById("inputDay").value

    
   
    
    
    let regex = /^[A-Za-z "]+$/;
    let regex_hour = /^[0-9HhrR"]+$/;
    if (!regex.test(txt_content)||inputDate>5) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Votre input value note valide!",
        });

        
        
    }else if (!regex_hour.test(heure)){
            Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Votre input value note valide!",
        });
            
        }else { 
        
        
        const containerDay=document.getElementById(`p${inputDate}`);
        let P_card=document.createElement("p");
        let dev=document.createElement("div");
        dev.className="div_style"
        
        P_card.className="PCard";
        // let icon=document.createElement("i");
        
        // icon.classList="fas fa-font-awesome"
        // P_card.appendChild("icon")
        P_card.textContent=  txt_content;
        
        let p_hour=document.createElement("p")
        p_hour.textContent = heure;
        p_hour.className="pHour";
        containerDay.appendChild(dev)
        dev.appendChild(p_hour);
         dev.appendChild(P_card);


        
        if (options.value==="VIP"){
            console.log(options.value);
              dev.style.backgroundColor="red";
              
        }
        else if(options.value==="Aniversaire"){
             
            dev.style.backgroundColor="green";

        }
        else if(options.value==="Standard"){
            dev.style.backgroundColor="blue";
                    }

        else if(options.value==="Group"){
            dev.style.backgroundColor="yellow";
                    }



         dev.addEventListener('click', function(e) {
            dev.remove();
             // supprime l element
        });
        




        form.reset();


    }
});
    







    
    
    
    
    

    
    
    
    












