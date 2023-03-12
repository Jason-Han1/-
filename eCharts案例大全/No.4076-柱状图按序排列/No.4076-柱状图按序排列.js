var salvProName = ["0.5", "1.0", "1.5"];
var salvProValue = [539, 181, 154];
var salvProTimeValue = [121, 213, 123];
option = {
    backgroundColor: "#003366",
    height:20*2.5*salvProValue.length,
    grid: {
        left: '2%',
        right: '2%',
        bottom: '2%',
        top: '2%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return params[0].name + ' : ' + params[0].value
        }
    },
    xAxis: {
         position: 'top',
          axisLabel: {
            show: true,
            formatter: '{value} kg/s',
            textStyle: {
                color: '#3F658B'
            },
        },
         axisLine: {
           show: true,
           lineStyle: {
                color: '#3F658B'
            },
        },
        splitLine: {
            show: false
        },
        type: 'value'
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
            show: true,
            formatter: '{value} m',
            textStyle: {
                color: '#3F658B'
            },
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: true
        },
        axisLine: {
            show: true,
           lineStyle: {
                color: '#3F658B'
            },
        },
        data: salvProName
    }, {
        type: 'category',
        inverse: true,
        show: true,
        axisLabel: {
            formatter: '{value} s',
            textStyle: {
                color: '#3F658B',
                fontSize: '12'
            },
        },
        axisTick: {
            show: true
        },
        axisLine: {
            show: true,
           lineStyle: {
                color: '#3F658B'
            },
        },
        data: salvProTimeValue
    }],
    series: [{
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 5, 5, 0],
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#298AC8'
                    }, {
                        offset: 1,
                        color: '#3BAECD'
                    }]),
                },
            },
            barWidth: 20,
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
            },
            data: salvProValue
        }

    ]
};