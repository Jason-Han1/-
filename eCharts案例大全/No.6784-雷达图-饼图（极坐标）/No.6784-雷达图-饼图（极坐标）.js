var max = 100;
var min = 0;
areaData = [{
    name: "aa",
    max: 50,
    num: 35
}, {
    name: "bb",
    max: 50,
    num: 30
}, {
    name: "cc",
    max: 50,
    num: 40
}, {
    name: "dd",
    max: 50,
    num: 40
}, {
    name: "ee",
    max: 50,
    num: 50
}, {
    name: "ff",
    max: 75,
    num: 70
}]
areaValueData = [15, 20, 30, 40, 50, 65]
option = {
    backgroundColor: '#0B3886',
    color: ['#00e4ff', '#8E42FF', '#FF6B6B', '#FF9B42', '#F0D418', '#2E64FF'],
    tooltip: {},
    radar: {
        zlevel: 11,
        shape: 'circle',
        scale: true,
        indicator: areaData,
        center: ['50%', '50%'],
        radius: '40%',
        startAngle: 30,
        name: {
            show: true,
            color: 'transparent'
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(32,126,255, .5)',
                // opacity: 0.2
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(32,126,255, .5)',
                // opacity: 0.2
            }
        },
        splitArea: {
            areaStyle: {
                color: 'rgba(32,126,255, 0.1)',

            }
        },

    },
    polar: {
        radius: '40%',
    },
    angleAxis: {
        zlevel: 0,
        min: 0,
        max: 360,
        interval: 5,
        clockwise: false,
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    radiusAxis: {
        zlevel: 0,
        min: 0,
        max: 100,

        axisLabel: {
            textStyle: {
                color: 'rgba(29,208,240,.5)'
            }
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        splitArea: {
            show: false
        },
    },
    series: [{
            type: 'radar',
            data: [{
                value: areaValueData,
                name: '指数',
                max: 100,
                //   label:{
                //       show:true,
                //   },
                areaStyle: {
                    normal: {
                        color: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.5,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(32,126,255, 0.5)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(32,126,255, 0.1)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                }
            }],
            zlevel: 2,
            z: 4
        },
        {
            type: 'pie',
            startAngle: 0,
            data: areaData.map(item => {
                return {
                    name: item.name,
                    value: 1
                }
            }).reverse(),
            radius: ['45%', '60%'],
            zlevel: -1,
            name: '',
            itemStyle: {
                normal: {

                    // borderColor: 'white'
                }
            },
            label: {
                normal: {
                    position: 'top',
                    fontSize: '24',
                    color: '#fff',
                }
            }
        }
    ]
};