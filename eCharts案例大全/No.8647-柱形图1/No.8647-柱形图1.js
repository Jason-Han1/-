let emptyColor = '#2C3136';
bgColor = 'rgba(19,22,24,1)';

option = {
    backgroundColor: bgColor,
    legend: {
        top: 20,
        itemWidth: 14,
        itemHeight: 14,
        itemGap: 30,
        textStyle: {
            color: '#fff',
            fontSize: 12
        },
        data: ['咨询', '申请', '取消']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: 20,
        containLabel: true
    },
    tooltip: {
        show: "true",
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter:function(params){
            let res = '';
            params.forEach((v,i) => {
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
                color: "#5A717A"
            }
        },
        nameTextStyle: {
            color: "#fff",
            fontSize: 12
        },
        splitLine: {
            lineStyle: {
                type: "dashed",
                color: "#5A717A"
            }
        },
        axisLine: {
            show: false
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
                color: '#5A717A',
            }
        },
        axisLabel: {
            inside: false,
            textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: 12,
            }
        },
        data: ['浙江省', '江苏省', '上海市']
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
        data: ['浙江省', '江苏省', '上海市']
    }],
    series: [{
            type: 'bar',
            xAxisIndex: 1,
            zlevel: 1,
            itemStyle: {
                normal: {
                    color: emptyColor
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
                    color: emptyColor
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
                    color: emptyColor
                }
            },
        }, {
            name: '咨询',
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,
                    color: '#00EF82',
                    barBorderRadius: 4
                }
            },
            zlevel: 2,
            barWidth: 20,
            data: [8, 15, 10]
        }, {
            name: '申请',
            type: 'bar',
            barWidth: 20,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#0087FF',
                    barBorderRadius: 4
                }
            },
            zlevel: 2,
            barGap: '50%',
            data: [22, 17, 24]
        }, {
            name: '取消',
            type: 'bar',
            barWidth: 20,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#F6FF00',
                    barBorderRadius: 4
                }
            },
            zlevel: 2,
            barGap: '50%',
            data: [16, 17, 26]
        }

    ]
};