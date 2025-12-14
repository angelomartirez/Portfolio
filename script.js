/* A. DARK MODE TOGGLE */
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

/* B. EDIT JOB TITLE */
const editJobBtn = document.getElementById("editJobBtn");
const jobTitle = document.getElementById("jobTitle");

editJobBtn.addEventListener("click", function () {
    let newTitle = prompt("Enter your new job title:");
    if (newTitle !== null && newTitle !== "") {
        jobTitle.textContent = newTitle;
    }
});

/* C. SHOW / HIDE SKILLS */
const toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
const skillsSection = document.getElementById("skillsSection");

toggleSkillsBtn.addEventListener("click", function () {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
        toggleSkillsBtn.textContent = "Hide Skills";
    } else {
        skillsSection.style.display = "none";
        toggleSkillsBtn.textContent = "Show Skills";
    }
});

/* D. LIVE CHARACTER COUNTER */
const msgBox = document.getElementById("msgBox");
const counter = document.getElementById("counter");

msgBox.addEventListener("keyup", function () {
    let remaining = 200 - msgBox.value.length;
    counter.textContent = remaining;
});

/* E. FORM VALIDATION */
function validateForm() {
    const name = document.getElementById("nameField").value.trim();
    const email = document.getElementById("emailField").value.trim();

    if (name === "" || email === "") {
        alert("Please fill in both Name and Email.");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}

/* F. DISPLAY TODAY'S DATE */
const dateDisplay = document.getElementById("dateDisplay");
const today = new Date();

dateDisplay.textContent = today.toDateString();

/* G. EXTRA FEATURE: GREETING BASED ON TIME */
const greeting = document.getElementById("greeting");
const hour = today.getHours();

if (hour < 12) {
    greeting.textContent = "Good Morning! ";
} else if (hour < 18) {
    greeting.textContent = "Good Afternoon! ";
} else {
    greeting.textContent = "Good Evening! ";
}