var max = 100;
var min = 0;

areaValueData = [20, 50, 80, 40, 60, 95,74]
areaData = [{
    name: "电气设备",
    max: 100,
    num: 100,
    value:areaValueData[0]
}, {
    name: "变压器",
    max: 100,
    num: 100,
    value:areaValueData[1]
}, {
    name: "安全管理",
    max: 100,
    num: 100,
    value:areaValueData[2]
}, {
    name: "河道问题",
    max: 100,
    num: 100,
    value:areaValueData[3]
}, {
    name: "系统运维",
    max: 100,
    num: 100,
    value:areaValueData[4]
}, {
    name: "建筑物",
    max: 100,
    num: 100,
    value:areaValueData[5]
}, {
    name: "运行管护",
    max: 100,
    num: 100,
    value:areaValueData[6]
}]

option = {
    backgroundColor: '#0B3886',
    color: ['#00e4ff', '#8E42FF', '#FF6B6B', '#FF9B42', '#F0D418',  '#4346D3','#F7517F'],
   tooltip: {
    },
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
            z: 4,
        },
        {
            type: 'pie',
            startAngle: 0,
            data: areaData.map(item => {
                return {
                    name: item.name +" "+ item.value,
                    value: item.value
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