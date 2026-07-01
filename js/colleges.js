const colleges = [

{
key:"griet",
name:"Gokaraju Rangaraju Institute of Engineering and Technology (GRIET)",
location:"Hyderabad",
fee:"₹1,30,000",
cutoff:2500,
grade:"A++",
rating:"4.8 / 5",
highestPackage:"₹44 LPA",
averagePackage:"₹8 LPA",
placement:"95%",
image:"griet.jpg"
},

{
key:"cbit",
name:"Chaitanya Bharathi Institute of Technology (CBIT)",
location:"Hyderabad",
fee:"₹1,50,000",
cutoff:2200,
grade:"A++",
rating:"4.9 / 5",
highestPackage:"₹52 LPA",
averagePackage:"₹9 LPA",
placement:"96%",
image:"cbit.jpg"
},

{
key:"vnr",
name:"Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering and Technology (VNR VJIET)",
location:"Hyderabad",
fee:"₹1,45,000",
cutoff:3000,
grade:"A++",
rating:"4.8 / 5",
highestPackage:"₹51 LPA",
averagePackage:"₹8.5 LPA",
placement:"95%",
image:"vnr.jpg"
},

{
key:"bvrit",
name:"B V Raju Institute of Technology (BVRIT)",
location:"Hyderabad",
fee:"₹1,35,000",
cutoff:5000,
grade:"A+",
rating:"4.7 / 5",
highestPackage:"₹32 LPA",
averagePackage:"₹7 LPA",
placement:"92%",
image:"bvrit.jpg"
},

{
key:"mgit",
name:"Mahatma Gandhi Institute of Technology (MGIT)",
location:"Hyderabad",
fee:"₹1,25,000",
cutoff:7000,
grade:"A+",
rating:"4.6 / 5",
highestPackage:"₹24 LPA",
averagePackage:"₹6.5 LPA",
placement:"90%",
image:"mgit.jpg"
},

{
key:"cvr",
name:"CVR College of Engineering",
location:"Hyderabad",
fee:"₹1,40,000",
cutoff:8000,
grade:"A++",
rating:"4.7 / 5",
highestPackage:"₹33 LPA",
averagePackage:"₹7.5 LPA",
placement:"93%",
image:"cvr.jpg"
}

];

function openCollege(name){

localStorage.setItem("selectedCollege",name);

window.location.href="pages/college-details.html";

}