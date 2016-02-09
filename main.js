var map;


function initMap() {
    var randomLng = (Math.random() * 361).toFixed(2) - 180;
    var randomLat = (Math.random() * 170).toFixed(2) - 85;
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: randomLat,
            lng: randomLng
        },
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });
}
setInterval(initMap(), 3000);
