var uploadedDataURL = "/asset/get/s/data-1562767176398-0x3HU3MVj.geojson";

// var uploadedDataURL = "/asset/get/s/data-1562767120657-CpnGxbt0z.geojson";

// var uploadedDataURL = "/asset/get/s/data-1562766802952-fkJ1jS0tP.geojson";

// var uploadedDataURL = "/asset/get/s/data-1562766203615-ECGVJF2pp.geojson";

// var uploadedDataURL = "/asset/get/s/data-1562766052486-3ikAss5-S.geojson";

// var uploadedDataURL = "/asset/get/s/data-1562765829137-xFIRMgk-Y.geojson";




$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('baoshan', geoJson);
    // var convertData = function(data) {
    //     var res = [];
    //     for (var i = 0; i < data.length; i++) {
    //         var geoCoord = geoCoordMap[data[i].name];
    //         if (geoCoord) {
    //               res.push({
    //                 name: data[i].name,
    //                 value: geoCoord.concat(data[i].value)
    //             });
    //           }
    //       }
    //       return res;
    // };

    var option = {
        backgroundColor: '#fff',
        geo: {
            map: 'baoshan',

        },
        series: [{
            type: 'map',
            mapType: 'baoshan',
            data: []
        }]
    };
    myChart.setOption(option);
});