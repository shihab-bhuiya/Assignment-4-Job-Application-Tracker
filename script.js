let currentTab = "all";

const jobs = [
  {id:1, company:"TechNova Solutions", position:"Frontend Developer", location:"Remote", type:"Full-time", salary:"$80,000 - $100,000", description:"Develop responsive web applications using modern JavaScript frameworks.", status:"all"},
  {id:2, company:"BrightStack Labs", position:"Backend Developer", location:"USA", type:"Full-time", salary:"$95,000 - $120,000", description:"Design secure APIs and manage database systems for scalable applications.", status:"all"},
  {id:3, company:"CloudSphere", position:"DevOps Engineer", location:"Germany", type:"Full-time", salary:"$110,000 - $140,000", description:"Maintain CI/CD pipelines and manage cloud infrastructure.", status:"all"},
  {id:4, company:"PixelWorks", position:"UI/UX Designer", location:"Remote", type:"Contract", salary:"$50/hour", description:"Design user-focused digital interfaces and product experiences.", status:"all"},
  {id:5, company:"DataForge", position:"Data Analyst", location:"Canada", type:"Full-time", salary:"$75,000 - $95,000", description:"Analyze large datasets and generate business insights.", status:"all"},
  {id:6, company:"CyberEdge", position:"Security Engineer", location:"UK", type:"Full-time", salary:"$100,000 - $130,000", description:"Implement security best practices and monitor system vulnerabilities.", status:"all"},
  {id:7, company:"NextWave Tech", position:"Mobile App Developer", location:"Remote", type:"Full-time", salary:"$85,000 - $105,000", description:"Build cross-platform mobile apps with modern frameworks.", status:"all"},
  {id:8, company:"InnovateX", position:"Full Stack Developer", location:"Australia", type:"Full-time", salary:"$90,000 - $115,000", description:"Work on both frontend and backend of enterprise web systems.", status:"all"}
];




function renderJobs() {

  const container = document.getElementById("jobs-container");
  container.innerHTML = "";

  const filtered = jobs.filter(job => {
    if(currentTab === "all") return true;
    return job.status === currentTab;
  });

  document.getElementById("tab-count").innerText = filtered.length;

  if(filtered.length === 0){
    container.innerHTML = `
      <div class="col-span-full text-center bg-white p-12 rounded-xl shadow">
        <div class="text-5xl mb-4">📄</div>
        <h3 class="text-xl font-bold">No Jobs Available</h3>
        <p class="text-gray-500 mt-2">There are no jobs in this section yet.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(job => {

    const card = document.createElement("div");
    card.className = "bg-white p-6 rounded-xl shadow hover:shadow-lg transition";

    card.innerHTML = `
      <h3 class="text-lg font-bold">${job.company}</h3>
      <p class="font-semibold">${job.position}</p>
      <p class="text-sm text-gray-500 mb-2">
        ${job.location} • ${job.type} • ${job.salary}
      </p>
      <p class="text-sm mb-4">${job.description}</p>

      <div class="flex gap-2 flex-wrap">

        <button onclick="updateStatus(${job.id}, 'interview')" 
          class="btn btn-sm ${job.status==='interview'?'btn-success':''}">
          Interview
        </button>

        <button onclick="updateStatus(${job.id}, 'rejected')" 
          class="btn btn-sm ${job.status==='rejected'?'btn-error':''}">
          Rejected
        </button>

        <button onclick="deleteJob(${job.id})" 
          class="btn btn-sm btn-outline">
          Delete
        </button>

      </div>
    `;

    container.appendChild(card);
  });
}



function updateStatus(id, newStatus){

  const job = jobs.find(j => j.id === id);

  if(job.status === newStatus){
    job.status = "all";
  } else {
    job.status = newStatus;
  }

  updateDashboard();
  renderJobs();
}




function deleteJob(id){
  const index = jobs.findIndex(j => j.id === id);
  jobs.splice(index, 1);

  updateDashboard();
  renderJobs();
}




function updateDashboard(){
  document.getElementById("total").innerText = jobs.length;
  document.getElementById("interview").innerText =
    jobs.filter(j => j.status === "interview").length;

  document.getElementById("rejected").innerText =
    jobs.filter(j => j.status === "rejected").length;
}




function switchTab(tab){

  currentTab = tab;

  document.getElementById("all-tab").classList.remove("btn-primary");
  document.getElementById("interview-tab").classList.remove("btn-primary");
  document.getElementById("rejected-tab").classList.remove("btn-primary");

  document.getElementById(tab + "-tab").classList.add("btn-primary");

  renderJobs();
}




updateDashboard();
renderJobs();