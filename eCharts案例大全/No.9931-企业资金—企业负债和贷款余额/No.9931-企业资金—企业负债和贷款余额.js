option = {
    backgroundColor: '#0d235e',
    title:{
         "text": "",
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
        data: ['企业负债', '货币资金'],
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
        data: ['2012年','2013年','2014年','2015年','2016年','2017年','2018年'
            
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
        name:'亿元',
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
        name: '企业负债',
        type: 'bar',
        data: [220, 120, 240, 266, 210, 246,345],
        barWidth: 16, //柱子宽度
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
                barBorderRadius: 12,
            }
        }
    }, {
        name: '货币资金',
        type: 'bar',
        data: [130, 150, 220, 245, 136, 256,456],
        barWidth: 16,
        barGap: 1,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#304fce'
                }, {
                    offset: 1,
                    color: '#602dae'
                }]),
                opacity: 1,
                barBorderRadius: 12,
            }
        }
    }]
};