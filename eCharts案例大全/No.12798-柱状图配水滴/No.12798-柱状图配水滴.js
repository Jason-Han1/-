// 颜色
var lightBlue = {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: 'rgba(41, 121, 255, 1)' // 0% 处的颜色
    }, {
        offset: 1,
        color: 'rgba(0, 192, 255, 1)' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
}
// 指定图表的配置项和数据
var option = {
    /*tooltip: {
        show: true
    },*/
  /*  tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },*/
    grid: {
        top: '20%',
        left: '5%',
        right: '5%',
        bottom: '15%',
    },
    xAxis: {
        data: ['朝阳经济\n上升比率', 'CBD经济\n上升比率', '奥运经济\n上升比率'],
        offset: 15,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            color: '#fff',
            fontSize: 18
        }
    },
    yAxis: {
        min: 0,
        max: 100,
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    series: [{
        type: 'bar',
        label: {
            show: true,
            position: 'insideBottom',
            textAlign: 'center',
            padding: 10,
            color: '#f60',
            fontSize: 24,
            formatter: '{c}%'
        },
        itemStyle: {
            color: lightBlue
        },
        barWidth: '40%',
        data: [23, 64, 85],
        z: 10
    }, {
        type: 'bar',
        barGap: '-100%',
        itemStyle: {
            color: {
                //image: 自定义自己的图片,
                repeat: 'repeat'
            },
            opacity: 0.05
        },
        barWidth: '40%',
        data: [100, 100, 100],
        z: 5
    }, {
        type: 'bar',
        barGap: '-100%',
        itemStyle: {
            color: '#536dfe',
            opacity: 0.2
        },
        barWidth: '40%',

        data: [100, 100, 100],
        z: 5
    }, {
        type: 'liquidFill',
        data: [1],
        radius: '20%',
        shape: 'pin',
        center: ['20%', '10%'],
        amplitude: 0,
        waveAnimation: false,
        outline: {
            show: false
        },
        backgroundStyle: {
            shadowColor: 'rgba(0, 0, 0, 0.4)',
            shadowBlur: 20
        },
        label: {
            normal: {
                position: ['38%', '40%'],
                formatter: function() {
                    return '23\n%';
                },
                textStyle: {
                    fontSize: 20,
                    color: '#D94854'
                }
            }
        }
    }, {
        type: 'liquidFill',
        data: [1],
        radius: '20%',
        shape: 'pin',
        center: ['50%', '10%'],
        amplitude: 0,
        waveAnimation: false,
        outline: {
            show: false
        },
        backgroundStyle: {
            shadowColor: 'rgba(0, 0, 0, 0.4)',
            shadowBlur: 20
        },
        label: {
            normal: {
                position: ['38%', '40%'],
                formatter: function() {
                    return '64\n%';
                },
                textStyle: {
                    fontSize: 20,
                    color: '#D94854'
                }
            }
        }
    }, {
        type: 'liquidFill',
        data: [1],
        radius: '20%',
        shape: 'pin',
        center: ['80%', '10%'],
        amplitude: 0,
        waveAnimation: false,
        outline: {
            show: false
        },
        backgroundStyle: {
            shadowColor: 'rgba(0, 0, 0,0.4)',
            shadowBlur: 20
        },
        label: {
            normal: {
                position: ['38%', '40%'],
                formatter: function() {
                    return '85\n%';
                },
                textStyle: {
                    fontSize: 20,
                    color: '#D94854'
                }
            }
        }
    }],
    backgroundColor: "rgba(39,226,171,0.8)",
};