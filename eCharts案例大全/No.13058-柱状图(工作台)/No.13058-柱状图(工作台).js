var option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: function(params) {
            return params[0].name + "</br>" + params[0].value
        }
    },
    legend: {
         data: ['厂用电量']
     },
    grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        top: '10%',
        containLabel: true
    },
    xAxis: [{
        data: [
            "NB01",
            "NB02",
            "NB03",
            "NB04",
            "NB05",
            "NB06",
            "NB07",
            "NB08",
            "NB09",
            "NB10"
        ],
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            interval: 0,
            rotate: 0
        }
    }],
    yAxis: [{
        type: 'value',
        name: '       今日发电量( KWh )',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {}
    }],
    series: [{
            name: '厂用电量',
            type: 'bar',
            barGap: '5%',
            barWidth: '10%',
            barCategoryGap: '60%',
            stack: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: [30, 30, 0, 0],
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
            data: [
                14,
                11,
                10,
                9,
                8,
                7,
                5,
                4,
                3,
                20
            ],
            zlevel: 11
        },
        {
            name: '厂用电量',
            type: 'scatter',
            stack: 1,
            xAxisIndex: 0,
            symbolOffset: [0, 0], //相对于原本位置的偏移量
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            itemStyle: {
                normal: {
                    color: '#00feff'
                }
            },
            symbolSize: 13,
            zlevel: 10
        }
    ]
}