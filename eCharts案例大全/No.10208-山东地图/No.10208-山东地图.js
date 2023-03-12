
var chinaDataURL = "/asset/get/s/data-1482909892121-BJ3auk-Se.json";
 var geoCoordMap = {
        '济南市':[117.121225,36.66466],
        '菏泽市':[115.480656,35.23375],
        '济宁市':[116.59,35.38],
         '德州市':[116.39,37.45],
         '聊城市':[115.97,36.45],
       '泰安市':[117.13,36.18],
        '临沂市':[118.35,35.05],
        '淄博市':[118.05,36.78],
       '枣庄市':[117.57,34.86],
         '滨州市':[118.03,37.36],
        '潍坊市':[119.1,36.62],
         '东营市':[118.49,37.46],
         '青岛市':[120.3,36.62],
         '烟台市':[120.9,37.32],
         '威海市':[122.1,37.2],
         '日照市':[119.1,35.62],
         '济宁市':[116.7,35.42],
         '莱芜市':[117.70,36.28],
    }

  var data = [
        {name: '济南市', value: 390},
        {name: '菏泽市', value: 158},
        {name: '德州市', value: 252},
        {name: '聊城市', value: 99},
        {name: '泰安市', value: 189},
        {name: '临沂市', value: 52},
        {name: '淄博市', value: 158},
        {name: '枣庄市', value: 152},
        {name: '滨州市', value: 189},
        {name: '潍坊市', value: 160},
        {name: '东营市', value: 80},
        {name: '青岛市', value: 180},
        {name: '烟台市', value: 190},
        {name: '威海市', value: 290},
        {name: '日照市', value: 190},
        {name: '济宁市', value: 190},
        {name: '莱芜市', value: 290},
    ];


var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};


$.getJSON(chinaDataURL, function(geoJson) {
    echarts.registerMap('shandong', geoJson)

    option = {
        backgroundColor: '#030303',
        title: {
            text: '全国主要城市空气质量',
            subtext: 'data from PM25.in',
            sublink: 'http://www.pm25.in',
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                return params.name + ' : ' + params.value[2];
            }
        },
       
        // visualMap: {
        //     min: 0,
        //     max: 200,
        //     left: 20,
        //     bottom: 20,
        //     calculable: false,
        //     text: ['高', '低'],
        //     inRange: {
        //         color: ['rgb(70, 240, 252)']
        //     },
        //     textStyle: {
        //         color: '#fff'
        //     }
        // },
      
        geo: {
            
            map: 'shandong',
            label: {
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    areaColor: 'rgb(32,54,107)',
                    borderColor: 'rgb(65,222,237)'
                },
                emphasis: {
                    areaColor: 'rgb(10, 105, 187)'
                }
            }
        },
        series: [ {
            name: 'light',
            type: 'scatter',
            symbolSize: 1,
            coordinateSystem: 'geo',
            data: convertData(data),
            label: {
                normal: {
                    formatter: '{b}',
                    fontSize: 14,
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                        normal: {
                            color: '#ccc',
                            areaColor: 'transparent',
                            borderColor: 'transparent',
                            label: {
                                show: true,
                                textStyle: {
                                    color: "rgb(65,222,237)",
                                    fontSize: 16
                                }
                            }
                        },
                    }
        },


          
        ]
    }

    myChart.setOption(option);

})