let marker, map;

function initMap() {
    console.log("Inicializando mapa")
    const posicion_ctes = {
        lat: -27.46667,
        lng: -58.83333
    }
    const posicion_mendoza = {
        lat: -33.01667,
        lng: -69.11667
    }
    const posicion_iguazu = {
        lat: -25.59912,
        lng: -54.57355
    }


    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: posicion_ctes
    })

    marker = new google.maps.Marker({
        position: posicion_ctes,
        map,
        title: "Corrientes"
    })
    marker2 = new google.maps.Marker({
        position: posicion_mendoza,
        map,
        title: "Cacheuta!!!"
    })
    marker3 = new google.maps.Marker({
        position: posicion_iguazu,
        map,
        title: "Iguazu!!!"
    })
    // Obtener la geolocalización
    // marker.setPosition({ lat, lng })
    
    geoPosiciona()
}

function geoPosiciona() {
    if (navigator.geolocation) {
        const geoLoc = navigator.geolocation
        const options = { timeout: 60000 }
        const watchPos = geoLoc.watchPosition(centraMapa, onError, options)
    } else {
        alert("Tu navegador no admite la funcion de geolocalización")
    }
}

function centraMapa(position) {
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    marker.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
}

function onError(error) {
    console.log("Se ha producido un error !!!")
    console.error(error)
}

window.initMap = initMap;