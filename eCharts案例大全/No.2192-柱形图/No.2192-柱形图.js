option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        top: 'bottom',
        data: ['已上报', '未上报','已发布']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '8%',
        containLabel: true
    },
    yAxis: {
        type: 'value',
        
        splitLine: {
            show: true,
            lineStyle: {
              color: '#D2E6F9',
              type: 'dashed'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#D2E6F9'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#000'
          }
    },
    xAxis: {
        type: 'category',
        data: ['2019', '2020', '2021'],
        axisLine: {
            lineStyle: {
              color: '#D2E6F9'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#000'
          }
    },
    series: [
        {
            name: '已上报',
            type: 'bar',
            barWidth: 24,
            barGap: '40%',
            data: [18, 23, 29],
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 1,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: '#8BDCFF' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#4594E8' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            },
            label: {
                normal: {
                    show: true,
                    formatter: '{c}',
                    position: 'top',
                    textStyle: {
                        color: '#999',
                    }

                }
            }
        },
        {
            name: '未上报',
            type: 'bar',
            barWidth: 24,
            barGap: '40%',
            data: [23, 28, 36],
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 1,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: '#FFB2B2' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#F45353' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            },
            label: {
                normal: {
                    show: true,
                    formatter: '{c}',
                    position: 'top',
                    textStyle: {
                        color: '#999',
                    }

                }
            }
        },
        {
            name: '已发布',
            type: 'bar',
            barWidth: 24,
            barGap: '40%',
            data: [26, 32, 20],
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 1,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: '#59FFB7' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#37BDFF' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            },
            label: {
                normal: {
                    show: true,
                    formatter: '{c}',
                    position: 'top',
                    textStyle: {
                        color: '#999',
                    }

                }
            }
        }
    ]
};
