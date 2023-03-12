option = {
    title: {
        text: '生态环保违法案件'
    },
    backgroundColor: "rgba(128, 128, 128, 0.0)",
    tooltip: {
        trigger: 'axis'
    },
    toolbox: {
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    grid: {
        //containLabel: true
    },
    legend: {
        data: ['违法案件', '罚款金额']
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            alignWithLabel: true
        },
        data: ['1月', '2月', '3月', '4月', '5月','6月', '7月', '8月', '9月', '10月', '11月', '12月']
    }],
    yAxis: [{
        type: 'value',
        name: '违法案件(个)',
        min: 0,
        max: 25,
        position: 'right',
        axisLabel: {
            formatter: '{value}'
        },
        axisLine: {
            lineStyle: {
                color: "#759aa0"
            }
        }
    }, {
        type: 'value',
        name: '罚款金额(万)',
        min: 0,
        max: 35,
        position: 'left',
        axisLine: {
            lineStyle: {
                color: "#c23531"
            }
        }

    }],
    series: [{
        name: '罚款金额',
        type: 'line',
        yAxisIndex: 1,
        //stack: '总量',
        label: {
            normal: {
                show: true,
                position: 'top',
            }
        },
        lineStyle: {
            normal: {
                width: 3,
                shadowColor: 'rgba(0,0,0,0.4)',
                shadowBlur: 10,
                shadowOffsetY: 10
            }
        },
        data: [32.5,20,18.5,28.8,17,16,21,10.3,12.2,14,12,8],
        itemStyle: {
            normal: {
                color: "#c23531"
            }
        }
    }, {
        name: '违法案件',
        type: 'line',
        //barWidth:"20%",
        yAxisIndex: 0,
        //stack: '总量',
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        data: [12,10,8,11,8,7,9,4,5,7,6,4],
        itemStyle: {
            normal: {
                color: "#759aa0"
            }
        }
    }]
};