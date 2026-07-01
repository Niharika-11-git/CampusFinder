const savedContainer = document.getElementById("savedContainer");

let savedColleges =
JSON.parse(localStorage.getItem("savedColleges")) || [];

function loadSavedColleges(){

    savedContainer.innerHTML = "";

    if(savedColleges.length === 0){

        savedContainer.innerHTML = `

        <div class="empty-box">

            <h2>❤️ No Saved Colleges</h2>

            <p>
                Go to Dashboard or College Details
                and save your favourite colleges.
            </p>

        </div>

        `;

        return;
    }

    savedColleges.forEach((college,index)=>{

        savedContainer.innerHTML += `

        <div class="saved-card">

            <img src="../images/colleges/${college.image}"
            alt="${college.name}">

            <h2>${college.name}</h2>

            <p>${college.location}</p>

            <button onclick="removeCollege(${index})">
                Remove
            </button>

        </div>

        `;

    });

}

function removeCollege(index){

    savedColleges.splice(index,1);

    localStorage.setItem(
        "savedColleges",
        JSON.stringify(savedColleges)
    );

    loadSavedColleges();

}

loadSavedColleges();