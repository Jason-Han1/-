var uploadedDataURL = "/asset/get/s/data-1583746126012-U68oV3t9.json";
// var uploadedDataURL = "/asset/get/s/data-1525844720391-Skugj-g0f.json";
myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('tianjin', geoJson);
    myChart.hideLoading();
    var geoCoordMap = {
        '和平': [117.2, 30],
        '河东': [117.22, 30],
        '河西': [117.22, 30],
        '南开': [117.15, 30],
        '河北': [117.18, 30],
        '红桥': [117.15, 30],
        '塘沽': [117.65, 30],
        '汉沽': [117.8, 30],
        '大港': [117.45, 30],
        '东丽': [117.3, 30],
        '西青': [117, 30],
        '津南': [117.38, 30],
        '北辰': [117.13, 30],
        '武清': [117.03, 30],
        '宝坻': [117.3, 30],
        '宁河': [117.82, 30],
        '静海': [116.92, 330],
        '蓟县': [117.4, 30],
    }
    var max = 480,
        min = 9;

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


    option = {
        backgroundColor: '#0F2848',
        legend: {
            show: false
        },
        visualMap: {
            show: false,
            min: 0,
            max: 500,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'], // 文本，默认为数值文本
            calculable: true,
            seriesIndex: [1],
            inRange: {
                color: ['#01D8FF', '#02D0E6']
            }
        },
        geo: {
            show: true,
            map: 'tianjin',
            label: {
                "show": true,
                "formatter": function(params) {
                    return "{a|" + params.name + "}\n{b|59}{d| / }{c|598}";
                },
                "textStyle": {
                    color: '#fff',
                    fontSize: 14,
                    rich: {
                        a: {
                            color: '#fff',
                            padding: [3, 0]
                        },
                        b: {
                            color: '#3DD6FF'
                        },
                        c: {
                            color: '#86F028'
                        },
                        d: {
                            color:'#fff'
                        }
                    }
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(0,136,241, 0)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(0,136,241, .4)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    borderColor: '#0088F1',
                    shadowColor: 'rgba(0,136,241, .4)',
                    shadowOffsetX: -4,
                    shadowOffsetY: 4,
                    shadowBlur: 10
                },
                emphasis: {
                    areaColor: '#02D0E6',
                }
            }
        },
        // series: [{
        //         name: '办理进度',
        //         type: 'scatter',
        //         coordinateSystem: 'geo',
        //         data: data,
        //         symbolSize: 1,
        //         zlevel: 1,
        //         label: {
        //             normal: {
        //                 show: true,
        //                 formatter: function(params) {
        //                     console.log(params)
        //                     return '{a|' + params.name + '}\n{b|' + params.value + '}/{c|' + params.value + '}';
        //                 },
        //                 position: 'inside',
        //                 backgroundColor: '#fff',
        //                 padding: [4, 5],
        //                 borderRadius: 3,
        //                 borderWidth: 1,
        //                 borderColor: 'rgba(0,0,0,0.5)',
        //                 color: '#777',
        //                 rich: {
        //                     a: {
        //                         color: '#fff',
        //                         padding: [3, 0]
        //                     },
        //                     b: {
        //                         color: '#3DD6FF'
        //                     },
        //                     c: {
        //                         color: '#86F028'
        //                     }
        //                 },
        //                 emphasis: {
        //                     show: true
        //                 }
        //             },
        //             itemStyle: {
        //                 normal: {
        //                     color: '#fff'
        //                 }
        //             }
        //         }

        //     }]
    };
    myChart.setOption(option);
});