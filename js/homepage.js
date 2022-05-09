function openModal(marker,map) {
    var xButton = document.getElementsByClassName("close")[0];
    var cancelButton = document.getElementById("cancel-button");
    var sendButton = document.getElementById("send-button");
    var modal = document.getElementById("myModal");
   /* function DeleteMarker() {
        //Find and remove the marker from the Array
        for (var i = 0; i < gmarkers.length; i++) {
            alert(gmarkers[i].getPosition());     
            if (gmarkers[i].getPosition() == marker.getPosition()) {
                //Remove the marker from Map   
                         
                gmarkers[i].setMap(null);
 
                //Remove the marker from array.
                gmarkers.splice(i, 1);
                return;
            }
        }
    };
    */
    function addInfoWindow(marker, message) {

        var infoWindow = new google.maps.InfoWindow({
            content: message
        });

        google.maps.event.addListener(marker, 'mouseover', function () {
            infoWindow.open(map, marker);
        });

        google.maps.event.addListener(marker, 'mouseout', function () {
            infoWindow.close();
        });


    }
    modal.style.display = "block";

    sendButton.onclick = function () {
        modal.style.display = "none";
        marker.setDraggable(false);
     //   marker.setClickable(false);
     var contentString = 
                '<div id="content" style="width:100px; height:100px; background-color:white;">' +
                'Report submitted at ' + 
                marker.getPosition() +
                '</div>';
     //  addInfoWindow(marker,String(marker.getPosition()));
     addInfoWindow(marker,contentString);
        
      }

    cancelButton.onclick = function () {
        modal.style.display = "none";
        marker.setMap(null);
        document.getElementById('location-coordinates').value = '';

    }

    xButton.onclick = function () {
        modal.style.display = "none";
        marker.setMap(null);
        document.getElementById('location-coordinates').value = '';

    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
        marker.setMap(null);
        document.getElementById('location-coordinates').value = '';
      }
    }

    document.getElementById('location-coordinates').value = marker.getPosition();
} 

