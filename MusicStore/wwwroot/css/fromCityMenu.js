var areas, cities, simplyCities;
areas = ["Asia", "Europe", "North America"];
cities = {
    "Asia": ["Beijing", "Shanghai", "Hangzhou", "Hong kong", "Taipei", "Tokoy", "Shenzhen"],
    "Europe": ["London", "Paris", "Roma", "Milan", "Frankfurd", "Midrid", "Amsterdam"],
    "North America": ["New York", "Montreal", "Washington", "Toronto", "Chicago", "Vancouver", "Los Angeles"]
}

simplyCities = {
    "Beijing": "Beijing(PK)",
    "Shanghai" :"Shanghai(SHA)"
}

var html = '';
var areaName, cityName;
for (var i = 0; i < areas.length; i++) {
    areaName = areas[i];
    html += '<label class="dropdown-item-text" style="background-color:aliceblue">' + areaName + '</label> <ul class="list-group list-group-horizontal">';
    for (var n = 0; n < cities.length; n++) {
        cityName = cities.areaName[n];
        html += '<li class="list-group-item" style="border:none;"><a href="#" class="list-group-item-action">' + cityName + '</a></li>';
    }
    html += '</ul>';
}

$('#fromCityMenu').append(html);
