//var jiangsu = "/asset/get/s/data-1545717074162-HoS4KynOn.json";
var jiangsu = "/asset/get/s/data-1528969864934-BJ-qchkWQ.json";
// $(function() {
// var myChart = echarts.init(document.getElementById('echar'));
$.get(jiangsu, function(tjJson) {
    echarts.registerMap('jiangsu', tjJson);
    myChart.setOption({
        series: [{
            type: 'map',
            map: 'jiangsu'
        }]
    });

    var geoCoordMap = {
        '南京': [118.8062, 31.9208],
        '无锡': [120.3442, 31.5527],
        '徐州': [117.5208, 34.3268],
        '常州': [119.4543, 31.5582],
        '苏州': [120.6519, 31.3989],
        '南通': [121.1023, 32.1625],
        '连云港': [119.1248, 34.552],
        '淮安': [118.927, 33.4039],
        '盐城': [120.2234, 33.5577],
        '扬州': [119.4653, 32.8162],
        '镇江': [119.4763, 31.9702],
        '泰州': [120.0586, 32.5525],
        '宿迁': [118.5535, 33.7775],
    };

    var goData = [{
            name: '苏州',
            value: 32689
        },{
            name: '徐州',
            value: 24084
        },{
            name: '宿迁',
            value: 20878
        },{
            name: '扬州',
            value: 18907
        },{
            name: '淮安',
            value: 18755
        },{
            name: '常州',
            value: 18544
        },{
            name: '镇江',
            value: 17152
        },{
            name: '南通',
            value: 16921
        },{
            name: '无锡',
            value: 15592
        },
        {
            name: '盐城',
            value: 15189
        },
        {
            name: '连云港',
            value: 13950
        },{
            name: '泰州',
            value: 10870
        }
    ];
    var goTotal=0;//计算总人数
    goData.forEach(function(item,i){
        goTotal+=item.value;
    })
    //值控制圆点大小
    var backData = [{
        name: '常州',
        value: 75
    }, {
        name: '南通',
        value: 95
    }];

    var planePath = 'arrow';

    var convertData = function(name, data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var fromCoord = geoCoordMap[name];
            var toCoord = geoCoordMap[data[i].name];
            if (fromCoord && toCoord) {
                res.push({
                    //对换即可调整方向
                    coords: [fromCoord, toCoord]
                });
            }
        }
        return res;
    };
    var series = [];
    [
        ['南京', goData],
       // ['徐州', backData],

    ].forEach(function(item, i) {
        series.push({
            name: item[0],
            type: 'lines',
            zlevel: 2,
            //线特效配置
            effect: {
                show: true,
                period: 6,
                trailLength: 0.1,
                symbol: planePath, //标记类型
                symbolSize: 10
            },
            lineStyle: {
                normal: {
                    width: 1,
                    opacity: 0.4,
                    curveness: 0.2, //弧线角度
                    color: '#9B2428'
                }
            },
            data: convertData(item[0], item[1])
        }, {  //终点
            name: item[0],
            type: 'scatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            label: {
                normal: {
                    show: true,
                    color: '#9B2428',
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbol: 'circle',
            //圆点大小
            symbolSize: function(val) {
                return val[2]*100 / goTotal;
            },
            itemStyle: {
                normal: {
                    show: true
                }
            },
            data: item[1].map(function(dataItem) {
                console.log(dataItem)
                return {
                    name: dataItem.name,
                    value: geoCoordMap[dataItem.name].concat([dataItem.value])
                };
            })

        }, {//起点
            name: 'item[0]',
            type: 'scatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: function(val) {
                return 25;
            },
            symbol: 'circle',

            itemStyle: {
                normal: {
                    show: true
                }
            },
            data: [{
                name: item[0],
                value: geoCoordMap[item[0]].concat([100])
            }]

        })

    });


    option = {
        backgroundColor: '#FDF7F2',
        title: {
            text: '江苏迁徙',
            subtext: '',
            left: 'center',
            textStyle: {
                color: '#9B2428'
            }
        },
        legend: {
            orient: 'vertical',
            top: 'bottom',
            left: 'right',
            data: ['南京', '徐州'],
            textStyle: {
                color: '#9B2428'
            },
            selectedMode: 'single'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{b}"
        },
        //线颜色及飞行轨道颜色
        visualMap: {
            show: false,
            min: 0,
            max: 100,
            color: ['#9B2428']
        },
        //地图相关设置
        geo: {
            map: 'jiangsu',
            //视角缩放比例
            zoom: 1,
            //显示文本样式
            label: {
                normal: {
                    show: false,
                    textStyle: {
                        color: '#9B2428'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#9B2428'
                    }
                }
            },
            //鼠标缩放和平移
            roam: true,
            itemStyle: {
                normal: {
                    //          	color: '#ddd',
                    borderColor: '#D14424',
                    borderWidth: 1,
                    areaColor: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [{
                            offset: 0,
                            color: '#FDF0B8' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#FDF0B8' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: '#E9777B',
                    // shadowColor: 'rgba(255, 255, 255, 1)',
                    shadowOffsetX: -1,
                    shadowOffsetY: 1,
                    shadowBlur: 5
                },
                emphasis: {
                    areaColor: '#D55E2C',
                    borderWidth: 0
                }
            }
        },
        series: series
    };
    myChart.setOption(option);
})
// })