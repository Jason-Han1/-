option = {
    tooltip: {
        trigger: 'axis',
        textStyle: {
            color: '#fff'
        },
        axisPointer: {
            type: 'shadow',
            borderColor: 'rgba(124,128,244, .5)',
        },
        position: 'inside',
        formatter: (params) => {
            return `${params[0].axisValueLabel}-${params[0].seriesName}：${params[0].data[2]} <br /> ${params[1].axisValueLabel}-${params[1].seriesName}：${params[1].data[2]}`
        }
    },
    legend: {
        show: true,
        top: 0,
        right: 20,
        itemWidth: 20,
        itemHeight: 10,
        textStyle: {
            color: "#fff"
        }
    },
    grid: {
        show: true,
        top: 30,
        left: '8%',
        right: '3%',
        bottom: 40,
        borderColor: "#061C61"
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisPointer: {
            type: 'shadow'
        },
        axisLine: {
            lineStyle: {
                color: '#215AFF'
            }
        },
        //网格样式
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#103095'],
                width: 1,
                type: 'dashed'
            }
        }
    },
    yAxis: {
        type: 'category',
        //网格样式
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#103095'],
                width: 1,
                type: 'dashed'
            }
        },
        nameTextStyle: {
            color: '#fff'
        },
        axisLine: {
            lineStyle: {
                color: "#215AFF"
            }
        },
        data: ['福州', '厦门', '莆田', '三明', '泉州', '龙岩'],
        scale: true
    },
    series: [{
            name: '数据2',
            //  先X,后y
            data: [
                [0, 0, 122],
                [1, 1, 123],
                [2, 2, 223],
                [3, 3, 123],
                [4, 2, 123],
                [5, 4, 323],
                [6, 5, 123],
                [7, 5, 123],
                [8, 1, 123],
                [9, 3, 123],
                [10, 5, 223],
                [11, 2, 123],
            ],
            type: 'scatter',
            symbolSize: function(data) {
                return Math.sqrt(data[2])*3;
            },
            emphasis: {
                label: {
                    show: false,
                    formatter: function(param) {
                        return param.data[2];
                    },
                    position: 'top'
                }
            },
            itemStyle: {
                shadowBlur: 15,
                shadowColor: 'rgba(0,0,0, 0.5)',
                shadowOffsetY: 5,
                color: '#ff9f7f',
            }
        },
        {
            name: '数据1',
            data: [
                [0, 2, 222],
                [1, 3, 223],
                [2, 4, 223],
                [3, 2, 123],
                [4, 5, 123],
                [5, 3, 123],
                [6, 1, 123],
                [7, 2, 123],
                [8, 3, 323],
                [9, 5, 123],
                [10, 2, 223],
                [11, 5, 123],
            ],
            type: 'scatter',
            symbolSize: function(data) {
                return Math.sqrt(data[2])*3;
            },
            emphasis: {
                label: {
                    show: false,
                    formatter: function(param) {
                        return param.data[2];
                    },
                    position: 'top'
                }
            },
            itemStyle: {
                shadowBlur: 15,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
                color: '#8379ea',
            }
        }
    ] //end series
};