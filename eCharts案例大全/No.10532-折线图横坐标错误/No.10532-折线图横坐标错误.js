    option = {
        tooltip: {
            trigger: 'axis'
        },
        axisPointer: {
            link: {
                xAxisIndex: 'all'
            },
            label: {
                backgroundColor: '#777'
            }
        },
        legend: {
            data: [{
                    name: 'S',
                },
                {
                    name: 'L'
                },
                {
                    name: 'U'
                },
                {
                    name: 'R'
                },
                {
                    name: 'B'
                },
                {
                    name: 'T'
                },
                {
                    name: '阀值(点检)',
                    icon: 'roundRect',
                    left: 100
                },
                {
                    name: '阀值(交换)',
                    icon: 'roundRect'
                }
            ],
            textStyle: {
                fontSize: 16
            },
            left: '7%',
            top: '-1%',
            itemGap: 28,
            itemWidth: 40
        },
        grid: {
            top: '22%',
            left: '7%',
            right: '5%',
            bottom: '6%',
            containLabel: true
        },
        toolbox: {},
        xAxis: {
            type: 'value',
            name: '时间(h)',
            nameLocation: 'center',
            nameGap: 25, //name距离轴的距离
            //max:36000,
            axisLine: {
                onZero: true
            }, //是否和另一个轴同一个0刻度
            splitNumber: 6,
            axisLabel: {
                fontSize: 14
            },
            nameTextStyle: {
                color: 'black',
                fontSize: 14,
                fontWeight: 'bold'
            },
        },
        yAxis: {
            type: 'value',
            name: '交换时间(h)',
            nameLocation: 'center',
            nameGap: 60,
            onZero: false,
            max: 36000,
            //min:-5000,
            axisLine: {
                onZero: true
            },
            splitNumber: 6,
            axisLabel: {
                showMinLabel: false, //最小刻度值不显示
                fontSize: 14
            },
            nameTextStyle: {
                color: 'black',
                fontSize: 14,
                fontWeight: 'bold'
            },
        },
        calculable: true,
        series: [{
                type: 'line',
                name: '阀值(点检)',
                itemStyle: {
                    normal: {
                        color: '#FFA042'
                    }
                },
                markLine: {
                    label: {
                        show: false
                    }, //警示线标注值不显示
                    data: [{
                        name: '阀值(点检)',
                        yAxis: 1000,
                        lineStyle: {
                            width: 2,
                            color: '#FFA042'
                        },
                    }],
                    symbol: [ //标示线左右两边没有样式
                        'none', 'none'
                    ]
                }
            },
            {
                type: 'line',
                name: '阀值(交换)',
                itemStyle: {
                    normal: {
                        color: '#D94600'
                    }
                },
                markLine: {
                    label: {
                        show: false
                    }, //警示线标注值不显示
                    data: [{
                        name: '阀值(交换)',
                        yAxis: 0,
                        lineStyle: {
                            width: 2,
                            color: '#D94600'
                        }
                    }],
                    symbol: [ //标示线左右两边没有样式
                        'none', 'none'
                    ]
                }
            },
            {
                name: 'S',
                type: 'line',
                
                data: [
                    [0, 35000],
                    [1200, 34000],
                    [1700, 32000],
                    [2100, 30000],
                    [2500, 26000],
                    [2900, 23000],
                    [3400, 16000]
                ]
            },
            {
                name: 'L',
                type: 'line',
              
                data: [
                    [0, 35000],
                    [1200, 34000],
                    [1700, 32000],
                    [2100, 30000],
                    [2500, 26000],
                    [2900, 23000],
                    [3400, 16000]
                ]
            },
            {
                name: 'U',
                type: 'line',
            
                data: [
                    [0, 35000],
                    [1200, 34000],
                    [1700, 32000],
                    [2100, 30000],
                    [2500, 26000],
                    [2900, 23000],
                    [3400, 16000]
                ]
            },
            {
                name: 'R',
                type: 'line',
             
                data: [
                    [0, 35000],
                    [1200, 34000],
                    [1700, 32000],
                    [2100, 30000],
                    [2500, 26000],
                    [2900, 23000],
                    [3400, 16000]
                ]
            },
            {
                name: 'B',
                type: 'line',
              
                data: [
                    [0, 35000],
                    [1200, 34000],
                    [1700, 32000],
                    [2100, 30000],
                    [2500, 26000],
                    [2900, 23000],
                    [3400, 16000]
                ]
            },
            {
                name: 'T',
                type: 'line',
            
                data: [
                    [0, 35000],
                    [1200, 34000],
                    [1700, 32000],
                    [2100, 30000],
                    [2500, 26000],
                    [2900, 23000],
                    [3400, 16000]
                ]
            }
        ]
    };