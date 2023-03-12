var peoples = [50, 93, 139, 5];
var maxNumber = Math.max.apply(null, peoples) + 10;
var maxData = [maxNumber, maxNumber, maxNumber, maxNumber, 1];

var option = {
    backgroundColor: '#200069',
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '10%',
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none',
        },
        formatter: function (params) {
            return params[0].name + '<br/>' + params[0].seriesName + ' : ' + params[0].value + ' 人<br/>';
        },
    },
    xAxis: {
        show: false,
        type: 'value',
    },
    yAxis: [
        {
            type: 'category',
            inverse: true,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            data: ['研究生', '本科', '大专', '大专以下'],
        },
        {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '12',
                },
                formatter: '{value}人',
            },
            data: peoples,
        },
    ],
    series: [
        {
            name: '人数',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        {
                            offset: 0,
                            color: '#6002D9',
                        },
                        {
                            offset: 1,
                            color: '#0094FF',
                        },
                    ]),
                },
            },
            barWidth: 20,
            data: peoples,
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: maxData,
            itemStyle: {
                normal: {
                    color: 'rgba(255, 255, 255, 0.1)',
                    barBorderRadius: 30,
                },
            },
        },
    ],
};
