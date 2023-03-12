option = {
    backgroundColor:'#fff',
    tooltip: {
        show: "true",
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: function(params) {
            let res = '';
            params.forEach((v, i) => {
                if (i <= 2) {
                    res += `<div>${v.marker} ${ v.seriesName }：${v.data}</div>`
                }
            })
            return res;
        }
    },
    yAxis: [{
        type: "value",
        name: '',
        splitNumber: 6,
        axisLabel: {
            textStyle: {
                color: "#333"
            }
        },
        nameTextStyle: {
            color: "#fff",
            fontSize: 12
        },
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: "#e9e9e9"
            }
        },
        axisTick: {
            show: false
        }
    }],
    xAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#e9e9e9',
            }
        },
        axisLabel: {
            inside: false,
            textStyle: {
                color: '#333',
                fontWeight: 'normal',
                fontSize: 12,
            }
        },
        data: ['09-21', '09-22', '09-23']
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
        data: ['09-21', '09-22', '09-23']
    }],
    series: [{
            type: 'bar',
            xAxisIndex: 1,
            zlevel: 1,
            itemStyle: {
                normal: {
                    color: '#fff3d9'
                }
            },
            barWidth: 20,
            data: [30, 30, 30]
        }, {
            type: 'bar',
            xAxisIndex: 1,
            barGap: '50%',
            data: [30, 30, 30],
            zlevel: 1,
            barWidth: 20,
            itemStyle: {
                normal: {
                    color: '#ffead9'
                }
            },
        }, {
            type: 'bar',
            xAxisIndex: 1,
            barGap: '50%',
            data: [30, 30, 30],
            zlevel: 1,
            barWidth: 20,
            itemStyle: {
                normal: {
                    color: '#fee4e5'
                }
            },
        }, {
            name: '缺勤人数',
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,
                    color: '#ffb310',
                }
            },
            zlevel: 2,
            barWidth: 20,
            data: [8, 15, 10]
        }, {
            name: '旷课人数',
            type: 'bar',
            barWidth: 20,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#ff7611',
                }
            },
            zlevel: 2,
            barGap: '50%',
            data: [22, 17, 24]
        }, {
            name: 'SOS报警人数',
            type: 'bar',
            barWidth: 20,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#f55555',
                }
            },
            zlevel: 2,
            barGap: '50%',
            data: [16, 17, 26]
        }

    ]
};