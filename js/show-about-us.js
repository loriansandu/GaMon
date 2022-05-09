const showAboutUs = document.getElementById("about-us-button");
showAboutUs.onclick = function () {
    const showContacts = document.getElementById("contacts-button");
    showContacts.style.color = "#818181";
    showAboutUs.style.color = "#04AA6D";
    const mainContentWrapperText = document.getElementById("main-content-wrapper-text");
    mainContentWrapperText.innerHTML = `<div id = "main-content-wrapper-text">  
            <h3>About us</h3>
            <div>GaMon is the newest product in terms of managing information on garbage collection, sorting and recycling - by categories: household, paper, plastic, etc. The application provides support for users to report places where a substantial amount of garbage has accumulated, in order to decongest. Also, per unit time (day, week, month), numerical and graphical reports can be generated - available in HTML, CSV and PDF formats - regarding the current situation at neighborhood / locality level, highlighting the cleanest/dirtiest areas.</div>
        </div>`;
}