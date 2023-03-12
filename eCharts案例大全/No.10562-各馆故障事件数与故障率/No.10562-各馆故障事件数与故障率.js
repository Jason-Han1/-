var legendData = ['故障事件数', '故障率'];
var xdata = ['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', "B4", 'C1', 'C2', 'C3', 'C4', 'D1', 'D2', 'D3', "D4", 'E1', 'E2', 'E3'];
var brokenData = [90, 60, 56, 79, 65, 60, 85, 78, 100, 60, 62, 56, 98, 70, 61, 77, 63, 60, 35]; //折线
var columnarData = [65, 50, 62, 35, 42, 74, 58, 24, 35, 36, 60, 58, 59, 43, 59, 38, 35, 60, 58]; //柱状
var blockData = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]; //方块
option = {
    backgroundColor: "#05224d",
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        //   formatter:function(params){
        //     return params[1].name + params[1].value;
        // }
    },
    grid: {
        top: '8%',
        left: '1%',
        right: '1%',
        bottom: '8%',
        containLabel: true,
    },
    legend: {
        itemGap: 50,
        data: legendData,
        textStyle: {
            color: '#f9f9f9',
            borderColor: '#fff',
            fontSize: 16
        },
        right: 10,
        y: 20
    },
    xAxis: [{
        type: 'category',
        boundaryGap: true,
        axisLine: { //坐标轴轴线相关设置。数学上的x轴
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,.5)'
            },
        },
        axisLabel: { //坐标轴刻度标签的相关设置
            textStyle: {
                color: '#fff',
                margin: 16,
            },
        },
        axisTick: {
            show: false,
        },
        data: xdata,
    }],
    yAxis: [{
        type: 'value',
        min: 0,
        max: 120,
        splitNumber: 7,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#0a3256'
            }
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            margin: 20,
            textStyle: {
                color: '#65F5FD',

            },
        },
        axisTick: {
            show: false,
        },
    }, {
        type: 'value',
        min: 0,
        max: 60,
        splitNumber: 7,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#0a3256'
            }
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            margin: 20,
            textStyle: {
                color: '#65F5FD',

            },
            formatter: '{value}%'
        },
        axisTick: {
            show: false,
        },
    }],
    series: [{
            name: legendData[0],
            type: 'bar',
            stack: 'ip',
            barWidth: 20,
            tooltip: {
                show: true
            },
            label: {
                show: false,
                position: 'top',
                textStyle: {
                    color: '#fff',
                }
            },
            itemStyle: {
                normal: {
                    // barBorderRadius: 5,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: 'rgba(0,179,202,.9)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(2,39,47,.5)'
                            }
                        ]
                    )
                }
            },
            data: columnarData
        },
        {
            name: legendData[1],
            type: 'line',
            // smooth: true, //是否平滑曲线显示
            // symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 6,
            lineStyle: {
                normal: {
                    color: "#28ffb3", // 线条颜色
                },
                borderColor: '#f0f'
            },
            label: {
                show: false,
            },
            itemStyle: {
                normal: {
                    color: "#28ffb3",

                }
            },
            tooltip: {
                show: true
            },
            data: brokenData
        },
        {
            type: 'bar',
            stack: 'ip',
            barWidth: '15%',
            barGap: '40%',
            itemStyle: {
                normal: {
                    color: '#00FFED'
                }
            },
            tooltip: {
                show: false
            },
            data: blockData
        }
    ]
};