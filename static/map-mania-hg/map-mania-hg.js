console.log('Map Mania js')

var gMap;



function initMap() {
    gMap = new google.maps.Map(document.getElementById("myMapID"), {
      center: { lat: 41.878, lng: 10 }, zoom: 3});
    }