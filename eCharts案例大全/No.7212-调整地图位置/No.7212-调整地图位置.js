// 主要引入调整后world.js文件
option = {
    backgroundColor: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#0f378f' 
        }],
        globalCoord: false 
    },
    title: {
        text: '',
        subtext: '',
        sublink: '',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item'
    },
    geo: {
        map: 'world',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#3a7fd5',
                borderColor: '#0a53e9',
                shadowColor: '#092f8f',
                shadowBlur: 20
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: [{
            name: 'pm2.5',
            type: 'scatter',
            coordinateSystem: 'geo',

            symbolSize: function(val) {
                return val[2] / 10;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#ddb926'
                }
            }
        },
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: [],
            symbolSize: function(val) {
                return val[2] / 10;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#f4e925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        }
    ]
};