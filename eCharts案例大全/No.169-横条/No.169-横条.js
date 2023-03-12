var data=[50, 60, 70,20,30,10];
var className=['1年级','2年级','3年级','4年级','5年级','6年级'];
var colorList=['#39B3FF','#47E0E0','#7891D9','#83D978','#C7A530','#FF8439'];
var defaultData=[100,100,100,100,100,100];
option = {
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '10%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return params[0].name + '<br/>' +
                "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
                // params[0].seriesName + ' : ' + Number((params[0].value.toFixed(4) / 10000).toFixed(2)).toLocaleString() + ' <br/>'
                params[0].seriesName + ' : ' + params[0].value
        }
    },
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
            name: '完成率',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 0,
                    // color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    //     offset: 0,
                    //     color: 'rgb(57,89,255,1)'
                    // }, {
                    //     offset: 1,
                    //     color: 'rgb(46,200,207,1)'
                    // }]),
                    color: (params) => {
					return colorList[params.dataIndex]
				}
                },
            },
            barWidth: 20,
            data: data
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: defaultData,
            itemStyle: {
                normal: {
                    color: '#1B375E',
                    barBorderRadius: 0,
                }
            },
        },
    ]
};