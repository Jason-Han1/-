option = {
    title: {
        text: '中国之声\n106.7MHz',
        top: 'center',
        left: 'left',
        textStyle: {
            //文字颜色
            color: '#ffffff',
            lineHeight: 20,
            //字体大小
            fontSize: 14
        },
        padding: [
            0, // 上
            0, // 右
            0, // 下
            10, // 左
        ]
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: function(params) {
            console.log(params);
            var res = '<div><p>' + params[2].name + " " + params[2].seriesName + '：' + params[2].value + 'HZ</p>' +
                '<p>' + params[3].name + " " + params[3].seriesName + '：' + params[3].value + 'HZ</p></div>'
            return res;
        }
    },
    grid: [{ //图形的位置
        left: '40%',
        bottom: '35%',
        height: '50%',
        width: '55%'
    }],
    yAxis: {
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    color: ['#00ae44', "#00ae44"],
    xAxis: {
        data: ['卫星信源', '网传信源', '发射接收'],
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0, //标签设置为全部显示
            textStyle: {
                fontSize: 8,
                color: "#ffffff"
            }
        }
    },
    series: [{
        name: '左边最大值',
        type: 'pictorialBar',
        barGap: '10%',
        label: {
            normal: {
                show: false
            }
        },
        symbolRepeat: true,
        symbolOffset: ['100%', 0],
        symbolSize: ['80%', '50%'],
        itemStyle: {
            normal: {
                color: '#ff0000'
            }
        },
        data: [{
            value: 70,
            symbol: 'reat'
        }, {
            value: 70,
            symbol: 'reat'
        }, {
            value: 70,
            symbol: 'reat'
        }],
        z: 10
    }, {
        name: '右边最大值',
        type: 'pictorialBar',
        barGap: '10%',
        label: {
            normal: {
                show: false
            }
        },
        symbolRepeat: true,
        symbolOffset: ['197%', 0],
        symbolSize: ['80%', '50%'],
        itemStyle: {
            normal: {
                color: '#ff0000'
            }
        },
        data: [{
            value: 70,
            symbol: 'reat'
        }, {
            value: 70,
            symbol: 'reat'
        }, {
            value: 70,
            symbol: 'reat'
        }],
        z: 10
    }, {
        name: '2015',
        type: 'pictorialBar',
        label: {
            normal: {
                show: false
            }
        },
        symbolRepeat: true,
        symbolOffset: ['-175%', 0],
        symbolSize: ['80%', '50%'],
        barCategoryGap: '40%',
        data: [{
            value: 50,
            symbol: 'reat'
        }, {
            value: 21,
            symbol: 'reat'
        }, {
            value: 50,
            symbol: 'reat'
        }],
        z: 11
    }, {
        name: '2016',
        type: 'pictorialBar',
        barGap: '10%',
        label: {
            normal: {
                show: false
            }
        },
        symbolRepeat: true,
        symbolOffset: ['-77%', 0],
        symbolSize: ['80%', '50%'],
        data: [{
            value: 60,
            symbol: 'reat'
        }, {
            value: 29,
            symbol: 'reat'
        }, {
            value: 48,
            symbol: 'reat'
        }],
        z: 11
    }]
};