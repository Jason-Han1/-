var uploadedDataURL = "/asset/get/s/data-1545202313337-zYXnvpxc4.json";

// var uploadedDataURL = "/asset/get/s/data-1545203419609-2nu6-7sFU.json";

// var uploadedDataURL = "/asset/get/s/data-1545202981279-LwA1FRrtY.json";
/**
此版本通过设置geoindex && seriesIndex: [1] 属性来实现geo和map共存，来达到hover散点和区域显示tooltip的效果

默认情况下，map series 会自己生成内部专用的 geo 组件。但是也可以用这个 geoIndex 指定一个 geo 组件。这样的话，map 和 其他 series（例如散点图）就可以共享一个 geo 组件了。并且，geo 组件的颜色也可以被这个 map series 控制，从而用 visualMap 来更改。
当设定了 geoIndex 后，series-map.map 属性，以及 series-map.itemStyle 等样式配置不再起作用，而是采用 geo 中的相应属性。

http://echarts.baidu.com/option.html#series-map.geoIndex

并且加了pin气泡图标以示数值大小
*/

myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('dalian', geoJson);
    myChart.hideLoading();

    var allData = {
        "citys": [{
            "name": "甘井子",
            "value": [121.64855, 38.983202,20],
            "symbolSize": 25
        }, {
            "name": "革镇堡街道",
            "value": [121.539085, 39.01541,20],
            "symbolSize": 20
        }, {
            "name": "甘井子街道",
            "value": [121.63855, 38.973202,20],
            "symbolSize": 15
        }, {
            "name": "周水子街道",
            "value": [121.587912, 38.963776,20],
            "symbolSize": 10
        }, {
            "name": "营城子街道",
            "value": [121.39958, 38.993063,20],
            "symbolSize": 8
        }, {
            "name": "辛寨子街道",
            "value": [121.496914, 38.983146,20],
            "symbolSize": 6
        }, {
            "name": "红旗街道",
            "value": [121.554134, 38.930041,20],
            "symbolSize": 1
        }, {
            "name": "大连湾街道",
            "value": [121.713963, 39.040674,20],
            "symbolSize": 2
        }, {
            "name": "南关岭街道",
            "value": [121.604106, 39.022726],
            "symbolSize": 3
        }, {
            "name": "椒金山街道",
            "value": [121.617448, 38.979161],
            "symbolSize": 4
        }, {
            "name": "中华路街道",
            "value": [121.585795, 38.990505],
            "symbolSize": 4
        }],
        "moveLines": [{
            "fromName": "甘井子",
            "toName": "甘井子街道",
            "coords": [
                [121.64855, 38.983202],
                [121.63855, 38.973202]
            ]
        },{
            "fromName": "甘井子",
            "toName": "周水子街道",
            "coords": [
                [121.64855, 38.983202],
                [121.587912, 38.963776]
            ]
        },{
            "fromName": "甘井子",
            "toName": "革镇堡街道",
            "coords": [
                [121.64855, 38.983202],
                [121.539085, 39.01541]
            ]
        },{
            "fromName": "甘井子",
            "toName": "营城子街道",
            "coords": [
                [121.64855, 38.983202],
                [121.39958, 38.993063]
            ]
        },{
            "fromName": "甘井子",
            "toName": "辛寨子街道",
            "coords": [
                [121.64855, 38.983202],
                [121.496914, 38.983146]
            ]
        },{
            "fromName": "甘井子",
            "toName": "红旗街道",
            "coords": [
                [121.64855, 38.983202],
                [121.554134, 38.930041]
            ]
        }
        ]
    };
     var allData1 = {
        "citys": [{
            "name": "甘井子",
            "value": [121.64855, 38.883202,20],
            "symbolSize": 50
        }, {
            "name": "兴华街道",
            "value": [121.585881, 38.977074],
            "symbolSize": 40
        }],
        "moveLines": [{
            "fromName": "甘井子",
            "toName": "革镇堡街道",
            "coords": [
                [121.64855, 38.883202],
                [121.585881, 38.977074]
            ]
        }]
    };
    var max = 480,
        min = 9; // todo 
    var maxSize4Pin = 100,
        minSize4Pin = 20;

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
    backgroundColor: '#404a59',
        title: {
            text: '大连市甘井子区组织机构分布',
            subtext: '',
            x: 'center',
            textStyle: {
                color: '#ccc'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                if (typeof(params.value)[2] == "undefined") {
                    return params.name;
                } else {
                    return params.name + ' : ' + params.value[2];
                }
            }
        },
        legend: {
            orient: 'vertical',
            y: 'bottom',
            x: 'right',
            data: ['党组织', '线路'],  
            selected: {  
                    '党组织' : true,  
                    '线路' : true,  
                    //不想显示的都设置成false  
            },
            textStyle: {
                color: '#0f0c29'
            }
        },
        visualMap: {
            show: false,
            min: 0,
            max: 500,
            left: 'left',
            top: 'bottom',
            calculable: true,
            seriesIndex: [1],
            inRange: {
                // color: ['#3B5077', '#031525'] // 蓝黑
                // color: ['#fb4f5e', '#fb4f5e'] // 红紫
                // color: ['#3C3B3F', '#605C3C'] // 黑绿
                // color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
                // color: ['#23074d', '#cc5333'] // 紫红
                color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#1488CC', '#2B32B2'] // 浅蓝
                // color: ['#00467F', '#A5CC82'] // 蓝绿

            }
        },
        // toolbox: {
        //     show: true,
        //     orient: 'vertical',
        //     left: 'right',
        //     top: 'center',
        //     feature: {
        //             dataView: {readOnly: false},
        //             restore: {},
        //             saveAsImage: {}
        //             }
        // },
        geo: {
            show: true,
            map: 'dalian',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false,
                }
            },
            roam: true,
            zoom: 6,
            center: [121.496914, 38.963146],
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor: '#404a59'
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            }
        },
        series: [{
            name: '党组织',
            // geoIndex: 0,
            type: 'effectScatter',
            legendHoverLink: true,
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                emphasis: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: function(val) {
                console.log('symbolSize-d:', val)
                return val;
            },
            showEffectOn: 'render',
            itemStyle: {
                normal: {
                    color: '#46bee9'
                }
            },
            data: allData.citys
        }, {
        name: '线路',
        type: 'lines',
        coordinateSystem: 'geo',
        zlevel: 2,
        large: true,
        effect: {
            show: true,
            constantSpeed: 120,
            symbol: 'pin',
            symbolSize: 5,
            trailLength: 0,
        },
        lineStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#58B3CC'
                }, {
                    offset: 1,
                    color: '#F58158'
                }], false),
                width: 1,
                opacity: 0.2,
                curveness: 0.1
            }
        },
        data: allData.moveLines
    }]
    };
    
    myChart.setOption(option);
//     setTimeout(function() {
          
//     // option.series[0].data.shift();
//     option.series[0].data.push({
//             "name": "兴华街道",
//             "value": [121.585881, 38.977074],
//             "symbolSize": 40
//         })
//     option.series[1].data.push({
//             "fromName": "甘井子",
//             "toName": "兴华街道",
//             "coords": [
//                 [121.64855, 38.983202],
//                 [121.585881, 38.977074]
//             ]
//         })
// myChart.setOption(option);
//     }, 3000);
});