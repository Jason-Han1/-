option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#000'
            }
        },
        formatter: (params) => {
            return `<div style="height:80px;font-size: 12px;">
                    <p>${params[0].axisValueLabel}</p>
                    <p>${params[0].seriesName} ${params[0].data}</p>
                </div>`
        },
        backgroundColor: 'rgba(255,255,255,1)',
        padding: 10,
        textStyle: {
            color: '#000',
        },
        extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
    },
    legend: {
        x: '46%',
        bottom: '0',
        textStyle: {
            color: '#333',
        },
        data: ['流量']
    },
    grid: {
        left: 60,
        right: 50,
        top: 60,
        bottom: 60,
    },
    xAxis: {
        type: 'category',
        data: [
            "2020-09-07 00:00:00",
            "2020-09-07 01:00:00",
            "2020-09-07 02:00:00",
            "2020-09-07 03:00:00",
            "2020-09-07 04:00:00",
            "2020-09-07 05:00:00",
            "2020-09-07 06:00:00",
            "2020-09-07 07:00:00",
            "2020-09-07 08:00:00",
            "2020-09-07 09:00:00",
            "2020-09-07 10:00:00",
            "2020-09-07 11:00:00",
            "2020-09-07 12:00:00",
            "2020-09-07 13:00:00",
            "2020-09-07 14:00:00",
            "2020-09-07 15:00:00",
            "2020-09-07 16:00:00",
            "2020-09-07 17:00:00",
        ],
        boundaryGap: true,
        splitLine: {
            show: false,

        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgb(82, 108, 255)'
            }
        },
        axisLabel: {
            // margin: 10,
            textStyle: {
                fontSize: 10
            }
        }
    },
    yAxis: {
        name: '单位' + '（百万次）',
        type: 'value',
        splitLine: {
            lineStyle: {
                color: ['#D4DFF5']
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgb(82, 108, 255)'
            }
        },
        axisLabel: {
            // margin: 10,
            textStyle: {
                fontSize: 14
            }
        }
    },
    series: [{
        name: '流量',
        type: 'bar',
        data: [33, 20, 30, 40, 50, 60, 55, 31, 48, 40, 60, 70, 60, 63, 55, 25, 33, 55],
        itemStyle: {
            normal: {
                color: 'rgb(82, 108, 255)'
            }
        }
    }]
}
