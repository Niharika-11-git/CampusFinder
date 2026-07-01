// ===============================
// Compare Colleges
// ===============================

let compareColleges =
JSON.parse(localStorage.getItem("compareColleges")) || [];

const compareContainer =
document.getElementById("compareContainer");

function loadCompare() {

    if (!compareContainer) return;

    if (compareColleges.length === 0) {

        compareContainer.innerHTML = `

        <div class="empty-box">

            <h2>⚖ No Colleges Selected</h2>

            <p>

            Go to Dashboard and click
            <strong>Compare</strong> on any college.

            </p>

        </div>

        `;

        return;

    }

    let html = `

    <table class="compare-table">

    <tr>

    <th>Feature</th>

    `;

    compareColleges.forEach(college => {

        html += `

        <th>

        ${college.name}

        </th>

        `;

    });

    html += "</tr>";



    // Location

    html += "<tr><td><strong>Location</strong></td>";

    compareColleges.forEach(college => {

        html += `<td>${college.location}</td>`;

    });

    html += "</tr>";



    // Fee

    html += "<tr><td><strong>Annual Fee</strong></td>";

    compareColleges.forEach(college => {

        html += `<td>${college.fee}</td>`;

    });

    html += "</tr>";



    // Highest Package

    html += "<tr><td><strong>Highest Package</strong></td>";

    compareColleges.forEach(college => {

        html += `<td>${college.package}</td>`;

    });

    html += "</tr>";



    // Rating

    html += "<tr><td><strong>Rating</strong></td>";

    compareColleges.forEach(college => {

        html += `<td>${college.rating}</td>`;

    });

    html += "</tr>";



    // Remove Button

    html += "<tr><td><strong>Action</strong></td>";

    compareColleges.forEach((college,index)=>{

        html += `

        <td>

        <button onclick="removeCompare(${index})">

        ❌ Remove

        </button>

        </td>

        `;

    });

    html += "</tr>";



    html += "</table>";



    compareContainer.innerHTML = html;

}



function removeCompare(index){

    compareColleges.splice(index,1);

    localStorage.setItem(

        "compareColleges",

        JSON.stringify(compareColleges)

    );

    loadCompare();

}



function clearCompare(){

    localStorage.removeItem("compareColleges");

    compareColleges=[];

    loadCompare();

}



loadCompare();