app.title = '正负条形图';

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['成灾比', '灾情', '警情']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'value'
    }],
    yAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        data: ['中队一', '中队二', '中队三', '中队四', '中队五', '中队六', '中队七']
    }],
    series: [{
            name: '成灾比',
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: function(v) {
                        return (v.value + '%');
                    }
                }
            },
            data: [20, 17, 4, 6, 8, 11, 15]
        },
        {
            name: '警情',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true
                }
            },
            data: [320, 302, 341, 374, 390, 450, 420]
        },
        {
            name: '灾情',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    formatter: function(v) {
                        return (v.value * -1);
                    }
                }
            },
            data: [-12, -32, -11, -34, -19, -23, -10]
        }
    ]
};