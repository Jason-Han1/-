var timeData = ['10:05', '10:10', '10:15', '10:20', '10:25', '10:30', '10:35', '10:40'];
let colors = ['#FF6863', '#6EAB40', '#3BB5F5'];
option = {
    color: ["#FFC25C", "#FD666D"],
    title: {
        text: '镜像图',
        left: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            animation: false
        }
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },
    axisPointer: {
        link: {
            xAxisIndex: 'all'
        }
    },
    grid: [{
        height: '40%'
    }, {
        top: '47%',
        height: '40%',
        zlevel: 100
    }],
    xAxis: [{
            show: false,
            type: 'category',
            boundaryGap: false,
            axisLine: {
                show: false
            },
            data: timeData
        },
        {
            gridIndex: 1,
            type: 'category',
            boundaryGap: false,
            axisLine: {
                onZero: true
            },
            data: timeData
      

        }
    ],
    yAxis: [{
            name: '降水',
            type: 'value',
            areaStyle: {},
            offset: 54,
            min: 0,
            max: 50
        },
        {
           
            name: '降水',
            type: 'value',
            gridIndex: 1,
            inverse: true,
            offset: 54
  
        },
        {
            type: 'value',
            name: '温度(°C)',
            scale: true,
            position: 'right',
            offset: 54,
            areaColor: 'red',
             min: 0,
            max: 40,
            axisTick: { lineStyle: { color: colors[0] }, inside: true },
            nameTextStyle: { color: colors[0] },
            axisLabel: { color: colors[0] },
            splitLine: { show: false }
        },
              {
            type: 'value',
            name: '温度(°C)',
            gridIndex: 1,
            scale: true,
             min: 0,
            max: 40,
            position: 'right',
            offset: 54,
              areaColor: 'red',
            axisTick: { lineStyle: { color: colors[0] }, inside: true },
            nameTextStyle: { color: colors[0] },
            axisLabel: { color: colors[0] },
            splitLine: { show: false },
              inverse: true
        }
    ],
    series: [{
            name: '降水',
            type: 'bar',
            symbolSize: 8,
            xAxisIndex: 0,
            yAxisIndex:0,
            hoverAnimation: false,
            data: [
                20, 30, 50, 10, 1.5, 6.5, 9.6, 9.3
            ],
            areaStyle: {},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [{
                                offset: 0,
                                color: '#1890FF'
                            },
                            {
                                offset: 1,
                                color: '#6EBDFF'
                            }
                        ],
                        false
                    ),
                }
            }
        },
          {
            name: '镜像降水',
            type: 'bar',
            symbol: 'circle',
            xAxisIndex: 1,
            yAxisIndex: 1,
            symbolSize: 8,
            hoverAnimation: false,
            data: [
               20, 30, 50, 10, 1.5, 6.5, 9.6, 9.3
            ],
            areaStyle: {},
                        itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [{
                                offset: 0,
                                color: '#1890FF'
                            },
                            {
                                offset: 1,
                                color: '#6EBDFF'
                            }
                        ],
                        false
                    ),
                }
            }
        },
        {
            name: '历史降水',
            type: 'bar',
            symbol: 'circle',
            xAxisIndex: 1,
            yAxisIndex: 1,
            symbolSize: 8,
            hoverAnimation: false,
            data: [
               25, 10, 35, 15, 11.5, 16.5, 19.6, 19.3
            ],
            areaStyle: {},
                        itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [{
                                offset: 0,
                                color: '#d92018'
                            },
                            {
                                offset: 1,
                                color: '#d92018'
                            }
                        ],
                        false
                    ),
                }
            }
        },{
            name: '温度',
            type: 'line',
            symbolSize: 8,
            xAxisIndex: 0,
            yAxisIndex: 2,
            hoverAnimation: false,
            data: [
                28, 30, 31, 32, 33, 35, 24, 30
            ],
            areaStyle: {}
        },
        
        {
            name: '镜像温度',
            type: 'line',
            symbolSize: 8,
            xAxisIndex: 1,
            yAxisIndex: 3,
            hoverAnimation: false,
            data: [
                28, 30, 31, 32, 33, 35, 24, 30
            ],
            areaStyle: {}
        },
        {
            name: '历史温度',
            type: 'line',
            symbol: 'circle',
            xAxisIndex:1,
            yAxisIndex: 3,
            symbolSize: 8,
            hoverAnimation: false,
             data: [
                24, 26, 30, 32, 33, 36, 29, 35
            ],
            areaStyle: {}
        }
       
    ]
};