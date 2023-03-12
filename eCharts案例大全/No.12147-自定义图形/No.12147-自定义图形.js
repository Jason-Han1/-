var uploadedDataURL = "/asset/get/s/data-1549857685265-3NSSdauPT.json";

// var uploadedDataURL = "/asset/get/s/data-1549857627627-M5m00BwP8.json";

// var uploadedDataURL = "/asset/get/s/data-1549857627627-M5m00BwP8.json";

// var uploadedDataURL = "/asset/get/s/data-1522745440620-rktPlpgjz.json";

function showProvince1() {
    var name = 'cityName';
    $.get(uploadedDataURL, function(geoJson) {
        echarts.registerMap(name, geoJson);
        myChart.setOption(option = {
            visualMap: {
                min: 0,
                max: 0.5,
                dimension: 0,
                left: 'left',
                top: 'bottom',
                text: ['HIGH', 'LOW'], // 文本，默认为数值文本
                calculable: true,
            },
            series: [{
                type: 'map',
                mapType: name,
                data: [{
                        name: 'A区',
                        value: 0.279793634,
                    },
                    {
                        name: 'B区',
                        value: 0.191205703,
                    },
                    {
                        name: 'C区',
                        value: 0.27882565,
                    },
                    {
                        name: 'D区',
                        value: 0.197609541,
                    }
                ]
            }]
        });
    });
}
var currentIdx = 0;
showProvince1();