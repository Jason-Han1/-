var colors = [ '#d14a61', '#675bba'];

option = {
    color: colors,

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        right: '20%'
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data: [ '售水总量','其他水量','漏损水量', '2020年', '去年同期']
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }
    ],
    yAxis: [
      
        {
            type: 'value',
            name: '漏损率（%）',
         // min:0,
          //max:30,
            position: 'right',
            offset: 80,
            axisLine: {
                lineStyle: {
                    color: colors[0]
                }
            },
            axisLabel: {
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            name: '水量（万m³）',
           
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: colors[1]
                }
            },
            axisLabel: {
                formatter: '{value} '
            }
        }
    ],
    series: [
     {
            name: '2020年',
            type: 'line',
            yAxisIndex:0,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        },
         {
            name: '去年同期',
            type: 'line',
            yAxisIndex:0,
            data: [4.0, 3.2, 4.3, 5.5, 7.3, 11.2, 44.3, 35.4, 221.0, 16.5, 12.0, 6.2]
        },
        {
            name: '售水总量',
            type: 'bar',
            stack: '总量',
            yAxisIndex: 1,
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
             itemStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 1,
                            x2: 0,
                            y2: 0,
                            colorStops: [
                                {
                                    color: '#053662',
                                    offset: 0,
                                },
                                {
                                    color: '#0f6195',
                                    offset: 0.95,
                                },
                                {
                                    color: '#67cfff',
                                    offset: 1,
                                }

                            ]

                        }
                    }
        },
        {
            name: '其他水量',
            type: 'bar',
            stack: '总量',
            yAxisIndex: 1,
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
             itemStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 1,
                            x2: 0,
                            y2: 0,
                            colorStops: [
                                {
                                    color: '#173041',
                                    offset: 0,
                                },
                                {
                                    color: '#526046',
                                    offset: 0.95,
                                },
                                {
                                    color: '#c8c24c',
                                    offset: 1,
                                }
                            ]

                        }
                    }
            
        },{
            name: '漏损水量',
            type: 'bar',
            stack: '总量',
            yAxisIndex: 1,
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            itemStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 1,
                            x2: 0,
                            y2: 0,
                            colorStops: [
                                {
                                    color: '#053662',
                                    offset: 0,
                                },
                                {
                                    color: '#0f6195',
                                    offset: 0.95,
                                },
                                {
                                    color: '#67cfff',
                                    offset: 1,
                                }

                            ]

                        }
                    }
        }
        
    ]
};
