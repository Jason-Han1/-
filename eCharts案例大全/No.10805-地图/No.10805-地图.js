var data2 = [{
        name: '西藏',
        value: 54
    }, {
        name: '广西',
        value: 9
    }, {
        name: '贵州',
        value: 14
    }, {
        name: '甘肃',
        value: 2
    }, {
        name: '北京',
        value: 11
    }, {
        name: '江苏',
        value: 15
    }]


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
let geoCoordMap = {
    '上海': [121.4648, 31.2891],
    '浙江': [119.5313, 29.8773],
    "江苏": [118.8062, 31.9208],
    '北京': [116.4551, 40.2539],
    "天津": [117.4219, 39.4189],
    "甘肃": [103.5901, 36.3043],
    "贵州": [106.6992, 26.7682],
    "广西": [108.479, 23.1152],
    "江西": [116.0046, 28.6633],
    "西藏": [91.11, 29.97],
};

var alirl = [
    [
        [103.5901, 36.3043],
        [108.479, 23.1152]
    ],
    [
        [116.4551, 40.2539],
        [108.479, 23.1152]
    ],
    [
        [116.4551, 40.2539],
        [91.11, 29.97]
    ],
    [
        [116.4551, 40.2539],
        [106.6992, 26.7682]
    ],
    [
        [108.479, 23.1152],
        [118.8062, 31.9208]
    ],
]
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
    // console.log(res)
    return res;
};
option = {
    backgroundColor: '#000',
    title: {
        text: '中国',
        x: 'left',
        top: "10",
        textStyle: {
            color: '#fff',
            fontSize: 14
        }
    },
    tooltip: {
        show: true,
        formatter: (params) => {
            let data = params.name + "<br/>" + "数量:" + params.value[2] + "<br/>" + "坐标:[" + params.value[0] + "," + params.value[1] + "]";
            return data;
        },
    },
    visualMap: [{
        show: false,
        type: 'continuous',
        seriesIndex: 0,
        text: ['bar3D'],
        calculable: true,
        max: 300,
        inRange: {
            color: ['#9ff32b', '#9ff32b'] //柱图配色
        }
    }, {
        show: false,
        type: 'continuous',
        seriesIndex: 1,
        text: ['scatter3D'],
        left: 'right',
        max: 100,
        calculable: true,
        inRange: {
            color: ['#0f0', 'blue', 'purple'] //气泡配色
        }
    }], 
    geo3D: {
        map: 'china',
        roam: true,
        itemStyle: {
            areaColor: '#364064', // 地图配色
            opacity: 1,
            borderWidth: 0.4,
            borderColor: '#9da8d4' // 地图边配色
        },
        label: {
            show: true,
            textStyle: {
                color: '#fff', //地图初始化区域字体颜色
                fontSize: 12,
                opacity: 1,
                backgroundColor: 'rgba(0,23,11,0)'
            },
        },
        emphasis: { //当鼠标放上去  地区区域是否显示名称
            itemStyle: {
                areaColor: '#323a57', // 鼠标移入地图配色
            },
            label: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 3,
                    backgroundColor: 'rgba(0,23,11,0)'
                }
            }
        },
        //shading: 'lambert',
        light: { //光照阴影
            main: {
                color: '#fff', //光照颜色
                intensity: 1.2, //光照强度
                //shadowQuality: 'high', //阴影亮度
                shadow: false, //是否显示阴影
                alpha: 60,
                beta: 60

            },
            ambient: {
                intensity: 0.3
            }
        }
    },
    series: [
        //柱状图
        {
            name: 'bar3D',
            type: "bar3D",
            coordinateSystem: 'geo3D',
            barSize: 1.5, //柱子粗细
            shading: 'lambert',
            opacity: 1,
            bevelSize: 0.3,
            label: {
                show: false,
                formatter: '{b}'
            },
            data: convertData([{
                name: "北京",
                value: (Math.random() * 300).toFixed(2)
            }, {
                name: "甘肃",
                value: (Math.random() * 300).toFixed(2)
            }, {
                name: "江苏",
                value: (Math.random() * 300).toFixed(2)
            }, {
                name: "贵州",
                value: (Math.random() * 300).toFixed(2)
            }, {
                name: "广西",
                value: (Math.random() * 300).toFixed(2)
            }, {
                name: "西藏",
                value: (Math.random() * 300).toFixed(2)
            }]),
        },


        {
            name: 'scatter3D',
            type: "scatter3D",
            coordinateSystem: 'geo3D',
            symbol: 'pin',
            symbolSize: 30,
            opacity: 1,
            // label: {
            //     show: true,
            //     formatter: '{b}'
            // },
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 19,
                    }
                }
            },
            itemStyle: {
                borderWidth: 0.5,
                borderColor: '#0f0',
                normal: {
                    color: '#f00', //标志颜色
                }
            },
            // data: convertData([ //气泡
            //     {
            //         name: "北京",
            //         value: ((Math.random() * 100) + 10).toFixed(12)
            //     },
            // ])
            zlevel: 6,//zlevel默认值是0，zlevel = -1，隐藏grid面板之下，会被坐标轴线切割
            data: convertData(data2)
        },


        //画线

        {
            type: 'lines3D',

            coordinateSystem: 'geo3D',

            effect: {
                show: true,
                period: 2, //箭头指向速度，值越小速度越快
                trailLength: 0.05, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: 'arrow', //箭头图标
                symbolSize: 5, //图标大小
            },

            blendMode: 'lighter',

            lineStyle: {
                width: 1.5,
                opacity: 0.5,
                normal: {
                    color: '#1deab7',
                    width: 2, //尾迹线条宽度
                    opacity: 1, //尾迹线条透明度
                    curveness: -0.3 //尾迹线条曲直度
                }
            },

            data: alirl
        },
    ]
};