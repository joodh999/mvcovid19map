var mymap = L.map('mapid').setView([3.2028, 73.2207], 5);



L.tileLayer('https://api.maptiler.com/maps/darkmatter/{z}/{x}/{y}.png?key=SLLIVUkN3qzGV0OH5IaD', {
    maxZoom: 15,
    minZoom: 6,


    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
}).addTo(mymap);

mymap.fitBounds([
    [3.2028, 73.2207],
    [3.2028, 73.2207]
]);


let api = 'https://api.coronamv.live/v1/open/maldives';


fetch(api)
    .then((Response) => {
        return Response.json();
    })
    .then((data) => {
        let c = data['data']['cases'];
        let len = c.length;

        for (i = 0; i < len; i++) {
            let d = c[i];
            let n = d['name'];
            let lat = d['lat'];
            let log = d['long'];
            let a = d['active'];
            let f = d['confirmed'];
            let r = d['recovered'];



            if (a !== 0) {
                var circle = L.circle([lat, log], {
                    color: 'red',
                    fillColor: '#f03',
                    fillOpacity: 1,
                    radius: 5000
                }).addTo(mymap);

                circle.bindPopup(n + '<br>' + 'confirmed : ' + f + '<br>' + 'recovered : ' + r);

            } else {
                var circle = L.circle([lat, log], {
                    color: 'green',
                    fillColor: '#008000',
                    fillOpacity: 1,
                    radius: 5200
                }).addTo(mymap);

                circle.bindPopup(n + '<br>' + 'confirmed : ' + f + '<br>' + 'recovered : ' + r);
            }






        }

    })