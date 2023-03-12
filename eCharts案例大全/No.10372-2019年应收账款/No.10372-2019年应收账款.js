option = {
    backgroundColor: "#113258",
    title: {
        text: '2019年应收账款', // '标题',
        subtext: '截止：2019年08月15日，当年累计：61,717,827.30，往年累计：172,111,129.30，单位：元', // '副标题',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        type: 'scroll',
        orient: 'horizontal',
        x: 'center', //'center',
        y: 'bottom', // 'bottom',
        data: // ['图标数据']
            [{
                    name: '当年总表'
                },
                {
                    name: '当年户表'
                },
                {
                    name: '往年总表'
                },
                {
                    name: '往年户表'
                },
                {
                    name: '滚动收费率',
                    icon: 'circle'
                },
                {
                    name: '滚动收费率(含往年欠费)',
                    icon: 'circle'
                },
            ],
        textStyle: {
            color: "#333"
        },
        selected: {
            '滚动收费率(含往年欠费)': false
        }
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            magicType: {
                type: ['line', 'bar']
            },
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category', // 'category',
        boundaryGap: true, // false,
        data: [
            '1 月', '2 月', '3 月', '4 月', '5 月', '6 月', '7 月', '8 月', '9 月', '10 月', '11月', '12 月'
        ],
        axisLabel:{
            textStyle:{
                fontSize:16
            }
        }
    },
    yAxis: [{
            type: 'value',
            axisLabel: {
                formatter: function(value, index) {
                    return (value) + "%"
                }
            },
            min: function(value) {
                return parseInt(value.min / 10) * 10
            },
            splitLine: {
                lineStyle: {
                    type: 'solid'
                }
            }
        },
        {
            type: 'value',
            axisLabel: {
                formatter: function(value, index) {
                    return (value / 100000000) + "亿"
                }
            },
            splitLine: {
                lineStyle: {
                    type: 'dotted'
                }
            }
        },
    ],
    series: [{
            type: 'bar',
            name: '当年总表',
            stack: '当年应收',
            yAxisIndex: 1,
            data: [
                1940793.4000, 5181951.4500, 6787384.8500, 9114696.5000, 9885388.1400, 11569242.1000, 12097967.8500, 45923869.7500
                , 9885388.1400, 11569242.1000, 12097967.8500, 45923869.7500
            ]
        }, {
            type: 'bar',
            name: '当年户表',
            stack: '当年应收',
            yAxisIndex: 1,
            data: [
                4590133.0000, 5707083.9000, 7947232.3000, 7249382.9500, 10277821.9000, 8992549.0800, 11310780.7500, 15793957.5500
                , 10277821.9000, 8992549.0800, 11310780.7500, 15793957.5500
            ]
        }, {
            type: 'bar',
            name: '往年总表',
            stack: '往年应收',
            yAxisIndex: 1,
            data: [
                128874643.4350, 128814888.4850, 128719478.3850, 128628582.5850, 128564176.7000, 128520687.0500, 128459506.1000, 128418818.2000
                , 128564176.7000, 128520687.0500, 128459506.1000, 128418818.2000
            ]
        }, {
            type: 'bar',
            name: '往年户表',
            stack: '往年应收',
            yAxisIndex: 1,
            data: [
                46639739.8000, 45795603.4500, 45171471.3500, 44703774.6000, 44364801.3000, 70667042.8300, 70669588.3000, 43692311.1000
                , 44364801.3000, 70667042.8300, 70669588.3000, 43692311.1000
            ]
        },{
            type: 'bar',
            name: '往年户表',
            stack: '往年实收',
            yAxisIndex: 1,
            data: [
                46639739.8000, 45795603.4500, 45171471.3500, 44703774.6000, 44364801.3000, 70667042.8300, 70669588.3000, 43692311.1000
                , 44364801.3000, 70667042.8300, 70669588.3000, 43692311.1000
            ]
        }, 
        {
            type: 'line',
            name: '滚动收费率',
            stack: '',
            yAxisIndex: 0,
            data: [
                93.90, 94.02, 94.72, 95.38, 95.32, 96.26, 96.23, 88.16, 95.32, 96.26, 96.23, 88.16
            ]
        }, {
            type: 'line',
            name: '滚动收费率(含往年欠费)',
            stack: '',
            yAxisIndex: 0,
            data: [
                4.15, 7.40, 10.89, 14.03, 17.14, 20.03, 23.15, 23.13, 17.14, 20.03, 23.15, 23.13
            ]
        }


    ]
};