console.log('Map Mania js')

var gMap;
const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () =>{
  modal_container.classList.add('close');
});

close.addEventListener('click', () =>{
  modal_container.classList.remove('close');
});

function initMap() {

    gMap = new google.maps.Map(document.getElementById("myMapID"), {
      center: { lat: 41.878, lng: 10 }, zoom: 3});
    // again used 'idle' in place of bounds, note, removed marker dont think it is a requirment
    google.maps.event.addListener(gMap, 'idle', function() {
      updateLocation()
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
