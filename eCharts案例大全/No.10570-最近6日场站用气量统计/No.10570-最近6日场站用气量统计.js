option = {
    backgroundColor: '#051638',
    title:{
         "text": "最近6日场站用气量统计",
        textStyle:{
            color: '#fff',
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['FT101', 'FT102', '总和'],
        left:'center',
        align: 'left',
        top:'2%',
        textStyle: {
            color: "#fff"
        },
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 35
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['2019 6-10',
            '2019 6-11',
            '2019 6-12',

            
        ],
        axisLine: {
            show: true,
            lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
            }
        },
        axisTick: {
            show: true,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#00c7ff",
            }
        },
    }],
    yAxis: [{
        type: 'value',
        name:'万m³',
        axisLabel: {
            formatter: '{value} m³'
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
                color: "#0F55B9",
            }
        }
    }],
    series: [{
        name: 'FT101',
        type: 'bar',
        data: [220, 120, 240, 266, 210, 246],
        barWidth: "10%", //柱子宽度
        barGap: 1, //柱子之间间距
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#00C7E1'
                }, {
                    offset: 1,
                    color: '#005193'
                }]),
                opacity: 1,
                barBorderRadius: 2,
            }
        }
    }, {
        name: 'FT102',
        type: 'bar',
        data: [130, 150, 220, 245, 136, 256],
        barWidth: "10%",
        barGap: 1,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#00da9c'
                }, {
                    offset: 1,
                    color: '#007a55'
                }]),
                opacity: 1,
                barBorderRadius: 2,
            }
        }
    }, {
        name: '总和',
        type: 'bar',
        data: [350, 270, 460, 511, 346, 502, 50],
        barWidth: "10%",
        barGap: 1,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#7CB8F8'
                }, {
                    offset: 1,
                    color: '#051B8F'
                }]),
                opacity: 1,
                barBorderRadius: 2,
            }
        }
    }]
};