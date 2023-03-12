let xLabel = ['一月', '二月', '三月', '四月', '五月', '六月','七月', '八月', '九月', '十月', '十一月', '十二月',]
let expenditureData = ["20", "50", "42", "41", "30", "60","45", "30", "50", "42","20", "50"]
let incomeData = ["40", "56", "52", "75", "50", "40","32", "52", "35","60", "52", "85"]

option = {
    backgroundColor:"#053536",
    tooltip: {
        show:true,
        trigger: 'axis'
    },
    title:{
        text:'家庭2020年收入支出统计',
        left:'center',
        top:20,
        textStyle:{
            color:'#9DCFCF',
        }
    },
    legend: {
        show:true,
        top:45,
        textStyle:{
            color:'#9DCFCF'
        }
    },
    grid: {
        top: '15%',
        left: '10%',
        right: '5%',
        bottom: '15%'
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(76, 230, 231, 0.1)"
            },
        },
        axisLabel: {
            textStyle: {
                color: '#9DCFCF',
                padding: 16,
                fontSize: 14
            },
            formatter: function(data) {
                return data
            }
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        data: xLabel
    }],
    yAxis: [{
        name:'（元）',
        nameTextStyle: {
            color: "#9DCFCF",
            fontSize: 16,
            padding: 10
        },
        min: 0,
        splitNumber: 10,
        splitLine: {
            show: true,
            lineStyle: {
                color: "rgba(76, 230, 231, 0.1)"
            },
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#9DCFCF',
                padding: 16
            },
            formatter: function(value) {
                if (value === 0) {
                    return value
                }
                return value
            }
        },
        axisTick: {
            show: false,
        },
    }],
    series: [{
        name: '支出',
        type: 'line',
        symbol: 'circle',
        showAllSymbol: true,
        symbolSize: 0,
        smooth: true,
        lineStyle: {
            normal: {
                width: 4,
                color: "rgba(32, 214, 179, 1)",
            }
        },
        itemStyle: {
            color: "rgba(32, 214, 179, 1)",
            borderWidth: 2
        },
        tooltip: {
            show: true
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "rgba(32, 214, 179,.3)"
                    },
                    {
                        offset: 1,
                        color: "rgba(32, 214, 179, 0)"
                    }
                ], false),
                shadowColor: 'rgba(32, 214, 179, 0.5)',
                shadowBlur: 20
            }
        },
        data: expenditureData
    }, {
        name: '收入',
        type: 'line',
        symbol: 'circle',
        showAllSymbol: true,
        symbolSize: 0,
        smooth: true,
        lineStyle: {
            normal: {
                width: 4,
                color: "rgba(76, 228, 230, 1)",
            }
        },
        itemStyle: {
            color: "rgba(76, 228, 230, 1)",
            borderWidth: 2

        },
        tooltip: {
            show: true
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "rgba(76, 228, 230, 0.3)"
                    },
                    {
                        offset: 1,
                        color: "rgba(76, 228, 230, 0)"
                    }
                ], false),
                shadowColor: 'rgba(76, 228, 230, 0.5)',
                shadowBlur: 20
            }
        },
        data: incomeData
    }]
};