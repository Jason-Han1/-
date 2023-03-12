option = {
    title: {
        text: '各季度疼痛评估比例',
        x: 'center'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: [
            '术前1天',
            '手术当天',
            '术后第1天',
            '术后第2天',
            '术后第3天'
        ],
        y: 'bottom'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            myTool1: {
                show: true,
                title: '刷新',
                icon: 'image://https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594819963708&di=32f8629d7ae23fd8de9c022b9c13bad4&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F0aa23e9ead6dc5e637da9b065c3b2024f95a21d53cb5-hjkdAM_fw658',
                onclick: function() {
                    console.info('刷新');
                    myChart.clear();
                    myChart.setOption(option, true);
                }
            }
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        data: ['2018 Q1', '2018 Q2', '2018 Q3', '2018 Q4', '2019 Q1', '2019 Q2', '2019 Q3', '2019 Q4']
    },
    yAxis: {
        type: 'value',
        scale: true,
        name: '百分比',
        max: 100,
        min: 0,
        boundaryGap: [0.2, 0.2],
        axisLabel: {
            formatter: '{value}%'
        }
    },
    series: [{
            name: '术前1天',
            type: 'line',
            data: [8.8, 10.4, 10.7, 7.7, 9.4, 10.7, 11.0, 11.2],
            animationDuration: 4000,

            animationEasing: 'quadraticOut',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: '{c}%'
                    }
                }
            },

        },
        {
            name: '手术当天',
            type: 'line',
            animationDuration: 4000,

            animationEasing: 'quadraticOut',
            data: [80.3, 78.1, 77.8, 81.0, 85.4, 82.1, 88.8, 91.4],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: '{c}%'
                    }
                }
            }
        },
        {
            name: '术后第1天',
            type: 'line',
            animationDuration: 4000,

            animationEasing: 'quadraticOut',
            data: [18.0, 17.6, 22.0, 21.5, 26.7, 29.5, 28.8, 29.0],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: '{c}%'
                    }
                }
            }
        },
        {
            name: '术后第2天',
            type: 'line',
            animationDuration: 4000,

            animationEasing: 'quadraticOut',
            data: [4.2, 3.4, 4.7, 4.7, 4.3, 4.4, 5.1, 4.2],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: '{c}%'
                    }
                }
            }
        },
        {
            name: '术后第3天',
            type: 'line',
            animationDuration: 4000,

            animationEasing: 'quadraticOut',
            data: [2.7, 2.5, 2.8, 2.5, 3.2, 2.9, 3.5, 3.7],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: '{c}%',
                        position: 'bottom'
                    }
                }
            }
        }
    ]
};