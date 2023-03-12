option = {
    color: ['#3E8EF7', '#E83428'],
    tooltip: {
        trigger: 'item',
        formatter: function (e) {
            return e.value != 0 ? e.name + '<br/>' + e.seriesName + ':' + e.value + '次' : '';
        },
    },
    legend: {
        // orient: 'vertical',
        // top: 'top',
        textStyle: {
            color: '#ffffff',
        },
        left: 'center',
        show: false,
    },
    title: {
        // text: '{a|累计告警次数：}{b|183 }{c|次}',
        orient: 'vertical',
        bottom: '0',
        left: 'center',
        color: 'white',
        textStyle: {
            rich: {
                a: {
                    fontSize: 16,
                    color: '#ffffff',
                    // padding: [5,0]
                },
                b: {
                    fontSize: 24,
                    color: '#29EEF3',
                },
                c: {
                    fontSize: 16,
                    color: '#ffffff',
                },
            },
        },
    },
    series: [
        {
            name: '',
            type: 'pie',
            radius: '90%',
            hoverAnimation: false,
            center: ['50%', '50%'],
            clockWise: false,
            itemStyle: {
                normal: {
                    labelLine: {
                        show: false,
                    },
                    color: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgba(0,0,0,0)', // 0% 处的颜色
                            },
                            {
                                offset: 0.8,
                                color: 'rgba(0,0,0,0)', // 50% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(65,142,247,0.3)', // 100% 处的颜色
                            },
                        ],
                        globalCoord: false, // 缺省为 false
                    },
                },
            },
            data: [
                {
                    name: '',
                    value: 0,
                },
            ],
        },
        {
            name: '告警',
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            data: [
                { value: 10, name: '信息中心机房' },
                { value: 5, name: '数据中心机房' },
            ],
            title: {
                color: 'white',
            },
            detail: {
                formatter: '{value}%',
                offsetCenter: [0, '90%'], // x, y，百分比下移 就是下面的那个百分比
            },
            label: {
                position: 'outside',
                formatter: function (e) {
                    return e.value != 0 ? e.name + ' ' + e.percent + '%' : '';
                },

                padding: [0, -10, 10, -10],
            },
            labelLine: {
                normal: {
                    length: 5,
                    length2: 10,
                    lineStyle: {
                        width: 1,
                    },
                },
            },
        },
    ],
};
myChart.setOption(option);
var indexpie = 0;
var showTipPie = setInterval(function () {
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 1,
    });
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 1,
        dataIndex: indexpie % option.series[1].data.length,
    });
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 1,
        dataIndex: indexpie % option.series[1].data.length,
    });
    indexpie++;
}, 10000);
