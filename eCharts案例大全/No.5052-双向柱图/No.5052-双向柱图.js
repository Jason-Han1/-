var xData = ['中医', '西药', '中成药'];
var xlData = [270, 886, 689];
var xseData = [401, 601, 804 ];
var option = {
    baseOption: {
        timeline: {
            show: false,
            top: 0,
            data: []
        },
        grid: [{
            show: false,
            left: '3%',
            top: '7%',
            bottom: '5%',
            containLabel: true,
            width: '47%'
        }, {
            show: false,
            left: '50%',
            top: '0%',
            bottom: '15%',
            // width: '100%',
            containLabel: false,
        }, {
            show: false,
            right: '4%',
            top: '7%',
            bottom: '5%',
            containLabel: true,
            width: '46%'
        }],
        xAxis: [{
            type: 'value',
            inverse: true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            position: 'top',
            axisLabel: {
                show: false,
            },
            splitLine: {
                show: false,
            },
        }, {
            gridIndex: 1,
            show: false
        }, {
            gridIndex: 2,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            position: 'top',
            axisLabel: {
                show: false,
            },
            splitLine: {
                show: false,
            },
        }],
        yAxis: [{
            type: 'category',
            inverse: true,
            position: 'right',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            data: xData
        }, {
            gridIndex: 1,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                padding: [0, 0, 0, 5],
                textStyle: {
                    color: '#ffffff',
                    fontSize: 13
                },
                align: "top"

            },
            data: xData.map(function(value) {
                return {
                    value: value,
                    textStyle: {
                        align: 'center'
                    }
                }
            })
        }, {
            gridIndex: 2,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false,
                lineStyle: {
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false

            },
            data: xData
        }],
        series: []

    },
    options: []
}

option.options.push({
    series: [{
        name: "销量",
        type: "bar",
        barWidth: 10,
        showBackground:"true",
        stack: "1",
        itemStyle: {
            color: "#0096FF"
        },
        label: {
            normal: {
                show: true,
                position: 'right',
                padding:[30,0,0,-80],
                formatter: "销量{c}" + "亿件",
                textStyle: {
                    fontSize: "12",
                    color: "#FFFFFF"
                }
            }
        },
        data: xlData,
        //animationEasing: "elasticOut"
    },
        {
            name: "销售额",
            type: "bar",
            showBackground:"true",
            stack: "2",
            barWidth: 10,
            xAxisIndex: 2,
            yAxisIndex: 2,
            itemStyle: {
                color: "#FFE823"
            },
            label: {
                normal: {
                    show: true,
                    position: 'left',
                    padding:[30,-80,0,0],
                    formatter: "销售额{c}" + "亿",
                    textStyle: {
                        fontSize: "12",
                        color: "#FFFFFF"
                    }
                }
            },
            data: xseData,
        },

    ]
});