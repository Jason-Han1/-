let fontColor = '#787878';

let Data = [
    {
        name: '湿度',
        unit: '%',
        color: '#0ae5e4',
        area: ['#09515a','#09515a', 'transparent'],
        data: [40, 52, 11, 14, 50],
    },
    {
        name: '温度',
        unit: ' ℃',
        color: '#06b0ff',
        area: ['#096d8e','#0e4f6a', 'transparent'],
        data: [20, 32, 101, 34, 90],
    },
    
];
let  _seriesData = [];
Data.forEach((e) => {
    _seriesData.push({
        name: e.name,
        type: 'line',
        yAxisIndex: e.name == '温度' ? 0 : 1,
        symbol: 'circle',
        symbolSize: 1,
        areaStyle: {
            color: new echarts.graphic.LinearGradient(0,0,0,1,[
                    {
                        offset: 0,
                        color: e.area[0],
                    },
                    {
                        offset: 0.5,
                        color: e.area[1],
                    },
                    {
                        offset: 1,
                        color: e.area[2],
                    },
                ],
                false
            ),
        },
        lineStyle: {
            color: e.color,
            width: 2,
        },
        itemStyle:{
            color: e.color
        },

        data: e.data,
    });
});


option = {
    backgroundColor: '#151515',
    grid: {
        left: '5%',
        right: '10%',
        top: '20%',
        bottom: '15%',
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985',
            },
        },
    },
    legend: {
        icon: 'Rect',
        orient: 'horizontal',
        itemWidth: 20,
        itemHeight: 2,
        textStyle: {
            fontSize: 12, //字体大小
            color: fontColor, //字体颜色
        },
        right: '50%', //距离右侧
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                color: fontColor,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#2e2e2e',
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            data: ['00:00', '04:00', '08:00', '12:00', '16:00'],
        },
    ],
    yAxis: [
        {
            type: 'value',
            name: '单位/℃',
            nameTextStyle: {
                color: fontColor,
            },
            axisLabel: {
                formatter: '{value}',
                color: fontColor,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#2e2e2e',
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
        },
        {
            type: 'value',
            name: '单位/%',
            color: fontColor,
             nameTextStyle: {
                color: fontColor,
            },
            axisLabel: {
                textStyle: {
                    color: fontColor,
                },
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#2e2e2e',
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
        },
    ],
    series: _seriesData,
};
/*[
        {
            name: '已采纳',
            type: 'line',
            yAxisIndex: 0,
            stack: '总量',
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color: '#0092f6',
                    lineStyle: {
                        color: "#0092f6",
                        width: 1
                    },
                    //           areaStyle: { 
                    // 			//color: '#94C9EC'
                    // 			color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    // 				offset: 0,
                    // 				color: 'rgba(7,44,90,0.3)'
                    // 			}, {
                    // 				offset: 1,
                    // 				color: 'rgba(0,146,246,0.9)'
                    // 			}]),
                    //           }
                }
            },
            markPoint: {
                itemStyle: {
                    normal: {
                        color: 'red'
                    }
                }
            },
            data: [120, 132, 101, 134, 90]
        },
        {
            name: '已发布',
            type: 'line',
            yAxisIndex: 1,
            stack: '总量',
            symbol: 'circle',
            symbolSize: 8,

            itemStyle: {
                normal: {
                    color: '#00d4c7',
                    lineStyle: {
                        color: "#00d4c7",
                        width: 1
                    },
                }
            },
            data: [220, 182, 191, 234, 290,]
        },

    ]*/
