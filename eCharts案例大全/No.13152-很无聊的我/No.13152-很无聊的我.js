var uploadedDataURL = "/asset/get/s/data-1536199082590-rJQ3F-RvQ.json";


var data = [{
    name: "虎纠",
    value: 22
}];
var mapdata = {
    "虎纠": [119, 25.5]
};

var showpoint = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var point = mapdata[data[i].name];
        if (point) {
            res.push({
                name: data[i].name,
                value: point.concat(data[i].value),

            });
        }

    }
    return res;

}



$.get(uploadedDataURL, function(geoJson) {

            echarts.registerMap('china', geoJson);

            option = {
                backgroundColor: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#7B68EE' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'blue' // 100% 处的颜色
                    }],
                },
                title: {
                    text: "很无聊的我",
                    subtext: "来自木可"

                },
                tooltip: {},
                geo: {
                    id: "china",
                    map: "china",
                    roam: true,
                    z: 1,
                    aspectScale: 0.75, //地图的长宽比
                    zoom: 0.9,
                    scaleLimit: {
                        min: 0.3,
                        max: 3
                    },
                    label: {
                        show: true
                    },
                    itemStyle: {
                        normal: {
                            areaColor: "#BBFFFF",
                            shadowColor: '#00BFFF',
                            shadowBlur: 30
                        },
                        emphasis: {
                            areaColor: "#BBFFFF",
                            shadowColor: '#00BFFF',
                            shadowBlur: 30
                        },

                    },
                    regions: [{
                        name: '北京',
                        itemStyle: {
                            areaColor: 'red',
                            color: 'red'
                        },
                        label: {
                            formatter: '首都'
                        }
                    }]

                },

                series: [{
                        type: "effectScatter",
                        z: 3,
                        id: "point",
                        name: "大都市",
                        coordinateSystem: 'geo',
                        data: showpoint(data),
                        symbol: "pin",
                        symbolSize: 20,
                        label: {
                            show: true
                        },
                        itemStyle: {
                            color: "green"
                        }
                    },
                    {
                        type: "lines",
                        coordinateSystem: 'geo',
                        z:5,
                        data: [{
                            fromName: "北京",
                            toName: "上海",
                            coords: [
                                [116.4551, 40.2539],
                                [121.4648, 31.2891],
                                
                            ]
                        },{
                             fromName: "北京",
                            toName: "甘肃",
                            coords: [
                                [116.4551, 40.2539],
                                [105, 35],
                                
                            ]
                        }],
                        symbol: "rect",
                        lineStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0,
                                    color: '#FFA500' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#FF7F00' // 100% 处的颜色
                                }],
                            },
                            width:2,
                            curveness:0.3


                        },
                        tooltip:{show:true},
                        label:{
                            show:false
                        }
                    }]




                };


                myChart.setOption(option)


            })