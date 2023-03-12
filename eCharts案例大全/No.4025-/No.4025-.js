var colors = ['#5793f3', '#d14a61', '#675bba'];

option = {
    color: colors,

    feature: {

        saveAsImage: {

            show: true,

            excludeComponents: ['toolbox'],

            pixelRatio: 2

        }

    },


    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        right: '20%'
    },
    toolbox: {
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    legend: {
        data: ['Admission', 'Graduation', 'employment']
    },
    xAxis: [{
        axisLabel: {
            interval: 0, //横轴信息全部显示
            rotate: -30, //-30度角倾斜显示
        },
        data: ["US", "China", "UK", "Australia", "Canada", "India", "Russia", "Germany", "France", "Nigeria", "Cambodia", "South Africa", "Sudan", "Mongolia"]
    }],
    yAxis: [{
            type: 'value',
            name: '',
            min: 0,
            max: 100,
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: colors[0]
                }
            },
            axisLabel: {
                formatter: '{value}%'
            }
        },

        {
            type: 'value',
            name: '',
            min: 0,
            max: 100,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: colors[2]
                }
            },
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [{
            name: 'Admission',
            type: 'bar',
            yAxisIndex: 1,
            data: [53.94,
                69.1,
                25.5,
                30.98,
                43.91,
                8.5,
                59.22,
                21.48,
                22.95,
                10.58,
                20.53,
                24.56,
                13.4,
                20.6
            ]
        },
        {
            name: 'Graduation',
            type: 'bar',
            yAxisIndex: 1,
            data: [32.76,
                60.29,
                15.31,
                18.52,
                22.67,
                4.85,
                24.74,
                13.14,
                10.6,
                8.33,
                18.55,
                10.32,
                8.87,
                18.06
            ]
        },
        {
            name: 'employment',
            type: 'line',
            yAxisIndex: 1,
            data: [60.7,
                87.3,
                60.0,
                59.8,
                51.6,
                57.1,
                41.8,
                61.2,
                46.2,
                78.7,
                90.4,
                42.0,
                66.2,
                87.7

            ]
        }
    ]
};