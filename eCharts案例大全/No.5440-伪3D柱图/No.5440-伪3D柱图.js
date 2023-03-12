var data = [
    {
        name: '石嘴山',
        value1: 100,
        value2: 80,
        value3: 60
    },
    {
        name: '石嘴山',
        value1: 100,
        value2: 80,
        value3: 60
    },
    {
        name: '石嘴山',
        value1: 100,
        value2: 80,
        value3: 60
    },
    {
        name: '石嘴山',
        value1: 100,
        value2: 80,
        value3: 60
    },
    {
        name: '石嘴山',
        value1: 100,
        value2: 80,
        value3: 60
    },
    {
        name: '石嘴山',
        value1: 100,
        value2: 80,
        value3: 60
    } 
]

var option = {
    backgroundColor: "#000",
    legend: {
        textStyle: {
            color: "#368ad9",
            fontSize: 24
        }
    },
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        axisLine: {
            show: true,
            lineStyle: {
                type: "dashed",
                color: "#368ad9",
                width: 2
            }
        },
        axisLabel: {
          color: "#368ad9",
          fontSize: 24
        },
        axisTick: {
            show: false  
        },
        data: data.map(item => item.name)
    },
    yAxis: [{
        name: "个",
        nameTextStyle: {
          color: "#368ad9",
          fontSize: 24,
          padding: [10, 10, 10, -40]
        },
        axisLabel: {
          color: "#368ad9",
          fontSize: 24
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false  
        },
        splitLine: {
            show: false
        }
    },{
        name: "%",
        nameTextStyle: {
          color: "#368ad9",
          fontSize: 24,
          padding: [10, 10, 10, 50]
        },
        max: 100,
        axisLabel: {
          color: "#368ad9",
          fontSize: 24
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false  
        },
        splitLine: {
            show: false
        }
    }],
    series: [
        {
            name: "稽查问题",
            type: 'bar',
            barWidth: 27,
            itemStyle: {
                barBorderRadius: [0, 0, 12, 12],
                color: {
                    type: 'linear',
                    x: 0,
                    y: 1,
                    x2: 0,
                    y2: 0,
                    colorStops: [
                        { offset: 0, color: '#05b5b9' },
                        { offset: 1, color: '#2ffaf6' }
                    ]
                },
            },
            stack: 1,
            data: data.map(item => item.value1),
            markPoint: {
                symbol: 'circle',
                symbolSize: [27, 17],
                itemStyle: {
                    color: "#17baba",  
                },
                data: data.map((item, index) => ({
                  coord: [index, item.value1]  
                }))
            }
        },
        {
            name: "整改数",
            type: 'bar',
            barWidth: 27,
            itemStyle: {
                // barBorderRadius: [0, 0, 12, 12],
                color: {
                    type: 'linear',
                    x: 0,
                    y: 1,
                    x2: 0,
                    y2: 0,
                    colorStops: [
                        { offset: 0, color: '#05b5b9' },
                        { offset: 1, color: '#2ffaf6' }
                    ]
                },
                opacity: 0.5
            },
            stack: 1,
            data: data.map(item => item.value2),
            markPoint: {
                symbol: 'circle',
                symbolSize: [27, 17],
                itemStyle: {
                    color: "#17baba",  
                },
                data: data.map((item, index) => ({
                  coord: [index, item.value1 + item.value2]  
                }))
            }
        },
        {
            name: "整改率",
            type: "line",
            data: data.map(item => item.value3),
            symbolSize: 0,
            lineStyle: {
                width: 5,
                color: "#deee5e"
            },
            itemStyle: {
                color: "#deee5e"
            },
            smooth: false,
            yAxisIndex: 1
        }
    ]
};
