
var gMap;



function initMap() {
    gMap = new google.maps.Map(document.getElementById("myMapID"), {
      center: { lat: 41.878, lng: 10 }, zoom: 3});

     //adding roatan marker, var marker dosnt work?
     
    var marker = new google.maps.Marker({postion:{lat:16.3298,lng:-86.5300}, map: gMap});

    
     
  }
  



function initApplication(){
    console.log('map mania lite - starting!')
}