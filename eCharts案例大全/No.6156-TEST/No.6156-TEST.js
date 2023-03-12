var data = [];
for (let i = 0; i < 14; ++i) {
    data.push(Math.round(Math.random() * 10));
}
var option = {
    title: {
        top: 40,
        text: 'Progress bars & Indicators',
        subtext: '',
        x: 'center',
        textStyle: {
            align: 'center',
            color: '#CCC',
            fontSize: 30,
            fontWeight: '100',
        },
    },
    tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    grid: {
        //   height: '100',
        bottom: '15%',
        left: '10',
        top: '20%',
        right: '10',
    },
    xAxis: {
        show: false,
    },
    yAxis: {
        show: false,
        inverse: true,
        type: 'category',
        data: [
            '192.168.1.188',
            '192.168.1.196',
            '192.168.1.166',
            '192.168.1.188',
            '192.168.1.196',
            '192.168.1.166',
            '192.168.1.196',
            '192.168.1.166',
            '192.168.1.196',
            '192.168.1.166',
            '192.168.1.196',
            '192.168.1.166',
            '192.168.1.196',
            '192.168.1.166',
        ],
    },
    series: [
        {
            realtimeSort: true,
            type: 'bar',
            //  barWidth: '35%',
            z: 2,
            data: data,
            label: {
                normal: {
                    show: true,
                    position: 'left',
                    color: '#9bb2d4',
                    fontSize: 12,
                    offset: [95, 0],
                    formatter: function (param) {
                        return param.name;
                    },
                },
            },
            itemStyle: {
                normal: {
                    barBorderRadius: 4,
                    opacity: 1,
                    color: function (params) {
                        let colorList = [
                            new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: '#024cc4',
                                },
                                {
                                    offset: 0.5,
                                    color: '#024cc4',
                                },
                                {
                                    offset: 0.5,
                                    color: '#015ef3',
                                },
                                {
                                    offset: 1,
                                    color: '#015ef3',
                                },
                            ]),
                            new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: '#5d01d1',
                                },
                                {
                                    offset: 0.5,
                                    color: '#5d01d1',
                                },
                                {
                                    offset: 0.5,
                                    color: '#6c01f3',
                                },
                                {
                                    offset: 1,
                                    color: '#6c01f3',
                                },
                            ]),
                            new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: '#9602d5',
                                },
                                {
                                    offset: 0.5,
                                    color: '#9602d5',
                                },
                                {
                                    offset: 0.5,
                                    color: '#a201f3',
                                },
                                {
                                    offset: 1,
                                    color: '#a201f3',
                                },
                            ]),
                            new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: '#024cc4',
                                },
                                {
                                    offset: 0.5,
                                    color: '#024cc4',
                                },
                                {
                                    offset: 0.5,
                                    color: '#015ef3',
                                },
                                {
                                    offset: 1,
                                    color: '#015ef3',
                                },
                            ]),
                            new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: '#024cc4',
                                },
                                {
                                    offset: 0.5,
                                    color: '#024cc4',
                                },
                                {
                                    offset: 0.5,
                                    color: '#015ef3',
                                },
                                {
                                    offset: 1,
                                    color: '#015ef3',
                                },
                            ]),
                            new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: '#9602d5',
                                },
                                {
                                    offset: 0.5,
                                    color: '#9602d5',
                                },
                                {
                                    offset: 0.5,
                                    color: '#a201f3',
                                },
                                {
                                    offset: 1,
                                    color: '#a201f3',
                                },
                            ]),
                            new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: '#024cc4',
                                },
                                {
                                    offset: 0.5,
                                    color: '#024cc4',
                                },
                                {
                                    offset: 0.5,
                                    color: '#015ef3',
                                },
                                {
                                    offset: 1,
                                    color: '#015ef3',
                                },
                            ]),
                            new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: '#024cc4',
                                },
                                {
                                    offset: 0.5,
                                    color: '#024cc4',
                                },
                                {
                                    offset: 0.5,
                                    color: '#015ef3',
                                },
                                {
                                    offset: 1,
                                    color: '#015ef3',
                                },
                            ]),
                            new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: '#024cc4',
                                },
                                {
                                    offset: 0.5,
                                    color: '#024cc4',
                                },
                                {
                                    offset: 0.5,
                                    color: '#015ef3',
                                },
                                {
                                    offset: 1,
                                    color: '#015ef3',
                                },
                            ]),
                            new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: '#024cc4',
                                },
                                {
                                    offset: 0.5,
                                    color: '#024cc4',
                                },
                                {
                                    offset: 0.5,
                                    color: '#015ef3',
                                },
                                {
                                    offset: 1,
                                    color: '#015ef3',
                                },
                            ]),
                            new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: '#024cc4',
                                },
                                {
                                    offset: 0.5,
                                    color: '#024cc4',
                                },
                                {
                                    offset: 0.5,
                                    color: '#015ef3',
                                },
                                {
                                    offset: 1,
                                    color: '#015ef3',
                                },
                            ]),
                            new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: '#9602d5',
                                },
                                {
                                    offset: 0.5,
                                    color: '#9602d5',
                                },
                                {
                                    offset: 0.5,
                                    color: '#a201f3',
                                },
                                {
                                    offset: 1,
                                    color: '#a201f3',
                                },
                            ]),
                            new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: '#024cc4',
                                },
                                {
                                    offset: 0.5,
                                    color: '#024cc4',
                                },
                                {
                                    offset: 0.5,
                                    color: '#015ef3',
                                },
                                {
                                    offset: 1,
                                    color: '#015ef3',
                                },
                            ]),
                            new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: '#024cc4',
                                },
                                {
                                    offset: 0.5,
                                    color: '#024cc4',
                                },
                                {
                                    offset: 0.5,
                                    color: '#015ef3',
                                },
                                {
                                    offset: 1,
                                    color: '#015ef3',
                                },
                            ]),
                        ];
                        return colorList[params.dataIndex];
                    },
                },
                emphasis: {
                    opacity: 0.7,
                },
            },
            //   max: 1
        },
        {
            realtimeSort: true,
            type: 'bar',
            barGap: '-100%',
            //   barWidth: '25%',
            z: 1,
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    color: '#9bb2d4',
                    fontSize: 12,
                    offset: [-40, 1],
                    formatter: function (param) {
                        var dd = data;
                        return +dd[param.dataIndex] + '%';
                    },
                },
            },
            markLine: {
                symbol: 'none',
                data: [
                    {
                        xAxis: 38,
                        lineStyle: {
                            color: '#0f0',
                            type: 'dashed',
                        },
                        label: {
                            formatter: '{c}%',
                            textStyle: {
                                color: '#0f0',
                            },
                            position: 'start',
                        },
                    },
                    {
                        xAxis: 56,
                        lineStyle: {
                            color: '#f00',
                            type: 'dashed',
                        },
                        label: {
                            formatter: '{c}',
                            textStyle: {
                                color: '#f00',
                            },
                            position: 'end',
                        },
                    },
                ],
            },
            itemStyle: {
                normal: {
                    shadowColor: 'rgba(200, 200, 200, 0.15)',
                    shadowBlur: 0,
                    shadowOffsetX: 1,
                    shadowOffsetY: 1,
                    color: '#1b223b',
                },
            },
        },
    ],
    // animationDuration: 0,
    // animationDurationUpdate: 500,
    // animationEasing: 'linear',
    // animationEasingUpdate: 'linear'
};
function run() {
    var data = option.series[0].data;
    for (var i = 0; i < data.length; ++i) {
        if (Math.random() <= 100) {
            data[i] = Math.round(Math.random() * 90);
        } else {
            data[i] = Math.round(Math.random() * 50);
        }
    }
    myChart.setOption(option);
}

setTimeout(function () {
    run();
}, 0);
setInterval(function () {
    run();
}, 3000);
const backImg = '/asset/get/s/data-1637570239446-DZHPW6j2a.png';
myChart._dom.style.backgroundImage = "url('" + backImg + "')";