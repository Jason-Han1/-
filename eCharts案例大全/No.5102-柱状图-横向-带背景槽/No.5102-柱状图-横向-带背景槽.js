yName = ['大米', '玉米', '蔬菜', '鸡蛋', '坚果']
data = [13, 23, 34, 45, 15]
bg_data = [100, 100, 100, 100, 100]

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
                params[0].seriesName + ' : ' + params[0].value + '%<br/>'
        }
    },
    // backgroundColor: 'rgb(20,28,52)',
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
                color: 'rgba(111, 132, 189, 1)'
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
        data: yName
    }, {
        type: 'category',
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
            textStyle: {
                color: 'rgba(111, 132, 189, 1)',
                fontSize: '12'
            },
            formatter: function(value) {
                return value + '%'
            },
        },
        data: data
    }],
    series: [{
            name: '百分比',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 30, 30, 0],
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgba(101, 105, 255, 1)'
                    }, {
                        offset: 1,
                        color: 'rgba(0, 192, 240, 1)'
                    }]),
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
            data: bg_data,
            itemStyle: {
                normal: {
                    color: '#15497B',
                    barBorderRadius: [0, 30, 30, 0],
                }
            },
        },
    ]
};