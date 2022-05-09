function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
    var body = document.body;
    var dashboardItems = document.getElementById("gridID");
    var piechart = document.getElementById("piechart");


    if (dashboardItems.style.display === "none") {
        dashboardItems.style.display = "";
        piechart.style.display="";
       
    } else {
        dashboardItems.style.display = "none";
        piechart.style.display="none";
    }

    if (body.style.overflowY !== "hidden") {
        body.style.overflowY = "hidden";
    }
    else {
        body.style.overflowY = "visible";
    }


}


function openModal() {
    var xButton = document.getElementsByClassName("close")[0];
    var cancelButton = document.getElementById("cancel-button");
    var sendButton = document.getElementById("send-button");
    var modal = document.getElementById("myModal");
    var textInput = document.getElementById("location-coordinates");
   
    modal.style.display = "block";

    sendButton.onclick = function () {
       
        insertRow(textInput.value);
        modal.style.display = "none";
        textInput.value='';
        
      }

    cancelButton.onclick = function () {
        modal.style.display = "none";
        textInput.value='';
    }

    xButton.onclick = function () {
        modal.style.display = "none";
        textInput.value='';
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
        textInput.value='';
      }
    }

} 

function openModal2() {
    var xButton = document.getElementsByClassName("close")[1];
    var cancelButton = document.getElementById("cancel-button2");
    var saveButton = document.getElementById("save-button");
    var modal = document.getElementById("myModal2");
    var textInput = document.getElementById("location-coordinates-report");
   
    modal.style.display = "block";

    saveButton.onclick = function () {
       
      
        modal.style.display = "none";
        textInput.value='';
        
      }

    cancelButton.onclick = function () {
        modal.style.display = "none";
        textInput.value='';
    }

    xButton.onclick = function () {
        modal.style.display = "none";
        textInput.value='';
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
        textInput.value='';
      }
    }

} 
function insertRow(textInput) {
   
    var tbodyRef = document.getElementById('collectionPointsTable').getElementsByTagName('tbody')[0];
    // Insert a row at the end of table
    var newRow = tbodyRef.insertRow();
    // Insert a cell at the end of the row
    var newCell = newRow.insertCell();
    
    // Append a text node to the cell
    var newText = document.createTextNode(textInput);
 
    newCell.appendChild(newText);
    var newCell = newRow.insertCell();
    var newCell = newRow.insertCell();
    newCell.innerHTML="<span onclick='deleteRow(this)'id='remove-button'close'>&times;</span>";
    
}

function deleteRow(x){
   var index = x.parentNode.parentNode.rowIndex;
   document.getElementById("collectionPointsTable").deleteRow(index);
}