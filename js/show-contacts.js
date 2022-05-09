const showContacts = document.getElementById("contacts-button");
showContacts.onclick = function () {
    const showAboutUs = document.getElementById("about-us-button");
    showAboutUs.style.color = "#818181";
    showContacts.style.color = "#04AA6D";
    const mainContentWrapperText = document.getElementById("main-content-wrapper-text");
    mainContentWrapperText.innerHTML = `<div id = "main-content-wrapper-text">
            <h3>Contact us at</h3>
            <div>mihneavlaiduc@yahoo.com</div>
            <div>loriansandu@gmail.com</div>
        </div>`;
}