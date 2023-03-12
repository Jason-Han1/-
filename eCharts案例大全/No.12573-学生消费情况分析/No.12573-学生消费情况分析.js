option = {
    backgroundColor: '#141845',
    title: {
        text: '学生消费情况分析',
        textStyle: {
            color: '#fff',
        },
    },
    tooltip: {
        trigger: 'item',
        position: '20',
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        top: 25,
        data: [{
                name: '上学期',
                textStyle: {
                    color: '#fff'
                }
            },
            {
                name: '下学期',
                textStyle: {
                    color: '#fff'
                }
            }
        ],
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['2012', '2013', '2014', '2015'],
        axisPointer: {
            type: 'shadow'
        },
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        }
    }],
    yAxis: [{
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
    }],
    series: [{
            name: '上学期',
            type: 'bar',
            data: [556, 578, 560, 589],
            itemStyle: {
                normal: {
                    color: "#349CFD"
                },
            }
        },
        {
            name: '下学期',
            type: 'bar',
            stack: '广告',
            data: [512, 569, 548, 602],
            itemStyle: {
                normal: {
                    color: "#53D769"
                },
            }
        }
    ]
};