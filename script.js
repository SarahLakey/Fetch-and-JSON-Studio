// TODO: add code here
window.addEventListener("load", function(){
  fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(function(response){
    response.json().then(function(astronaut){
        console.log(astronaut);
        const id = document.getElementById("container");
        for (let i=0; i<astronaut.length; i++) {
        id.innerHTML += `
            <div class="astronaut">
                <div class="bio">
                <h3> ${astronaut[i].firstName} ${astronaut[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${astronaut[i].hoursInSpace}</li>
                        <li>Active: ${astronaut[i].active}</li>
                        <li>Skills: ${astronaut[i].skills.join(", ")}</li>
                    </ul>
                </div>
            <img class="avatar" src="${astronaut[i].picture}">
            </div>`
     }
    });
  });
});
