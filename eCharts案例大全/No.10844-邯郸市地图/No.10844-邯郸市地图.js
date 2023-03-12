var uploadedDataURL = "/asset/get/s/data-1562315633579-URoUzZMG-.json";

myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('handan', geoJson);
    myChart.hideLoading();
    var geoCoordMap = {
        '丛台区': [114.594703, 36.671082],
        '邯山区': [114.484989, 36.533196],
        '复兴区': [114.358242, 36.615484],
        '永年区': [114.496162, 36.776413],
        '武安市': [114.194581, 36.696115],
        '峰峰矿区': [114.209936, 36.420487],
        '大名县': [115.152586, 36.283316],
        '魏县': [114.93411, 36.354248],
        '广平县': [114.950859, 36.483603],
        '肥乡区': [114.805154, 36.555778],
        '曲周县': [114.957588, 36.773398],
        '邱县': [115.168584, 36.81325],
        '馆陶县': [115.289057, 36.539461],
        '涉县': [113.673297, 36.563143],
        '磁县': [114.38208, 36.367673],
        '成安县': [114.680356, 36.443832],
        '临漳县': [114.610703, 36.337604],
        '鸡泽县': [114.878517, 36.914908]
    }
    var data = [{
            name: '丛台区',
            value: 80
        },{
            name: '邯山区',
            value: 70
        }, {
            name: '复兴区',
            value: 75
        }, {
            name: '永年区',
            value: 80
        }, {
            name: '肥乡区',
            value: 78
        }, {
            name: '武安市',
            value: 77
        }, {
            name: '峰峰矿区',
            value: 79
        }, {
            name: '大名县',
            value: 85
        }, {
            name: '魏县',
            value: 81
        }, {
            name: '广平县',
            value: 83
        }, {
            name: '曲周县',
            value: 100
        }, {
            name: '邱县',
            value: 80
        }, {
            name: '馆陶县',
            value: 50
        }, {
            name: '涉县',
            value: 70
        }, {
            name: '磁县',
            value: 60
        }, {
            name: '成安县',
            value: 75
        }, {
            name: '临漳县',
            value: 85
        }, {
            name: '鸡泽县',
            value: 30
        }
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

    option = {
        backgroundColor: '#fff',
        title: {
            text: '邯郸市地图',
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
            min: 0,
            max: 200,
            text: ['高', '低'], // 文本，默认为数值文本
            textStyle: {
                color: '#fff'
            },
            inRange: {
                color: ['#04387b', '#467bc0']
            }
        },
        geo: {
            map: 'handan',
            left: '70',
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
            left: '50',
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
                    color: '#fff',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: 'yellow',
                    shadowBlur: 0,
                    shadowColor: 'yellow'
                }
            },
            zlevel: 1
        }, {
            type: 'map',
            mapType: 'handan',
            left: '70',
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
                    borderColor: '#000',
                    areaColor: '#000',
                }
            },
            data: data
        }]
    };
    myChart.setOption(option);
});