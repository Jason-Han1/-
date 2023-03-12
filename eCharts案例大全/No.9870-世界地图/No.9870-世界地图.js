//var uploadedDataURL = "/asset/get/s/data-1573092836804-WsdgkOYn.json";

//var uploadedDataURL = "/asset/get/s/data-1571641181954-dOtXSMs6.json";

var uploadedDataURL = "/asset/get/s/data-1571640544601-AJmdXNje.json";

myChart.showLoading();
$.get(uploadedDataURL, function(world) {

    myChart.hideLoading();
    echarts.registerMap('world', world);

    var geoCoordMap = {
        '巴音郭楞蒙古': [88.1653, 39.6002]
    };

    var data = [{
        name: '巴音郭楞蒙古',
        value: 150,
    }];

    var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value),
                });
            }
        }
        // 有数据的地区的名称和value值
        return res;
    };


    option = {
        backgroundColor: "transparent",
        geo: {
            id: "bb",
            show: true,
            map: "world",
            roam: false,
            itemStyle: {
                normal: {
                    areaColor: ' #092240',
                    borderColor: ' #092240',
                },
                emphasis: {
                    areaColor: '#4499d0',
                }
            },
            bottom: 0,
          aspectScale: 0.6,
          zoom: 1.2

        },
        series: [{
            type: 'map',
            map: 'world',
            geoIndex: 0,
            roam: true,
            data: data
        }, {
            name: '定位点',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function(val) {
                return val[2] / 10;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#ffed00'
                }
            }
        }]
    }

    //myChart.setOption(option);

    //debugger

    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
    /*pie*/
    var op = myChart.getOption();
    var sd = option.series;
    
    sd.push({
        name: "123",
        type: 'pie',
        tooltip: {
            formatter: function(params) {
                return params.seriesName + "<br/>" + params.name + " : " + params.value;
            }
        },
        radius: [30,25],
        center: myChart.convertToPixel('geo', [88.1653, 39.6002]),
        data: [{
            name: "1",
            value: 1
        },{
            name: "2",
            value: 2
        },{
            name: "3",
            value: 3
        }],
        zlevel: 4,
        label: {
            normal: {
                show: false,
            },
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        itemStyle: {
            color:["red","green",""],
            mormal: {
                opacity: 0.2
            }
        }
    })
    /*bar*/
    // addBar(myChart,data);
    console.log("===========option=================");
    console.log(option);
    myChart.setOption(option, true);
    myChart.setOption(option);
})
