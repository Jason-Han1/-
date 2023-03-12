
var uploadedDataURL = "/asset/get/s/data-1559121640669-cC3-ztp_y.json";
myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('shanghai', geoJson);
    myChart.hideLoading();
    var geoCoordMap = {
        '上海市区': [121.430317, 31.222771],
           '闵行区': [121.375972, 31.111658],
        '宝山区': [121.489934, 31.398896],
        '嘉定区': [121.250333, 31.383524],
       '浦东新区': [121.567706, 31.245944],
        '金山区': [121.330736, 30.724697],
        '松江区': [121.223543, 31.03047],
        '青浦区': [121.113021, 31.151209],
        '奉贤区': [121.458472, 30.912345],
        '崇明区': [121.397516, 31.626946],
    }
    var data =  [
            {
                name: '上海市区',
                value: 85
            },
            {
                name: '闵行区',
                value: 70
            }, {
                name: '宝山区',
                value: 75
            }, {
                name: '嘉定区',
                value: 80
            }, {
                name: '浦东新区',
                value: 78
            }, {
                name: '金山区',
                value: 77
            }, {
                name: '松江区',
                value: 79
            }, {
                name: '青浦区',
                value: 85
            }, {
                name: '奉贤区',
                value: 81
            }, {
                name: '崇明区',
                value: 83
            }];

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
        backgroundColor: '#fff',
        title: {
            text: '上海市地图',
            subtext: '市区统称为市区',
            x: 'left',
            textStyle: {
                color: '#ccc'
            }
        },
        tooltip: {
            trigger: 'item',
            backgroundColor: '#09bdb1',
            borderColor: '#FFFFCC',
            showDelay: 0,
            hideDelay: 0,
            enterable: true,
            transitionDuration: 0,
            extraCssText: 'z-index:100',
            formatter: function(params, ticket, callback) {
                //根据业务自己拓展要显示的内容
                var res = "";
                var name = params.name;
                var value = params.value;
                res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
                return res;
            }
        },
        legend: {
            orient: 'vertical',
            top: 'top',
            left: 'right',
            data: ['credit_pm2.5'],
            textStyle: {
                color: '#fff'
            }
        },
        visualMap: { //颜色的设置  dataRange
                show: false,
                x: 'left',
                y: 'center',
                seriesIndex: [1],
                min: 70,
                max: 90,
                text: ['高', '低'], // 文本，默认为数值文本
                textStyle: {
                    color: '#fff'
                },
                inRange: {
                    color: ['#5cd2c3','#419bd3','#7a95d2','#5dcbdc','#838dcd','#5de9b1','#5dc6df','#5db8ea','#2bbc90','#5dc4e3']

                }
            },
        geo: {
           map: 'shanghai',
                left: '350',
                itemStyle: { //地图区域的多边形 图形样式
                    color: '#fff',
                    normal: { //是图形在默认状态下的样式
                        label: {
                            show: true, //是否显示标签
                            textStyle: {
                                color: '#ff0'
                            },
                        },

                        borderWidth: 1,
                        borderColor: 'rgba(37,124,169)',
                        shadowColor: '#e8e8e8',
                        shadowOffsetY: 15,
                        shadowOffsetX: 8,

                    },

                },
        },
        series: [{
                name: 'credit_pm2.5',
                type: 'effectScatter',
                left: '150',
                coordinateSystem: 'geo',
                data: convertData(data),
                symbolSize: function(val) {
                    return val[2] / 5;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'bottom',
                        color:'#fff',
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#10f9ff',
                        shadowBlur: 0,
                        shadowColor: '#05C3F9'
                    }
                },
                zlevel: 1
            }, {
                type: 'map',
                mapType: 'shanghai',
                left: '350',
                // zoom: 1.2,
                roam: false, //是否开启鼠标缩放和平移漫游
                itemStyle: { //地图区域的多边形 图形样式
                    // color: ['rgb(11,85,142)', 'rgb(13,106,177)'],
                    normal: { //是图形在默认状态下的样式
                        label: {
                            show: true, //是否显示标签
                            textStyle: {
                                color: 'transparent'
                            },
                        },
                        borderWidth: 1,
                        borderColor: '#28729f',
                        areaColor: '#29b4b7',
                    },
                    emphasis: { //是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                        label: {
                            show: false,
                            textStyle: {
                                color: 'transparent'
                            },
                        },
                        borderColor: '#28729f',
                        areaColor: '#9ea9f7',
                    }
                },

                data: data
            }
        ]
    };
    myChart.setOption(option);
});