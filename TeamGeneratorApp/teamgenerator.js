let noOfTeamsBtn = document.querySelector('.myButton')

const teamCreator = function(){
    
    let noOfTeams = document.querySelector('#numOfTeams').value
    let createTeamDiv = document.querySelector('#team-details-form')
    let question = document.createElement('h4')
    question.classList.add('mt-5')
        question.classList.add('text-center')
    const input= document.createElement("INPUT");
    input.setAttribute("type", "number");
    
    createTeamDiv.appendChild(question)
    createTeamDiv.appendChild(input)
  
   let firstNameLabel = document.createElement('label')
   
   let firstnameInput = document.createElement('input')
   firstnameInput.setAttribute("type","text")
   let lastNameLabel = document.createElement('label')
   let lastnameInput = document.createElement('input')
   lastnameInput.setAttribute("type","text")
   createTeamDiv.appendChild(firstNameLabel)
        createTeamDiv.appendChild(firstNameInput)
        createTeamDiv.appendChild(lastNameLabel)
        createTeamDiv.appendChild(lastNameInput)
  
    for(let i=1; i<= noOfTeams; i++){
        question.innerText= "Please Enter the number of team members in team: " + i 
        let teamMembers = input.value
        let noOfMembersBtn = document.createElement('button')
        noOfMembersBtn.value='Go for team creation'
        noOfMembersBtn.classList.add('btn') 
        noOfMembersBtn.classList.add('btn-lg') 
        noOfMembersBtn.classList.add('btn-block') 
        noOfMembersBtn.classList.add('mt-5') 
         noOfMembersBtn.classList.add('myButton') 
         createTeamDiv.appendChild(noOfMembersBtn)
        
        for(let j=1; j<=teamMembers;j++){
            question.innerText="Please enter "+ i + "team member details."
           
            let li = document.createElement('li')
            li.innerText= firstNameInput + " " + lastnameInput
            document.querySelector('.team-ul').appendChild(li)

        }

      


     /*   noOfTeamsBtn.addEventListener('click',takeTeamDetails)
        const takeTeamDetails= function () {
            
        }*/
        

    }
}