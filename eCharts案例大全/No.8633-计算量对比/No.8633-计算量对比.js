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
        text: '渲染耗时对比',
        x: 'center',
        top: "25",
        textStyle: {
            color: '#333',
            fontSize: 16
        }
    },
    xAxis: {
        data: ['5*5*5', '10*10*10', '15*15*15', '20*20*20'],
        name: "指标数量",
        nameTextStyle: {
            color: '#333',
            fontSize: '16'
        },
        position: 'bottom',
        nameLocation: 'end'
    },
    legend: {
        data: ['原方案', '优化后'],
        textStyle: {
            fontSize: '14',
            color: '#333'
        }
    },
    yAxis: [{
        type: 'log',
        name: "渲染耗时(ms)",
        nameTextStyle: {
            color: '#333',
            fontSize: '16'
        },
        minInterval: 20, //设置左侧Y轴最小刻度
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
        name: '原方案',
        type: 'line',
        title: '无worker',
        data: [26101, 212872],
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'bottom',
                     offset: [30, -10],
                    textStyle: {
                        color: '#c23531'
                    }
                }
            },
        },
    }, {
        type: 'line',
        title: '按需渲染',
        name: '优化后',
        data: [171, 224, 670, 1092],
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