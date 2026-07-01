// ================================
// COLLEGE DATA
// ================================

const college = localStorage.getItem("selectedCollege");

const data = {

griet:{
    name:"Gokaraju Rangaraju Institute of Engineering and Technology (GRIET)",
    location:"Hyderabad",
    fee:"₹1,30,000",
    package:"₹44 LPA",
    average:"₹8 LPA",
    rating:"4.8 / 5",
    grade:"A++",
    image:"griet.jpg"
},

cbit:{
    name:"Chaitanya Bharathi Institute of Technology (CBIT)",
    location:"Hyderabad",
    fee:"₹1,50,000",
    package:"₹52 LPA",
    average:"₹9 LPA",
    rating:"4.9 / 5",
    grade:"A++",
    image:"cbit.jpg"
},

vnr:{
    name:"Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering and Technology (VNR VJIET)",
    location:"Hyderabad",
    fee:"₹1,45,000",
    package:"₹51 LPA",
    average:"₹8.5 LPA",
    rating:"4.8 / 5",
    grade:"A++",
    image:"vnr.jpg"
},

bvrit:{
    name:"B V Raju Institute of Technology (BVRIT)",
    location:"Hyderabad",
    fee:"₹1,35,000",
    package:"₹32 LPA",
    average:"₹7 LPA",
    rating:"4.7 / 5",
    grade:"A+",
    image:"bvrit.jpg"
},

mgit:{
    name:"Mahatma Gandhi Institute of Technology (MGIT)",
    location:"Hyderabad",
    fee:"₹1,25,000",
    package:"₹24 LPA",
    average:"₹6.5 LPA",
    rating:"4.6 / 5",
    grade:"A+",
    image:"mgit.jpg"
},

cvr:{
    name:"CVR College of Engineering",
    location:"Hyderabad",
    fee:"₹1,40,000",
    package:"₹33 LPA",
    average:"₹7.5 LPA",
    rating:"4.7 / 5",
    grade:"A++",
    image: "cvr.jpg",
    
}

};
// ================================
// SHOW COLLEGE DETAILS
// ================================

if(data[college]){

document.getElementById("collegeName").innerText =
data[college].name;

document.getElementById("collegeImage").src =
"../images/colleges/" + college + ".jpg";

document.querySelector(".info-grid .info-card:nth-child(1) p").innerText =
data[college].location;

document.querySelector(".info-grid .info-card:nth-child(2) p").innerText =
data[college].grade;

document.querySelector(".info-grid .info-card:nth-child(3) p").innerText =
data[college].fee;

document.querySelector(".info-grid .info-card:nth-child(4) p").innerText =
data[college].rating;

document.querySelector("table tr:nth-child(2) td:nth-child(2)").innerText =
data[college].package;

document.querySelector("table tr:nth-child(3) td:nth-child(2)").innerText =
data[college].average;

}

// ================================
// SAVE / REMOVE COLLEGE
// ================================

function toggleSaveCollege(){

    const collegeKey =
    localStorage.getItem("selectedCollege");

    const college = {

        key: collegeKey,

        name: data[collegeKey].name,

        location: data[collegeKey].location,

        image: collegeKey + ".jpg"

    };

    let saved =
    JSON.parse(localStorage.getItem("savedColleges")) || [];

    const index =
    saved.findIndex(item => item.key === collegeKey);

    if(index === -1){

        saved.push(college);

    }else{

        saved.splice(index,1);

    }

    localStorage.setItem(
        "savedColleges",
        JSON.stringify(saved)
    );

    updateSaveButton();

}

function updateSaveButton(){

    const btn =
    document.getElementById("saveBtn");

    if(!btn) return;

    const collegeKey =
    localStorage.getItem("selectedCollege");

    let saved =
    JSON.parse(localStorage.getItem("savedColleges")) || [];

    const exists =
    saved.some(item => item.key === collegeKey);

    if(exists){

        btn.innerHTML = "🤍 Remove from Saved";

    }else{

        btn.innerHTML = "❤️ Save College";

    }

}