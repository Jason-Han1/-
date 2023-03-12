var hours = ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'];

var days = ['2017/12/06','2017/12/06','2017/12/06','2017/12/06','2017/12/06','2017/12/06','2017/12/06'];
var weatherIcons = {
    'Sunny': './data/asset/img/weather/sunny_128.png',
    'Cloudy': './data/asset/img/weather/cloudy_128.png',
    'Showers': './data/asset/img/weather/showers_128.png'
};

option = {
    title: {
        text: 'Punch Card of Github',
        link: 'https://github.com/pissang/echarts-next/graphs/punch-card'
    },
    legend: {
        data: ['Punch Card'],
        left: 'right'
    },
    tooltip: {
        position: 'top',
        formatter: function(params) {
            return params.value[2] + ' commits in ' + hours[params.value[0]] + ' of ' + days[params.value[1]];
        }
    },
    grid: {
        left: 2,
        bottom: 10,
        right: 10,
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data:days ,
        boundaryGap: false,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#ddd',
                type: 'dashed'
            }
        },
        axisLine: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        data: hours,
        axisLine: {
            show: false
        }
    },
    series: [{
        name: 'Punch Card',
        type: 'scatter',
        symbolSize: 1,
        label: {
                normal: {
                    show: true,
                    color: '#000',
                    fontSize: 14,
                    rich: {
                        blackBg: {
                            backgroundColor: '#000',
                            color: '#fff'
                        },
                        tc: {
                            align: 'center',
                            color: '#eee'
                        },
                        hr: {
                            borderColor: '#777',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        sunny: {
                            height: 30,
                            align: 'center',
                            backgroundColor: {
                                image: weatherIcons.Sunny
                            }
                        },
                        cloudy: {
                            height: 30,
                            align: 'center',
                            backgroundColor: {
                                image: weatherIcons.Cloudy
                            }
                        },
                        showers: {
                            height: 30,
                            align: 'left',
                            backgroundColor: {
                                image: weatherIcons.Showers
                            }
                        }
                    }
                }
            },
        data:[
            {
                value:[2,2,'99'],
                label: {
                        normal: {
                            formatter: [
                                '   {blackBg|xxxxx} {sunny|} {cloudy|}xxxxxxxx   '
                            ].join('\n'),
                            rich: {
                                titleBg: {
                                    align: 'center'
                                }
                            }
                        }
                    }
            }
            ]
    }]
};








































