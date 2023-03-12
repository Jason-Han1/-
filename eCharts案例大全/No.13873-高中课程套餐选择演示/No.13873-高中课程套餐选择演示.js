option = {

    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['词汇', '阅读理解', '完形填空', '语法填空', '短文改错', '英语写作']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['三人班', '一对一']
    },
    series: [{
        name: '词汇',
        type: 'bar',
        stack: '总量',
       
        label: {
            normal: {
                show: true,
                position: 'insideRight'
            }
        },
        data: [1500, 2000]
    }, {
        name: '阅读理解',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: true,
                position: 'insideRight'
            }
        },
        data: [3500, 4000]
    }, {
        name: '完形填空',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: true,
                position: 'insideRight'
            }
        },
        data: [3500, 4000]
    }, {
        name: '语法填空',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: true,
                position: 'insideRight'
            }
        },
        data: [1500, 2000]
    }, {
        name: '短文改错',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: true,
                position: 'insideRight'
            }
        },
        data: [1500, 2000]
    }, {
        name: '英文写作',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: true,
                position: 'insideRight'
            }
        },
        data: [1500, 2000]

    }]


};


// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
window.onresize = myChart.resize;