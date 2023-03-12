
function getpie(value,title) {
    let int = value.toFixed(2).split('.')[0];
    let float = value.toFixed(2).split('.')[1];
    option = {
        backgroundColor: '#020f18',
        title: {
            text: '{a|' + int + '}{b|.' + float + '%}\n{c|' + title + '}',
            x: 'center',
            y: '28%',

            textStyle: {
                lineHeight: 250,
                //height:20,
                rich: {
                    a: {
                        fontSize: 45,
                        color: '#fff',
                        fontWeight: '500',
                        fontStyle: 'oblique',
                    },
                    b: {
                        fontSize: 20,
                        color: '#fff',
                        fontStyle: 'oblique',
                        padding: [0, 0, 14, 0],
                    },
                    c: {
                        fontSize: 25,
                        fontWeight: '600',
                        color: '#fff',
                        padding: [5, 0],
                    },
                },
            },
        },
        series: [
            {
                type: 'gauge',
                radius: '50%',
                //clockwise: false,
                startAngle: '90',
                endAngle: '-269.9999',
                splitNumber: 18,
                pointer: {
                    show: false,
                },
                detail: {
                    formatter: ' ',
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: [
                            [0, '#2CFAFC'],
                            [value / 100, '#0ff9'],
                            [1, '#0f232e'],
                        ],
                        width: 20,
                    },
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: true,
                    length: 50,
                    lineStyle: {
                        shadowBlur: 25,
                        shadowColor: 'rgba(0, 255, 255, 2)',
                        shadowOffsetY: '0',
                        color: '#020f18',
                        width: 1.5,
                    },
                },
                axisLabel: {
                    show: false,
                },
            },
            {
                //动态圈
                type: 'pie',
                radius: ['30%', '30.3%'],
                hoverAnimation: false,
                clockWise: false,
                itemStyle: {
                    normal: {
                        color: '#0C355E',
                    },
                },
                label: {
                    show: false,
                },
                data: getData(),
            },

            {
                //中间圆球
                type: 'pie',
                radius: [0, '00%'], //控制圆圈大小
                hoverAnimation: false,
                clockWise: false,
                itemStyle: {
                    normal: {
                        shadowBlur: 0,
                        shadowColor: '#fff',
                        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#0FF',
                            },
                            {
                                offset: 1,
                                color: '#060f20',
                            },
                        ]),
                    },
                },
                label: {
                    show: false,
                },
                data: [0],
            },
            {
                //小光晕
                type: 'pie',
                radius: ['54%', '55.5%'],
                hoverAnimation: false,
                clockWise: false,
                itemStyle: {
                    normal: {
                        shadowBlur: 20,
                        shadowColor: 'rgba(0, 255, 255,.3)',
                        color: '#0f232e',
                    },
                },
                label: {
                    show: false,
                },
                data: [100],
            },
            {
                //大光晕
                type: 'pie',
                radius: ['58%', '59.5%'],
                hoverAnimation: false,
                clockWise: false,
                itemStyle: {
                    normal: {
                        shadowBlur: 20,
                        shadowColor: 'rgba(0, 255, 255,0.5)',
                        color: 'rgba(15, 35, 46,.6)',
                    },
                },
                label: {
                    show: false,
                },
                data: [100],
            },
        ],
    };
    function getData() {
        let data = [];
        for (var i = 0; i < 50; i++) {
            if (i % 2 === 0) {
                data.push({
                    value: 5,
                    itemStyle: {
                        normal: {
                            color: '#96ebfa66',
                        },
                    },
                });
            } else {
                data.push({
                    value: 20,
                    itemStyle: {
                        normal: {
                            color: 'rgb(0,0,0,0)',
                            borderWidth: 1,
                            borderColor: '#51d3e6',
                        },
                    },
                });
            }
        }
        return data;
    }

    function doing() {
        let option = myChart.getOption();
        option.series[1].startAngle = option.series[1].startAngle - 0.5;
        myChart.setOption(option);
    }
    function startTimer() {
        timer = setInterval(doing, 100);
    }
    setTimeout(startTimer, 0);
}


let values = 88.23;
let titles = '块矿比';
getpie(values,titles);

