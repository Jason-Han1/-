option = {
    color: ['#dd2837', '#01def5', '#0042ff', '#ff9600', '#cd05e7'],
    legend: {
        data: [{
                name: '火警',
                icon: 'rect',
                textStyle: {
                    color: '#dd2837'
                }
            },
            {
                name: '水系统',
                icon: 'rect',
                textStyle: {
                    color: '#01def5'
                }
            },
            {
                name: '安全用电',
                icon: 'rect',
                textStyle: {
                    color: '#0042ff'
                }
            },
            {
                name: '防火门',
                icon: 'rect',
                textStyle: {
                    color: '#ff9600'
                }
            },
            {
                name: '灭火器',
                icon: 'rect',
                textStyle: {
                    color: '#cd05e7'
                }
            }
        ]
    },
    grid: {
        bottom: 20,
        top: 20,
        left: 30,
        right: 30
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00',
            '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
            '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
            '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'
        ],
        axisLine: {
            lineStyle: {
                color: '#a9b8ca'
            }
        }
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#a9b8ca'
            }
        }
    },
    series: [{
            name: '火警',
            data: [20, 32, 11, 14, 19, 13, 20, 32, 11, 14, 19, 13, 20, 32, 11, 14, 19, 13, 20, 32, 11, 14, 19, 13],
            type: 'line',
            smooth: true,
            symbol: 'none',
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    opacity: 0.1
                }
            }
        },
        {
            name: '水系统',
            data: [22, 12, 21, 34, 9, 23, 22, 12, 21, 34, 9, 23, 22, 12, 21, 34, 9, 23, 22, 12, 21, 34, 9, 23],
            type: 'line',
            smooth: true,
            symbol: 'none',
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    opacity: 0.1
                }
            }
        },
        {
            name: '安全用电',
            data: [30, 12, 14, 14, 39, 23, 30, 12, 14, 14, 39, 23, 30, 12, 14, 14, 39, 23, 30, 12, 14, 14, 39, 23],
            type: 'line',
            smooth: true,
            symbol: 'none',
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    opacity: 0.1
                }
            }
        },
        {
            name: '防火门',
            data: [2, 23, 31, 29, 39, 31, 2, 23, 31, 29, 39, 31, 2, 23, 31, 29, 39, 31, 2, 23, 31, 29, 39, 31],
            type: 'line',
            smooth: true,
            symbol: 'none',
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    opacity: 0.1
                }
            }
        },
        {
            name: '灭火器',
            data: [21, 34, 17, 22, 19, 11, 15],
            type: 'line',
            smooth: true,
            symbol: 'none',
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    opacity: 0.1
                }
            }
        }
    ]
};