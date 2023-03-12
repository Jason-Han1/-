var fontColor = '#fff';
option = {
    backgroundColor: '#11183c',
    grid: {
        left: '5%',
        right: '10%',
        top: '20%',
        bottom: '15%',
        containLabel: true
    },
    tooltip: {
        show: true,
        trigger: 'item'
    },
    legend: {
        show: true,
        right: '10%',
        y: '95',
        icon: 'stack',
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 30,
        textStyle: {
            color: '#1bb4f6'
        },
        data: ['已采纳', '已发布']
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            color: fontColor,
            fontFamily: 'ShiShangZhongHeiJianTi'
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#ffffff'
            }
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#195384'
            }
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    }],
    yAxis: [{
            type: 'value',
            name: '',
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: fontColor,
                    fontFamily: 'ShiShangZhongHeiJianTi'
                }
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#27b4c2'
                }
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.15)'
                }
            }
        },

    ],
    series: [{
            name: '已采纳',
            type: 'line',
            stack: '总量1',
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {
                normal: {
                    color: '#99f',
                    lineStyle: {
                        color: "#99f",
                        width: 2
                    },
                }
            },
            markPoint: {
                itemStyle: {
                    normal: {
                        color: 'red'
                    }
                }
            },
            data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330],
            markPoint: {
                label: {
                    show: true,
                    position: "top",
                    distance: 10,
                    offset: [1, 1],
                    lineHeight: 20,
                    backgroundColor: '#99f',
                    borderRadius: 5,
                    borderColor: '#99f',
                    borderWidth: '1',
                    padding: [5, 15, 4],
                    color: '#fff',
                    fontSize: 14,
                    fontWeight: 'normal',
                },
                symbol: "circle",
                symbolSize: 10,
                symbolOffset: [0, 0],
                data: [{
                    type: 'max',
                    name: '最大值'
                }],
            },
        },
        {
            name: '已发布',
            type: 'line',
            stack: '总量',
            symbol: 'circle',
            symbolSize: 0,

            itemStyle: {
                normal: {
                    color: '#9f9',
                    lineStyle: {
                        color: "#9f9",
                        width: 2
                    },
                }
            },
            data: [220, 182, 191, 234, 290, 330, 410, 301, 254, 290, 330, 410],
            markPoint: {
                label: {
                    show: true,
                    position: "top",
                    distance: 10,
                    offset: [1, 1],
                    lineHeight: 20,
                    backgroundColor: '#9f9',
                    borderRadius: 5,
                    borderColor: '#9f9',
                    borderWidth: '1',
                    padding: [5, 15, 4],
                    color: '#fff',
                    fontSize: 14,
                    fontWeight: 'normal',
                },
                symbol: "circle",
                symbolSize: 10,
                symbolOffset: [0, 0],
                data: [{
                    type: 'max',
                    name: '最大值'
                }],
            },
        },

    ]
};