var provincialData = [{
        id: "089",
        name: "a",
        value: 0
    },
    {
        id: "088",
        name: "r",
        value: 0
    },
    {
        id: "070",
        name: "r",
        value: 0
    },
    {
        id: "087",
        name: "r",
        value: 0
    },
    {
        id: "084",
        name: "r",
        value: 0
    },
    {
        id: "079",
        name: "h",
        value: 0
    },
    {
        id: "086",
        name: "3",
        value: 0
    },
    {
        id: "085",
        name: "rt",
        value: 0
    },
    {
        id: "081",
        name: "y",
        value: 0
    },
    {
        id: "083",
        name: "hf",
        value: 0
    },
    {
        id: "050",
        name: "dhf",
        value: 0
    },
    {
        id: "059",
        name: "dh",
        value: 0
    },
    {
        id: "051",
        name: "df",
        value: 0
    },
    {
        id: "074",
        name: "dh",
        value: 0
    },
    {
        id: "071",
        name: "q",
        value: 0
    },
    {
        id: "075",
        name: "w",
        value: 0
    },
    {
        id: "038",
        name: "x",
        value: 0
    },
    {
        id: "030",
        name: "c",
        value: 0
    },
    {
        id: "036",
        name: "k",
        value: 0
    },
    {
        id: "034",
        name: "l",
        value: 0
    },
    {
        id: "031",
        name: "oi",
        value: 0
    },
    {
        id: "000",
        name: "",
        value: 0
    },
    {
        id: "076",
        name: "p",
        value: 0
    },
    {
        id: "017",
        name: "i",
        value: 0
    },
    {
        id: "097",
        name: "u",
        value: 0
    },
    {
        id: "090",
        name: "y",
        value: 0
    },
    {
        id: "091",
        name: "t",
        value: 0
    },
    {
        id: "010",
        name: "r",
        value: 0
    },
    {
        id: "019",
        name: "e",
        value: 0
    },
    {
        id: "018",
        name: "f",
        value: 0
    },
    {
        id: "013",
        name: "g",
        value: 0
    },
    {
        id: "011",
        name: "h",
        value: 0
    }
];
option = {
    // backgroundColor: "#000",
    grid: [{
        y2: "60%",
    }, {
        y: "42%",

    }],
    xAxis: [{
        type: 'category',
        show: false,
        boundaryGap: true,
        gridIndex: 0,
        data: (() => {
            const res = [];
            for (let len = 0; len < 30; len += 1) {
                res.push(len);
            }
            return res;
        })()
    }, {
        type: 'value',
        show: false,
        gridIndex: 1,
        boundaryGap: [0, 0.2],
    }],
    yAxis: [{
        type: 'value',
        scale: true,
        show: false,
        gridIndex: 0,
        boundaryGap: [0, 0.2]
    }, {
        type: 'category',
        gridIndex: 1,
        data: provincialData.map(item => item.name),
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
            color: '#fff',
            interval: 0
        }
    }],
    series: [{
        name: '',
        type: 'bar',
        barWidth: 12,
        xAxisIndex: 0,
        yAxisIndex: 0,
        itemStyle: {
            normal: {
                barBorderRadius: 30,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1, [{
                            offset: 0,
                            color: '#00feff'
                        },
                        {
                            offset: 0.5,
                            color: '#027eff'
                        },
                        {
                            offset: 1,
                            color: '#0286ff'
                        }
                    ]
                )
            }
        },
        data: (() => {
            const res = [];
            for (let len = 30; len > 0; len -= 1) {
                res.push(0);
            }
            return res;
        })()
    }, {
        barWidth: 12,
        type: 'pictorialBar',
        symbol: 'roundRect',
        xAxisIndex: 1,
        yAxisIndex: 1,
        symbolRepeat: true,
        symbolSize: [12, 8],
        itemStyle: {
            normal: {
                barBorderRadius: [0, 30, 30, 0],
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1, [{
                            offset: 0,
                            color: '#00feff'
                        },
                        {
                            offset: 0.5,
                            color: '#027eff'
                        },
                        {
                            offset: 1,
                            color: '#0286ff'
                        }
                    ]
                )
            }
        },
        data: provincialData.map(item => item.value),
    }]
};
setInterval(() => {
    const axisData = option.xAxis[0].data;
    option.series[0].data.shift();
    option.series[0].data.push(Math.random() * 1000);
    option.xAxis[0].data.shift();
    option.xAxis[0].data.push(axisData[axisData.length - 1] + 1);
    for (var i = 0; i < provincialData.length; i++) {
        if (provincialData[i].name !== '') {
            provincialData[i].value = Math.random() * 1000;
        }
    }
    option.series[1].data = provincialData;

    myChart.setOption(option);
}, 300);