
let interviewCount = [];

let total = document.getElementById("total");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected");
let jobAvailable = document.getElementById("job-available");

const allBtn = document.getElementById("all-btn");
const interviewBtn = document.getElementById("interview-btn");
const rejectedBtn = document.getElementById("rejected-btn");

const allCardSection = document.getElementById("all-card");

// console.log(allCardSection.children.length);

const allCard = document.getElementById("all-card")
const mainContainer = document.querySelector('main')

function totalJobCount(){
    total.innerText = allCardSection.children.length;
    jobAvailable.innerText =allCardSection.children.length;
}

totalJobCount();

function toggleStyle(id){
    console.log(id)
}

mainContainer.addEventListener('click',
    function(event){

        console.log(event.target.parentNode.parentNode)
    }
)