option = {
    title: {
        text: '历年年收入与决算情况',
        textStyle: {
            color: '#fff',
        },
    },
    backgroundColor: '#141845',
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        //				data: ['利润', '支出', '收入']
        data: [{
                name: '利润',
                textStyle: {
                    color: '#fff'
                }
            },
            {
                name: '支出',
                textStyle: {
                    color: '#fff'
                }
            },
            {
                name: '收入',
                textStyle: {
                    color: '#fff'
                }
            },
        ],
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
    }],
    yAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017']
    }],
    series: [{
            name: '利润',
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data: [52.78, 24.75, 76.66, 110.24, 130.46, 79.95, 70.09]
        },
        {
            name: '收入',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true
                }
            },
            data: [120.28, 102.87, 141.79, 174.57, 190.45, 150.33, 133.32]
        },
        {
            name: '支出',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'left'
                }
            },
            data: [-67.5, -78.12, -65.13, -64.33, -59.99, -70.38, -63.23]
        }
    ]
};