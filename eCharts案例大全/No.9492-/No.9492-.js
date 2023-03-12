
let colorArray = [
    {
        top: '#2efadb',
        bottom: '#3a48b0'
    }
];
var option = {
    backgroundColor: '#00265f',
            grid: {
                left: '6%',
                top: '2%',
                right: '6%',
                height: '100%',
                containLabel: true
            },
            xAxis: [{
                show: false,
            }],
            yAxis: [{
                axisTick: 'none',
                axisLine: 'none',
                offset: '10',
                axisLabel: {
                    textStyle: {
                        color: '#f4f8fc',
                        fontSize: '14',
                    }
                },
                data: ['水痘疫苗'],
            }, {
                show: false,
                data: [],
            }],
            series: [{
                name: '条',
                type: 'bar',
                yAxisIndex: 0,
                data: [60],
                label: {
                    normal: {
                        show: false,
                    }
                },
                barWidth: 6,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            let num = colorArray.length;
                            return {
                                type: 'linear',
                                colorStops: [{
                                    offset: 0,
                                    color: colorArray[0].bottom
                                }, {
                                    offset: 1,
                                    color: colorArray[0].top
                                }],
                            }
                        },
                        barBorderRadius: 5
                    }
                },
                z: 2
            }, {
                name: '白框',
                type: 'bar',
                yAxisIndex: 1,
                barGap: '-100%',
                data: [100],
                barWidth: 6,
                itemStyle: {
                    normal: {
                        color: '#214083',
                        barBorderRadius: 5,
                    }
                },
                z: 1
            }
            ]
        };