
var gMap;



function initMap() {
    gMap = new google.maps.Map(document.getElementById("myMapID"), {
      center: { lat: 41.878, lng: 10 }, zoom: 3});
     //adding roatan marker, var marker dosnt work?
    var marker = new google.maps.Marker({position:{lat:16.3298,lng:-86.5300}, map:gMap});  

    // Add a second marking with a custom icon, an Info window, and a listener.
    var marker2 = new google.maps.Marker({position:{lat:41.8781,lng:-87.6298}, map:gMap});
    marker2.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');

    var infoWindow = new google.maps.InfoWindow({content:'Chicago, IL'});
    marker2.addListener('click', function() {
        infoWindow.open(gMap, marker2);
    });

    // used 'idle' as totorial recomended over bounds changed
    google.maps.event.addListener(gMap, 'idle', function() {
      updateGame()
  });
  function updateGame() {
    console.log('function UpdateGame()');
    var zoomLevel = gMap.getZoom()
    var inBounds = false;

    // Check if Roatan is in the currently displayed map
    if (gMap.getBounds().contains({lat:16.3298,lng:-86.5300})) {
        inBounds = true;
    }

    console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);
}


  }