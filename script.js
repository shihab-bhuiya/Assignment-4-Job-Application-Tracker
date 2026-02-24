
let interviewCount = [];

let total = document.getElementById("total");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected");
let jobAvailable = document.getElementById("job-available");

const allCardSection = document.getElementById("all-card");

console.log(allCardSection.children.length);

function totalJobCount(){
    total.innerText = allCardSection.children.length;
    jobAvailable.innerText =allCardSection.children.length;
}

totalJobCount();