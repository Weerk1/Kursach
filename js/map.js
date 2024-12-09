function initMap() {
            const location = { lat: 50.00375115363223, lng: 36.246953446633604 };
            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 15,
                center: location,
            });
            new google.maps.Marker({
                position: location,
                map: map,
            });
        }

        window.onload = initMap;