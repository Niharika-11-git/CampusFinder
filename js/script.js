// ======================
// SEARCH COLLEGE
// ======================

function goToCollege() {

    const college =
    document.getElementById("searchInput")
    .value
    .trim()
    .toLowerCase();

    if(college !== ""){

        localStorage.setItem(
            "selectedCollege",
            college
        );

        window.location.href =
        "pages/dashboard.html";
    }
}


// ======================
// DASHBOARD COLLEGE DETAILS
// ======================

window.onload = function(){

    const details =
    document.getElementById("collegeDetails");

    if(!details) return;

    const college =
    localStorage.getItem(
        "selectedCollege"
    );

    if(!college) return;

    const colleges = {

        griet:{
    name:"GRIET",
    location:"Hyderabad",
    branches:"CSE, AIML, DS, ECE",
    fees:"₹1,30,000",
    placement:"Average ₹8 LPA | Highest ₹44 LPA",
    review:`Strong coding culture,
    good placements and modern infrastructure.
    Popular among CSE students.`,
    cutoff:"2500"
},

        bvrit:{
    name:"BVRIT",
    location:"Hyderabad",
    branches:"CSE, AIML, ECE",
    fees:"₹1,35,000",
    placement:"Average ₹7 LPA | Highest ₹32 LPA",
    review:`Excellent faculty support and good campus environment.
    Strong placement opportunities for CSE students.
    Well-maintained campus and laboratories.`,
    cutoff:"3500"
},

        vnr:{
    name:"VNR VJIET",
    location:"Hyderabad",
    branches:"CSE, IT, ECE",
    fees:"₹1,45,000",
    placement:"Average ₹10 LPA | Highest ₹51 LPA",
    review:`One of the top engineering colleges in Hyderabad.
    Excellent placements and industry exposure.
    Strong coding culture and technical clubs.`,
    cutoff:"2000"
},

        cbit:{
    name:"CBIT",
    location:"Hyderabad",
    branches:"CSE, AIML, ECE",
    fees:"₹1,50,000",
    placement:"Average ₹9 LPA | Highest ₹52 LPA",
    review:`Excellent academic reputation and placements.
    Strong alumni network across top companies.
    Good infrastructure and campus life.`,
    cutoff:"1800"
},
        mgit:{
    name:"MGIT",
    location:"Hyderabad",
    branches:"CSE, IT, ECE",
    fees:"₹1,25,000",
    placement:"Average ₹6.5 LPA | Highest ₹24 LPA",
    review:`Good academic environment and faculty support.
    Affordable fee structure compared to other colleges.
    Decent placement opportunities.`,
    cutoff:"5000"
},
      
       cvr:{
    name:"CVR",
    location:"Hyderabad",
    branches:"CSE, AIML, DS, ECE",
    fees:"₹1,40,000",
    placement:"Average ₹7.5 LPA | Highest ₹33 LPA",
    review:`Known for discipline and placements.
    Strong performance in CSE and AIML programs.
    Modern campus with good facilities.`,
    cutoff:"4500"
}, 

        geethanjali:{
    name:"Geethanjali",
    location:"Hyderabad",
    branches:"CSE, AIML, IT, ECE",
    fees:"₹1,20,000",
    placement:"Average ₹6 LPA | Highest ₹20 LPA",
    review:`Good learning environment and supportive faculty.
    Placement opportunities are improving every year.
    Focus on practical learning and projects.`,
    cutoff:"8000"
},
        mlrit:{
    name:"MLRIT",
    location:"Hyderabad",
    branches:"CSE, AIML, DS, ECE",
    fees:"₹1,10,000",
    placement:"Average ₹5.5 LPA | Highest ₹18 LPA",
    review:`Growing college with good infrastructure.
    Supportive faculty and active student events.
    Suitable option for engineering aspirants.`,
    cutoff:"12000"
},

        anurag:{
    name:"Anurag University",
    location:"Hyderabad",
    branches:"CSE, AIML, DS, ECE",
    fees:"₹1,25,000",
    placement:"Average ₹7 LPA | Highest ₹38 LPA",
    review:`University-level campus with modern labs.
    Good industry collaborations and internships.
    Strong focus on innovation and research.`,
    cutoff:"7000"
},
        ou:{
    name:"Osmania University",
    location:"Hyderabad",
    branches:"CSE, ECE, EEE, Civil",
    fees:"₹50,000",
    placement:"Average ₹8 LPA | Highest ₹25 LPA",
    review:`Prestigious government university in Telangana.
    Affordable education with strong academics.
    Large campus and experienced faculty.`,
    cutoff:"1500"
},

        jntuh:{
    name:"JNTUH",
    location:"Hyderabad",
    branches:"CSE, ECE, EEE, Mechanical",
    fees:"₹60,000",
    placement:"Average ₹8.5 LPA | Highest ₹30 LPA",
    review:`One of Telangana's leading technical universities.
    Strong academic programs and placements.
    Excellent reputation among engineering students.`,
    cutoff:"2000"
},
    };

    if(colleges[college]){

        details.innerHTML = `

        <div class="college-info-card">

            <h2>${colleges[college].name}</h2>

            <p><strong>Location:</strong>
            ${colleges[college].location}</p>

            <p><strong>Branches:</strong>
            ${colleges[college].branches}</p>

            <p><strong>Fees:</strong>
            ${colleges[college].fees}</p>

            <p><strong>Cutoff Rank:</strong>
            ${colleges[college].cutoff}</p>

            <br>

        </div>

        `;
    }

};


// ======================
// COLLEGE PREDICTOR
// ======================

function predictCollege(){

    const rank =
    parseInt(
        document.getElementById("rankInput").value
    );

    const category =
    document.getElementById("categoryInput").value;

    const branch =
    document.getElementById("branchInput").value;

    let colleges = [];

    if(rank <= 2500){

        colleges = [
            "CBIT",
            "VNR VJIET",
            "GRIET"
        ];

    }
    else if(rank <= 5000){

        colleges = [
            "GRIET",
            "BVRIT",
            "MGIT",
            "CVR"
        ];

    }
    else if(rank <= 10000){

        colleges = [
            "MGIT",
            "Geethanjali",
            "Anurag",
            "MREC"
        ];

    }
    else{

        colleges = [
            "MLRIT",
            "MREC",
            "Geethanjali"
        ];

    }

    document.getElementById(
        "predictionResult"
    ).innerHTML = `

    <div class="prediction-card">

        <h3>Prediction Result</h3>

        <p><strong>Rank:</strong> ${rank}</p>

        <p><strong>Category:</strong> ${category}</p>

        <p><strong>Branch:</strong> ${branch}</p>

        <br>

        <h4>Suggested Colleges</h4>

        <ul>
            ${colleges.map(college =>
                `<li>${college}</li>`
            ).join("")}
        </ul>

    </div>

    `;
}


// ======================
// VIEW DETAILS
// ======================

function searchCollege(){

    let input =
    document.getElementById("searchInput")
    .value
    .toLowerCase();

    let result =
    document.getElementById("result");

    let found = colleges.filter(college =>
        college.name.toLowerCase().includes(input)
    );

    if(found.length > 0){

        result.innerHTML = "";

        found.forEach(college => {

            result.innerHTML += `
            <div class="college-card">

                <h3>${college.name}</h3>

                <p><strong>Location:</strong>
                ${college.location}</p>

                <p><strong>Fees:</strong>
                ${college.fees}</p>

                <p><strong>Cutoff:</strong>
                ${college.cutoff}</p>

            </div>
            `;
        });

    }else{

        result.innerHTML =
        "<h3>No College Found</h3>";

    }

}
function openCollege(college){

    localStorage.setItem(
        "selectedCollege",
        college
    );

    window.location.href =
    "college-details.html";

}

// ===============================
// ADD TO COMPARE
// ===============================

function addToCompare(collegeId){

    const colleges = {

        griet:{
            name:"GRIET",
            location:"Hyderabad",
            fee:"₹1,30,000",
            package:"₹44 LPA",
            rating:"4.8"
        },

        cbit:{
            name:"CBIT",
            location:"Hyderabad",
            fee:"₹1,50,000",
            package:"₹52 LPA",
            rating:"4.9"
        },

        vnr:{
            name:"VNR VJIET",
            location:"Hyderabad",
            fee:"₹1,45,000",
            package:"₹51 LPA",
            rating:"4.8"
        },

        bvrit:{
            name:"BVRIT",
            location:"Hyderabad",
            fee:"₹1,35,000",
            package:"₹32 LPA",
            rating:"4.7"
        },

        mgit:{
    name:"Mahatma Gandhi Institute of Technology",
    location:"Hyderabad",
    fee:"₹1,25,000",
    package:"₹24 LPA",
    rating:"4.6"
},

cvr:{
    name:"CVR College of Engineering",
    location:"Hyderabad",
    fee:"₹1,40,000",
    package:"₹33 LPA",
    rating:"4.7"
},

    };

    let compare =
    JSON.parse(localStorage.getItem("compareColleges")) || [];

    // Already added?
    const exists =
    compare.some(item => item.name === colleges[collegeId].name);

    if(exists){

        alert("College already added to Compare.");

        return;

    }

    // Maximum 3 colleges

    if(compare.length >= 3){

        alert("You can compare only 3 colleges.");

        return;

    }

    compare.push(colleges[collegeId]);

    localStorage.setItem(

        "compareColleges",

        JSON.stringify(compare)

    );

    alert("College added for comparison.");

}

function toggleSaveCollege(collegeId){

const colleges={

griet:{
name:"GRIET",
location:"Hyderabad",
image:"griet.jpg"
},

cbit:{
name:"CBIT",
location:"Hyderabad",
image:"cbit.png"
},

vnr:{
name:"VNR VJIET",
location:"Hyderabad",
image:"vnr.png"
},

bvrit:{
name:"BVRIT",
location:"Hyderabad",
image:"bvrit.png"
},

mgit:{
name:"MGIT",
location:"Hyderabad",
image:"mgit.jpg"
},

cvr:{
name:"CVR",
location:"Hyderabad",
image:"cvr.jpg"
}

};

let saved=
JSON.parse(localStorage.getItem("savedColleges"))||[];

const index=saved.findIndex(item=>item.name===colleges[collegeId].name);

if(index==-1){

saved.push(colleges[collegeId]);

alert("College Saved ❤️");

}else{

saved.splice(index,1);

alert("College Removed ❤️");

}

localStorage.setItem("savedColleges",JSON.stringify(saved));

}