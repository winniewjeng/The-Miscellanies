"use-strict";

console.log("poo.js says hello");

function initMap() {
    const Nottingham = { lat: 52.96, lng: -1.158 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: Nottingham,
    });

    const geocoder = new google.maps.Geocoder();
    const data_file = "http://localhost:8000/penalties.json";

    $.getJSON(data_file, function (data) {
        $.each(data, function (i) {
            const incident_location = data[i]["Street"] + "Nottingham, UK";

            if (i === 10) { return false; }

            geocoder.geocode({ 'address': incident_location }, function (results) {
                var emoji = "poo.png";
                if (data[i]["Contravention_Description"].toLowerCase() === "leaving litter") { emoji = "litter.png"; }
                const marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location,
                    animation: google.maps.Animation.DROP,
                    icon: emoji,
                    title: data[i]["Contravention_Description"],
                });
            });
        });
    });


}



