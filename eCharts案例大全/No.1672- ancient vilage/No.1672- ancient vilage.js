let xLabel = [  "淮安",
    "南京",
    "宿迁",
    "镇江",
    "连云港",
       "大连",
    "南通",
    "苏州",
    "扬州",
    "无锡",
     "盐城",
    "泰州",
    "常州",]
let expenditureData = ["20", "50", "42", "41", "30", "60","45", "30", "50", "42","20", "50","49"]
let incomeData = ["4", "6", "12", "7", "5", "4","3", "12", "3","6", "5", "5","10"]
let incomeData2 = ["14", "16", "22", "17", "15", "14","13", "22", "13","16", "15", "15","20"]
option = {
    //backgroundColor:"#053536",
    backgroundColor: '#09252e',
    tooltip: {
        show:true,
        trigger: 'axis'
    },
    title:{
        text:' ',
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
        top: '20%',
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
                padding: 12,
                fontSize: 10
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
        name:'',
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
        name: '古建筑',
        type: 'line',
        symbol: 'circle',
        showAllSymbol: true,
        symbolSize: 0,
        smooth: false,
        lineStyle: {
            normal: {
                width: 1,
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
        name: '传统村落',
        type: 'line',
        symbol: 'circle',
        showAllSymbol: true,
        symbolSize: 0,
          smooth: false,
        lineStyle: {
            normal: {
               width: 1,
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
    }, {
        name: '美丽乡村',
        type: 'line',
        symbol: 'circle',
        showAllSymbol: true,
        symbolSize: 0,
          smooth: false,
        lineStyle: {
            normal: {
               width: 1,
                 color: "rgba(126, 207, 81,1)",
            }
        },
        itemStyle: {
            color: "rgba(126, 207, 81,1)",
            borderWidth: 2

        },
        tooltip: {
            show: true
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "rgba(126, 207, 81, 0.3)"
                    },
                    {
                        offset: 1,
                        color: "rgba(126, 207, 81,0)"
                    }
                ], false),
                shadowColor: 'rgba(126, 207, 81, 0.5)',
                shadowBlur: 20
            }
        },
        data: incomeData2
    }
    
    
    
    
    ]
};