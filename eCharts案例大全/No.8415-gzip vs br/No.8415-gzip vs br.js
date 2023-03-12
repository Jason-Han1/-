option = {
    color: [
"#c23531",
"#3b8c13",
"#61a0a8",
"#d48265",
"#91c7ae",
"#749f83",
"#ca8622",
"#bda29a",
"#6e7074",
"#546570",
"#c4ccd3"
],
    title: {
        text: '压缩算法对比',
        x: 'center',
        top: "25",
        textStyle: {
            color: '#333',
            fontSize: 16
        }
    },
    xAxis: {
        data: ['gzip', 'br-L1', 'br-L3', 'br-L6'],
        name: "算法",
        
        nameTextStyle: {
            color: '#333',
            fontSize: '16'
        },
        axisLabel: {fontSize: 18},
        position: 'bottom',
        nameLocation: 'end'
    },
    legend: {
        data: ['请求耗时', '压缩比'],
        textStyle: {
            fontSize: '14',
            color: '#333'
        }
    },
    yAxis: [{
        type: 'value',
        name: "请求耗时(s)",
        nameTextStyle: {
            color: '#333',
            fontSize: '16'
        },
        max: 5.2,
        min: 4,
        minInterval: 0.2, //设置左侧Y轴最小刻度
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: 'rgba(135,140,147,0.8)'
            }
        }, //设置横线样式
        axisLabel: {
            textStyle: {
                fontSize: '14',
                color: '#333'
            }
        }
    }, {
        type: 'value',
        name: "压缩比",
        nameTextStyle: {
            color: '#333',
            fontSize: '16'
        },
        max: 0.97,
        min: 0.9,
        minInterval: 0.1, //设置左侧Y轴最小刻度
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: 'rgba(135,140,147,0.8)'
            }
        }, //设置横线样式
        axisLabel: {
            textStyle: {
                fontSize: '14',
                color: '#333'
            }
        },
    }],
    series: [{
        name: '请求耗时',
        type: 'bar',
        title: '无worker',
        data: [4.208, 4.808, 4.993, 4.27],
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'top',
                     offset: [30, -10],
                    textStyle: {
                        color: '#c23531'
                    }
                }
            },
        },
         barWidth: 52,
        
    }, {
        type: 'line',
        title: '压缩比',
        name: '压缩比',
        data: [0.92065,0.91411,0.94294,0.95849],
        yAxisIndex: 1,
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'top',
                     offset: [-30, 10],
                    textStyle: {
                        color: '#2f4554'
                    }
                }
            },
        },
    }]
};