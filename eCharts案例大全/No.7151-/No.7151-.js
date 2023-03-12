option = {
    backgroundColor: '#031A32',
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
            textStyle: {
                color: "#fff"
            }

        },
    },
    grid: {
        borderWidth: 0,
        top: '20%',
        right: '10%',
        bottom: '20%',
        left: '10%',
        textStyle: {
            color: "#fff"
        }
    },
    legend: {
        x: '30%',
        top: '12%',
        textStyle: {
            color: '#fff',
            fontSize: 16
        }
    },
    calculable: true,
    xAxis: [{
        type: "category",
        name: '设备名称',
        axisLine: {
            lineStyle: {
                color: '#fff',
                fontSize: 14
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitArea: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#fff", //X轴文字颜色
                fontSize: 14
            },
            interval: 0,
            rotate: 30
        },
        data: ['大货车', '大客车', '特大货车', '小货车', '中货车', '中小客车'],
    }],
    yAxis: [{
        type: "value",
        name: "数量",
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#fff',
                fontSize: 14
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#fff", //X轴文字颜色
                fontSize: 14
            },
            interval: 0
        },
        splitArea: {
            show: false
        }
    }],
    series: [{
            name: "大货车",
            type: "bar",
            stack: "总量",
            barMaxWidth: 50,
            barGap: "10%",
            itemStyle: {
                normal: {
                    color: "#189FD9"
                }
            },
            "data": [99, 334, 443, 53, 234, 22]
        },
        {
            "name": "大客车",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": "#18C089",
                    "barBorderRadius": 0
                }
            },
            "data": [11, 334, 643, 23, 53, 234]
        },
        {
            "name": "特大货车",
            "type": "bar",
            "stack": "总量",
            "barMaxWidth": 50,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": "#FF9900"
                }
            },
            "data": [11, 334, 643, 23, 53, 234]
        },
        {
            "name": "小货车",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": "#9932FF",
                    "barBorderRadius": 0
                }
            },
            "data": [11, 334, 643, 23, 53, 234]
        },
        {
            "name": "中货车",
            "type": "bar",
            "stack": "总量",
            "barMaxWidth": 50,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": "#FF32FF"
                }
            },
            "data": [11, 334, 643, 23, 53, 234]
        },

        {
            "name": "中小客车",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": "#FF3200",
                    "barBorderRadius": 0
                }
            },
            "data": [11, 334, 643, 23, 53, 234]
        }
    ]
}