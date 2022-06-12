console.log('Map Mania js')

var gMap;

function initMap() {

    gMap = new google.maps.Map(document.getElementById("myMapID"), {
      center: { lat: 41.878, lng: 10 }, zoom: 3});
    // again used 'idle' in place of bounds, note, removed marker dont think it is a requirment
    google.maps.event.addListener(gMap, 'idle', function() {
      updateLocation()
      // should open modal on start?
      ('myModal').modal('show');
      
  });
}

function updateLocation() {
  console.log('function updateLocation()');
  var zoomLevel = gMap.getZoom()
  var inBounds = false;
  
  // Check if Vancouver is in the currently displayed map
  if (gMap.getBounds().contains({lat:49.2827,lng:-123.1207})) {
  inBounds = true;
  }
  
  console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);
  }    

  function cheatFunction() {
    document.getElementById("cheatMode").innerHTML = marker1 = new google.maps.Marker({position:{lat:49.2827,lng:-123.1207}, map:gMap});
    marker2.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');;
  }

  // modal window
  // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
