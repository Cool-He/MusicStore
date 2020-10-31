var areas, cities, simplyCities;
        areas = [];
        cities = {};
        var areadbName = "";
        var currentAreaName = "";
         @foreach (var item in Model)
         {

             @:currentAreaName = "@item.AreaName";

             @:if (areadbName != currentAreaName) { areas.push(currentAreaName);}


             @:areadbName = currentAreaName;



         }
        //$('#fromCity').val(areas.length).change();
        var html = "";
        for (i = 0; i < areas.length; i++) {
            html += '<label class="dropdown-item-text" style="background-color:aliceblue">' + areas[i] + '</label> <ul class="list-group list-group-horizontal">';
            @foreach(var item in Model)
            {
                @:if (areas[i] == "@item.AreaName") { html += '<li class="list-group-item" style="border:none;"><a href="#" class="list-group-item-action">' + "@item.CityName" + '</a></li>';}
            }
            html += '</ul>';
        }
        $('#fromCityMenu').append(html);