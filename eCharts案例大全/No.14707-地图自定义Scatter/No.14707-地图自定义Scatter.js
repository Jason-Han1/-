option = {
    backgroundColor: 'steelblue',
    geo: {
        map: 'china',
        label: {
            normal: {
                show: true,
                color: '#4ecfdd'
            }
        },
        roam: true,
        layoutCenter: ['30%', '30%'],
        itemStyle: {
            normal: {
                areaColor: '#0a2433',
                // color: {
                //     image: piePatternImg,
                //     repeat: 'repeat'
                // },
                borderColor: '#116a97',
                borderWidth: 1,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 0
            }
        }
    },
    series: [
        
        
        {
            name: '',
            type: 'lines',
            zlevel: 2,
            symbol: ['none', 'arrow'],
            symbolSize: 2,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: 'arrow',
                symbolSize: 25
            },
            lineStyle: {
                normal: {
                    color: '#d60098',
                    width: 1,
                    opacity: 0.6,
                    curveness: 0.2
                }
            },
            data: [{
                coords: [
                    [114.3896, 30.6628], //武汉坐标
                    [116.4551, 40.2539] //北京
                ]
            }, {
                coords: [
                    [114.3896, 30.6628], //武汉坐标
                    [121.4648, 31.2891] //上海

                ]
            }, {
                coords: [
                    [114.3896, 30.6628], //武汉坐标
                    [114.5435, 22.5439] //深圳
                ]
            }]
        },

        {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke',
                scale: 5
            },
            label: {
                normal: {
                    show: false,
                    position: 'right',
                    formatter: '{b}',
                    fontSize: 20,
                    color: '#f70089'
                }
            },
            symbolSize: 10,
            itemStyle: {
                normal: {
                    color: '#000',
                }
            },
            data: [{
                name: '上海',
                value: [121.4648, 31.2891, 100]
            }, {
                name: '北京',
                value: [116.4551, 40.2539, 200]
            }, {
                name: '深圳',
                value: [114.5435, 22.5439, 160]
            }]
        },



        {
            type: 'scatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            symbolSize: [140, 40],
            symbolOffset: ['45%', '-20%'],
            scaleLimit:{
                min:0,
                max:1
            },
            label: {
                normal: {
                    show: true,
                    formatter: function(d) {

                        return `{a|${d.value[2]}} {b|${d.name}}`;
                    },

                    rich: {
                        a: {
                            fontSize: 20,
                            height: 30,
                            padding: [-10, 0, 0, 0],
                            color: '#fff'
                        },
                        b: {
                            fontSize: 30,
                            color: '#fff'
                        }
                    },
                    color: '#fff',
                    zlevel: 10,
                    fontSize: 30,
                    position: [30, -6],
                }
            },
            data: [{
                name: '上海',
                value: [121.4648, 31.2891, 100]
            }, {
                name: '北京',
                value: [116.4551, 40.2539, 200]
            }, {
                name: '深圳',
                value: [114.5435, 22.5439, 160]
            }]
        }
    ]
}