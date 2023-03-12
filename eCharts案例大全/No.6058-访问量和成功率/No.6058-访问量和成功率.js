var visitData = {
    success: '98%',
    request: [2145, 3722, 3424, 5657, 2434, 737, 728, 3143, 356, 324, 4144, 3769, 2672, 2236, 1511, 737, 728, 429, 356, 324],
    session: [4144, 3769, 2672, 2236, 1511, 2345, 6345, 429, 356, 324, 4144, 3769, 2672, 2236, 1511, 737, 728, 429, 356, 324],
    times: ["21:170", "21:151", "23:96", "21:231", "21:170", "21:151", "20:96", "20:231", "21:166", "21:151", "21:142", "21:151", "23:96", "21:231", "21:170", "21:151", "5:96", "20:231", "21:166", "21:151"],
    unit: '（万次）'
}
option = {
    title: {
        text: "访问量和成功率",
        textStyle: {
            color: '#333',
            fontSize: '14',
            fontWeight: 'bold'
        },
        subtextStyle: {
            color: '#90979c',
            fontSize: '16'
        }
    },
    tooltip: {
        trigger: "axis",
        formatter: (params) => {
            if (params[0] && params[1]) {
                return `<div style="width:150px;height:100px;font-size: 12px;color: #fff">
                        <p>${params[0].axisValue}</p>
                        <p>${params[1].seriesName} ${params[1].data}</p>
                        <p>${params[0].seriesName} ${params[0].data}</p>
                    </div>`
            } else if (!params[1]) {
                return `<div style="width:150px;height:80px;font-size: 12px;color: #fff">
                    <p>${params[0].axisValue}</p>
                    <p>${params[0].seriesName} ${params[0].data}</p>
                </div>`
            }
        },
        axisPointer: {
            type: "shadow",
            textStyle: {
                color: "rgb(153, 153, 153)"
            }
        }
    },
    grid: {
        borderWidth: 0,
        top: 55,
        right: 20,
        bottom: 40,
        left: 40,
        textStyle: {
            color: "rgb(153, 153, 153)"
        }
    },
    legend: {
        // x: '32%',
        bottom: '0',
        textStyle: {
            color: 'rgb(153, 153, 153)',
        },
        data: ['访问量', '请求量']
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitArea: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: 'rgb(153, 153, 153)'
            }
        },
        axisLabel: {
            fontSize: 10
        },
        // boundaryGap: false,
        data: visitData.times
    }, {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        },
        data: visitData.times
    }],
    yAxis: {
        type: "value",
        name: '单位' + visitData.unit,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: 'rgb(153, 153, 153)'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0
        },
        splitArea: {
            show: false
        },
        splitNumber: 4
    },
    series: [{
        name: "请求量",
        type: "bar",
        itemStyle: {
            normal: {
                color: '#C91426',
                barBorderRadius: 0,
                label: {
                    show: false,
                    position: "top",
                    formatter: function(p) {
                        return p.value > 0 ? (p.value) : '';
                    }
                },
                borderWidth: 1,
                borderColor: 'rgb(45, 45, 45)'
            }
        },
        data: visitData.session
    }, {
        name: "访问量",
        type: "bar",
        xAxisIndex: 1,
        barGap: "10%",
        itemStyle: {
            normal: {
                color: '#3854CB',
                label: {
                    show: false,
                    textStyle: {
                        color: '#fff'
                    },
                    position: "insideTop",
                    formatter: function(p) {
                        return p.value > 0 ? (p.value) : '';
                    }
                },
                borderWidth: 1,
                borderColor: 'rgb(45, 45, 45)'
            }
        },
        data: visitData.request
    }]
}