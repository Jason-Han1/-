var data=[50, 60, 70,20,30];
var className=['巡查','整改','维护','值班','活动'];
var colorList=[new echarts.graphic.LinearGradient(0, 1, 1, 1, [
          { offset: 0, color: "#0294FF" },
          { offset: 1, color: "#8BB4FC" }
        ]),
        new echarts.graphic.LinearGradient(0, 1, 1, 1, [
          { offset: 0, color: "#4CE8D6" },
          { offset: 1, color: "#89FCEF" }
        ]),
        new echarts.graphic.LinearGradient(0, 1, 1, 1, [
          { offset: 0, color: "#0E3FFE" },
          { offset: 1, color: "#3969FA" }
        ]),
        new echarts.graphic.LinearGradient(0, 1, 1, 1, [
          { offset: 0, color: "#BD18E3" },
          { offset: 1, color: "#FA98FF" }
        ]),
        new echarts.graphic.LinearGradient(0, 1, 1, 1, [
          { offset: 0, color: "#5E20E5" },
          { offset: 1, color: "#AC81FD" }
        ])
        ];
var backgroundCor = ["#345393","#255F66","#153171","#8B5AA1","#393971"]
var defaultData=[100,100,100,100,100,100];
option = {
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '10%',
        containLabel: true
    },
    // tooltip: {
    //     trigger: 'axis',
    //     axisPointer: {
    //         type: 'none'
    //     },
    //     formatter: function(params) {
    //         return params[0].name + '<br/>' +
    //             params[0].seriesName + ' : ' + params[0].value + "%"
    //     }
    // },
    backgroundColor: 'rgb(20,28,52)',
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff'
            },
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: className
    }, {
        type: 'category',
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
            textStyle: {
                color: '#ffffff',
                fontSize: '12'
            },
            formatter: function(value) {
                    return value + ' %';
            },
        },
        data: data
    }],
    series: [{
            name: '安全指数',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: [30, 30, 30, 30],
                    color: (params) => {
					return colorList[params.dataIndex]
				}
                },
            },
            barWidth: 6,
            data: data
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 6,
            barGap: '-100%',
            data: defaultData,
            itemStyle: {
                normal: {
                    barBorderRadius: [30, 30, 30, 30],
                    color: (params) => {
					return backgroundCor[params.dataIndex]
				}
                },
            },
        },
    ]
};