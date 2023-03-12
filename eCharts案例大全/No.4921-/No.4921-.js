option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    legend: {
        textStyle: {
            color: '#fff',
        },
        data: ['空间', '遥感', '文档', '视频','图片','月度增长趋势']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#fff'
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#808eb7',
                width: 2
            }
        },
        data: ['1', '2', '3', '4', '5', '6', '7','8', '9', '10', '11', '12', '13', '14','15', '16', '17', '18', '19', '20', '21','22', '23', '24', '25', '26', '27', '28','29','30'],
    },
    yAxis: {
        axisLine: {
            show: false,
            lineStyle: {
                color: '#808eb7',
                width: 2
            }
        },
        axisLabel: {
            color: '#fff'
        },
        splitLine: { //分割线配置
            lineStyle: {
                color: "rgba(50, 180, 181, 1)",
            }
        },
    },
    series: [
        {
            name: '图片',
            type: 'bar',
            stack: '文件增长量',
            barMaxWidth: 30,
            data: [120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230,120, 132, 101, 134, 90, 230,120, 132, 101, 134, 90, 230,120, 132, 101, 134, 90],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 1,
                            color: "#3BEACF" // 0% 处的颜色
                        },
                        {
                            offset: 0,
                            color: "#1EC9C9" // 100% 处的颜色
                        }
                    ], false),
                },
            },
        },
        {
            name: '视频',
            type: 'bar',
            stack: '文件增长量',
            barMaxWidth: 30,
            data: [220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330,,220, 182, 191, 234, 290, 330,,220, 182, 191, 234, 290, 330,,220, 182, 191, 234, 290],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 1,
                            color: "#F6CF5A" // 0% 处的颜色
                        },
                        {
                            offset: 0,
                            color: "#DF9F06" // 100% 处的颜色
                        }
                    ], false),
                },
            },
        },
        {
            name: '文档',
            type: 'bar',
            stack: '文件增长量',
            barMaxWidth: 30,
            data: [120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230,120, 132, 101, 134, 90, 230,120, 132, 101, 134, 90, 230,120, 132, 101, 134, 90],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 1,
                            color: "#B2EA3B" // 0% 处的颜色
                        },
                        {
                            offset: 0,
                            color: "#50D02E" // 100% 处的颜色
                        }
                    ], false),
                },
            },
        },
        {
            name: '遥感',
            type: 'bar',
            stack: '文件增长量',
            barMaxWidth: 30,
            data: [220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310, 234, 290],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 1,
                            color: "#60C6FB" // 0% 处的颜色
                        },
                        {
                            offset: 0,
                            color: "#098BCE" // 100% 处的颜色
                        }
                    ], false),
                },
            },
        },
        {
            name: '空间',
            type: 'bar',
            stack: '文件增长量',
            barMaxWidth: 30,
            data: [120, 132, 101, 134, 90, 230, 210,132, 101, 134, 90, 230, 210,132, 101, 134, 90, 230, 210,132, 101, 134, 90, 230, 210,132, 101, 134, 90, 230],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 1,
                            color: "#AE87F7" // 0% 处的颜色
                        },
                        {
                            offset: 0,
                            color: "#894EEC" // 100% 处的颜色
                        }
                    ], false),
                },
            },
        },
        {
            name: '月度增长趋势',
            type: 'line',
            smooth: true, //是否平滑
            showAllSymbol: false,
            symbol: 'none',
            lineStyle: {
                normal: {
                    color: "rgba(0, 212, 230, 1)",
                    shadowColor: 'rgba(0, 0, 0, 0)',
                    shadowBlur: 0,
                    shadowOffsetY: 5,
                    shadowOffsetX: 5,
                },
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: 'rgb(218 255 232)',
                    fontSize: 16
                }
            },
            zlevel: 2,
            tooltip: {
                show: true
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(0, 212, 230, 1)'
                  },
                  {
                    offset: 0.8,
                    color: 'rgba(0, 212, 230, 0.2)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(0, 212, 230, 0)'
                  }
                ],
                global: false // 缺省为 false
              }
            },
            data: [752, 600, 560, 650, 635, 1310, 900,752, 600, 560, 650, 635, 1310, 900,752, 600, 560, 650, 635, 1310, 900,752, 600, 560, 1310, 900,752, 600, 560, 650]
        }
    ]
};