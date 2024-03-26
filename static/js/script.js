	
    // Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
     
    // Dark Mode
    let darkmode = document.querySelector('#darkmode');
     
    darkmode.onclick = () => {
        if(darkmode.classList.contains('bx-moon')){
            darkmode.classList.replace('bx-moon','bx-sun');
            document.body.classList.add('active');
        }else{
            darkmode.classList.replace('bx-sun','bx-moon');
            document.body.classList.remove('active');
        }
    }
    
    // Define skills and experience data
const skillsData = [
    { skill: "HTML", percentage: 90 },
    { skill: "CSS", percentage: 80 },
    { skill: "JavaScript", percentage: 70 },
    { skill: "React", percentage: 60 },
    { skill: "Node.js", percentage: 50 }
];

const experienceData = [
    { company: "ABC Corp", role: "Software Engineer", duration: "2 years" },
    { company: "XYZ Inc", role: "Web Developer", duration: "1.5 years" },
];

// Function to display skills
function displaySkills() {
    const skillsContainer = document.getElementById("skills");
    skillsContainer.innerHTML = "<h2>Skills:</h2>";
    skillsData.forEach(skill => {
        skillsContainer.innerHTML += `
            <div class="skill">
                <p>${skill.skill}</p>
                <div class="progress-bar" style="width: ${skill.percentage}%;"></div>
            </div>
        `;
    });
    // Toggle display
    skillsContainer.style.display = (skillsContainer.style.display === 'none') ? 'block' : 'none';
}

// Function to display experience
function displayExperience() {
    const experienceContainer = document.getElementById("experience");
    experienceContainer.innerHTML = "<h2>Experience:</h2>";
    experienceData.forEach(exp => {
        experienceContainer.innerHTML += `<p>${exp.role} at ${exp.company} (${exp.duration})</p>`;
    });
    // Toggle display
    experienceContainer.style.display = (experienceContainer.style.display === 'none') ? 'block' : 'none';
}

// Event listeners
document.getElementById("showSkills").addEventListener("click", displaySkills);
document.getElementById("showExperience").addEventListener("click", displayExperience);
function toggleQR() {
    var qrImage = document.getElementById("qrImage");
    if (qrImage.classList.contains("small")) {
        qrImage.classList.remove("small");
        qrImage.classList.add("big");
    } else {
        qrImage.classList.remove("big");
        qrImage.classList.add("small");
    }

    var qrContainer = document.getElementById("qrContainer");
    if (qrContainer.style.display === "none") {
        qrContainer.style.display = "block";
    } else {
        qrContainer.style.display = "none";
    }
}