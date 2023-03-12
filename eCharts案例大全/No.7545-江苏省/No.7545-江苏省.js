var jiangsu = '/asset/get/s/data-1482909823260-HkDtOJZBx.json';

var geoCoordMap = {
    '宿迁': [118.283, 33.933],
    '泰州': [119.904, 32.488],
    '常州': [119.948, 31.766],
    '连云港': [119.167, 34.599],
    '淮安': [119.136, 33.499],
    '徐州': [117.188, 34.263],
    '盐城': [120.13, 33.387],
    '扬州': [119.427, 32.386],
    '南通': [120.84, 32.016],
    '苏州': [120.612, 31.309],
    '镇江': [119.434, 32.202],
    '无锡': [120.288, 31.574],
    '南京': [118.769, 32.048]
};

echarts.extendsMap = function(id, opt) {
    // 实例
    var chart = this.init(document.getElementById(id));

    //初始配置
    var defaultOpt = {
        mapName: 'jiangsu', // 地图展示
        bgColor: '#404a59', // 画布背景色
        activeArea: [], // 区域高亮,同echarts配置项
        data: [],

    };
    //合并配置项
    if (opt) opt = this.util.extend(defaultOpt, opt);

    // 层级索引
    var name = [opt.mapName];
    var idx = 0;
    // 省份定位
    var pos = {
        leftPlus: 115,
        leftCur: 150,
        left: 80,
        top: 50
    };
    // style
    var style = {
        font: '18px "Microsoft YaHei", sans-serif',
        textColor: '#eee',
        lineColor: 'rgba(147, 235, 248, .8)'
    };

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

    var option = {
        backgroundColor: opt.bgColor,
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                console.log(params)
                // do some thing
                return params.name + ' ' + params.data.value[2]
            },
        },
        //标题
        graphic: [{
            type: 'group',
            left: pos.left,
            top: pos.top - 4,
            children: [{
                type: 'line',
                left: 0,
                top: -20,
                shape: {
                    x1: 0,
                    y1: 0,
                    x2: 60,
                    y2: 0
                },
                style: {
                    stroke: style.lineColor,
                }
            }, {
                type: 'line',
                left: 0,
                top: 20,
                shape: {
                    x1: 0,
                    y1: 0,
                    x2: 60,
                    y2: 0
                },
                style: {
                    stroke: style.lineColor,
                }
            }]
        }, {
            id: name[idx],
            type: 'group',
            left: pos.left + 2,
            top: pos.top,
            children: [{
                type: 'polyline',
                left: 80,
                top: -12,
                shape: {
                    points: [
                        [0, 0],
                        [8, 11],
                        [0, 22]
                    ]
                },
                style: {
                    stroke: 'transparent',
                    key: name[0]
                },
            }, {
                type: 'text',
                left: 0,
                top: 'middle',
                style: {
                    text: '江苏省',
                    textAlign: 'center',
                    fill: style.textColor,
                    font: style.font
                },
            }, {
                type: 'text',
                left: 0,
                top: 10,
                style: {
                    text: 'JIANGXI',
                    textAlign: 'center',
                    fill: style.textColor,
                    font: '12px "Microsoft YaHei", sans-serif',
                },
            }]
        }],
        geo: {
            map: opt.mapName,
            // roam: true,
            zoom: 1,
            // 城市名称
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            // 绘制城市边框和颜色
            itemStyle: {
                normal: {
                    borderColor: 'rgba(147, 235, 248, 1)',
                    borderWidth: 1,
                    areaColor: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(128, 217, 248, 1)',
                    // shadowColor: 'rgba(255, 255, 255, 1)',
                    shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10
                },
                emphasis: {
                    areaColor: '#389BB7',
                    borderWidth: 0
                }
            },
        },
        //绘制城市园点
        series: [{
            name: 'pm2.5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            // symbol: 'diamond',
            showEffectOn: 'render',
            symbolSize: function(val) {
                return val[2] / 3;
            },
            rippleEffect: {
                period: 15,
                scale: 6,
                brushType: 'fill'
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: 'rgba(255, 235, 59, .7)',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            data: convertData(opt.data)
        }]
    };
    chart.setOption(option);

    return chart;
};

$.getJSON(jiangsu, function(geoJson) {
    echarts.registerMap('江苏', geoJson);
    var myChart = echarts.extendsMap('chart-panel', {
        bgColor: '#154e90', // 画布背景色
        mapName: '江苏', // 地图名
        // 数据展示            	
        data: [{
            name: '南京',
            value: 67,
            level: 1
        }, {
            name: '扬州',
            value: 64,
            level: 2
        }, {
            name: '苏州',
            value: 50,
            level: 3
        }, {
            name: '南通',
            value: 23,
            level: 2
        }, {
            name: '常州',
            value: 64,
            level: 1
        }, {
            name: '宿迁',
            value: 43,
            level: 1
        }, {
            name: '泰州',
            value: 36,
            level: 1
        }, {
            name: '连云港',
            value: 35,
            level: 1
        }, {
            name: '淮安',
            value: 36,
            level: 1
        }, {
            name: '徐州',
            value: 79,
            level: 1
        }, {
            name: '盐城',
            value: 15,
            level: 1
        }, {
            name: '镇江',
            value: 59,
            level: 1
        }, {
            name: '无锡',
            value: 71,
            level: 1
        }]
    });
})