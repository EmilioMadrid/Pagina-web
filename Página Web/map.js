function initMap() {
    // Coordenadas y opciones iniciales del mapa
    var cdmx = { lat: 19.4326, lng: -99.1332 };
    var monterrey = { lat: 25.6866, lng: -100.3161 };
    var guadalajara = { lat: 20.6597, lng: -103.3496 };
    var mapOptions = {
      center: cdmx,
      zoom: 6
    };
    
    // Crea el mapa y muestra en el contenedor con el ID "map"
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  
    // Agrega marcadores para las sucursales
    var marker1 = new google.maps.Marker({
      position: cdmx,
      map: map,
      title: "CDMX"
    });
  
    var marker2 = new google.maps.Marker({
      position: monterrey,
      map: map,
      title: "Monterrey"
    });
  
    var marker3 = new google.maps.Marker({
      position: guadalajara,
      map: map,
      title: "Guadalajara"
    });

  }
  