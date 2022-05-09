var gmarkers = [];
var count = 1;
function smoothZoom (map, max, cnt,time) {
  if (cnt >= max) {
      return;
  }
  else {
      z = google.maps.event.addListener(map, 'zoom_changed', function(event){
          google.maps.event.removeListener(z);
          smoothZoom(map, max, cnt + 1);
      });
      setTimeout(function(){map.setZoom(cnt)}, time); // 80ms is what I found to work well on my system -- it might not work well on all systems
  }
}  
function myMap() {
  var phoneView = window.matchMedia("(max-width: 600px)");
  if (phoneView.matches)
    var mapProp = {
      center: new google.maps.LatLng(47.1668628845851, 27.55076468857391),
      zoom: 13,
      disableDefaultUI: true,

    };
  else
    var mapProp = {
      center: new google.maps.LatLng(47.1668628845851, 27.55076468857391),
      zoom: 13,
      mapTypeControl: false,
      streetViewControl: false,

    };


  const iasi = { lat: 47.151726, lng: 27.587914 };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

  function ReportButton(controlDiv, map) {
    // Set CSS for the control border.
    const controlUI = document.createElement("div");

    controlUI.style.backgroundColor = "#fff";
    controlUI.style.border = "2px solid #fff";
    controlUI.style.borderRadius = "3px";
    controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
    controlUI.style.cursor = "pointer";
    controlUI.style.marginTop = "8px";
    controlUI.style.marginBottom = "22px";
    controlUI.style.textAlign = "center";


    controlDiv.appendChild(controlUI);

    // Set CSS for the control interior.
    const controlText = document.createElement("div");

    controlText.style.color = "rgb(25,25,25)";
    controlText.style.fontFamily = "Roboto,Arial,sans-serif";
    controlText.style.fontSize = "16px";
    controlText.style.lineHeight = "38px";
    controlText.style.paddingLeft = "10px";
    controlText.style.paddingRight = "10px";
    controlText.innerHTML = "Report Trash";
    controlUI.appendChild(controlText);
    // Setup the click event listeners: simply set the map to Chicago.
    controlUI.addEventListener("click", () => {
      
    
      //map.setZoom(17);
      smoothZoom(map,17,map.getZoom(),300);
      
      //alert("A window should pop-up here with different report options");
      marker = new google.maps.Marker(
        {
          map: map,
          draggable: true,
          animation: google.maps.Animation.DROP,
          position: new google.maps.LatLng(47.1668628845851, 27.55076468857391)
        });
      map.setCenter(marker.getPosition());
      marker.setMap(map);
      gmarkers.push(marker);
      //alert(gmarkers[count].getPosition());
      //count++;
     

      google.maps.event.addListener(marker, 'dragend', function () {
          
       map.panTo(marker.getPosition());
       setTimeout(() => {openModal(marker,map)},600);
       // map.setCenter(marker.getPosition());
       
      });

     /* google.maps.event.addListener(marker, 'click', function () {
        // alert(marker.getPosition())
        openModal(marker,map);
      });
 */

      
    });
  }
  function CollectionPointsButton(controlDiv, map) {
    // Set CSS for the control border.
    const controlUI = document.createElement("div");

    controlUI.style.backgroundColor = "#fff";
    controlUI.style.border = "2px solid #fff";
    controlUI.style.borderRadius = "3px";
    controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
    controlUI.style.cursor = "pointer";
    controlUI.style.marginTop = "8px";
    controlUI.style.marginBottom = "22px";
    controlUI.style.textAlign = "center";


    controlDiv.appendChild(controlUI);

    // Set CSS for the control interior.
    const controlText = document.createElement("div");

    controlText.style.color = "rgb(25,25,25)";
    controlText.style.fontFamily = "Roboto,Arial,sans-serif";
    controlText.style.fontSize = "16px";
    controlText.style.lineHeight = "38px";
    controlText.style.paddingLeft = "10px";
    controlText.style.paddingRight = "10px";
    controlText.innerHTML = "Collection points";
    controlUI.appendChild(controlText);
    // Setup the click event listeners: simply set the map to Chicago.
    controlUI.addEventListener("click", () => {
      //alert("Collection points highlighted");
      const arr = new Array([47.1668628845851, 27.55076468857391],[47.16894897508787, 27.592929014288003],[47.1668628845851, 27.56676468857391],[47.1568628845851, 27.55076468857391],[47.16887603624273, 27.558189043127115]);
      drawColletionPoints(arr,map);



    });
  }
  function GenerateReportsButton(controlDiv, map) {
    // Set CSS for the control border.
    const controlUI = document.createElement("div");

    controlUI.style.backgroundColor = "#fff";
    controlUI.style.border = "2px solid #fff";
    controlUI.style.borderRadius = "3px";
    controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
    controlUI.style.cursor = "pointer";
    controlUI.style.marginTop = "8px";
    controlUI.style.marginBottom = "22px";
    controlUI.style.textAlign = "center";


    controlDiv.appendChild(controlUI);

    // Set CSS for the control interior.
    const controlText = document.createElement("div");

    controlText.style.color = "rgb(25,25,25)";
    controlText.style.fontFamily = "Roboto,Arial,sans-serif";
    controlText.style.fontSize = "16px";
    controlText.style.lineHeight = "38px";
    controlText.style.paddingLeft = "10px";
    controlText.style.paddingRight = "10px";
    controlText.innerHTML = "Generate Reports";
    controlUI.appendChild(controlText);
    // Setup the click event listeners: simply set the map to Chicago.
    controlUI.addEventListener("click", () => {
      alert("A window should pop-up here with the posibilities and options for generating the file with reports");
    });
  }


  const ReportTrashControlDiv = document.createElement("div");
  const CollectionPointsControlDiv = document.createElement("div");
  const GenerateReportsControlDiv = document.createElement("div");

  var test = ReportButton(ReportTrashControlDiv, map);
  CollectionPointsButton(CollectionPointsControlDiv, map);
  GenerateReportsButton(GenerateReportsControlDiv, map);


  map.controls[google.maps.ControlPosition.TOP_CENTER].push(ReportTrashControlDiv);
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(CollectionPointsControlDiv);
  map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(GenerateReportsControlDiv);

}

function drawColletionPoints(locationArr,map){
  function addInfoWindow(marker, message) {

    var infoWindow = new google.maps.InfoWindow({
        content: message
    });

    google.maps.event.addListener(marker, 'click', function () {
      
     
      
      map.panTo(marker.getPosition());
      
      infoWindow.open(map, marker);
      

    });
}
  for (var i = 0; i < locationArr.length; i++) {
    var myCoords = new google.maps.LatLng(locationArr[i][0], locationArr[i][1]);
    marker = new google.maps.Marker(
      {
        map: map,
        animation: google.maps.Animation.DROP,
        position: myCoords,
        icon: 'https://img.icons8.com/glyph-neue/34/000000/trash.png',
      });
      
   marker.setMap(map);
   addInfoWindow(marker,'<div id="content" style="width:auto; height:auto; background-color:white;">' +
   '<h3>Location</h3>' + 
   marker.getPosition() +
   '</div>');
    
  }


}