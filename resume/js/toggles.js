document.getElementById("toggleDetails").addEventListener("click", function() {
    let details = document.querySelector(".details");
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
});

document.getElementById("toggleAbout").addEventListener("click", function() {
    let aboutDetails = document.getElementById("aboutDetails");
    
    if (aboutDetails.style.display === "none" || aboutDetails.style.display === "") {
        aboutDetails.style.display = "block";
    } else {
        aboutDetails.style.display = "none";
    }
});

document.getElementById("toggleSkills").addEventListener("click", function() {
    let skillsDetails = document.getElementById("skillsDetails");
    
    if (skillsDetails.style.display === "none" || skillsDetails.style.display === "") {
        skillsDetails.style.display = "block";
    } else {
        skillsDetails.style.display = "none";
    }
});

document.getElementById("toggleExperience").addEventListener("click", function() {
    let experienceDetails = document.getElementById("experienceDetails");
    
    if (experienceDetails.style.display === "none" || experienceDetails.style.display === "") {
        experienceDetails.style.display = "block";
    } else {
        experienceDetails.style.display = "none";
    }
});

document.getElementById("toggleEducation").addEventListener("click", function() {
    let educationDetails = document.getElementById("educationDetails");
    
    if (educationDetails.style.display === "none" || educationDetails.style.display === "") {
        educationDetails.style.display = "block";
    } else {
        educationDetails.style.display = "none";
    }
});

