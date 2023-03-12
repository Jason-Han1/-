option = {
    color: ['#004cad', '#2c8cff', '#f5a623'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        backgroundColor: 'rgba(245, 245, 245, 0.8)',
        textStyle: {
            fontSize: 12,
            color: '#333333'
        },
        padding: 10,
    },
    legend: {
        show: true,
        bottom: '30px',
        icon: 'circle',
        data: [{
            name: '销售总额',
            textStyle: {
                color: '#004cad'
            },
        }, {
            name: '毛利总额',
            textStyle: {
                color: '#2c8cff'
            },
        }, {
            name: '店均销售',
            textStyle: {
                color: '#f5a623'
            },
        }],
    },
    grid: {
        left: '2%',
        right: '5%',
        containLabel: true
    },
    xAxis: [{
        name: '店龄',
        type: 'category',
        data: ['0-1', '1-2', '2-3', '3-4', '4-5', '5-6', '6-7', '7-8', '8-9', '9-10'],
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        nameTextStyle: {
            fontSize: 14,
        },
    }],
    yAxis: [{
        name: '销售额：元',
        nameTextStyle: {
            color: '#666666',
            fontSize: 14,
        },
        show: true,
        type: 'value',
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#485465'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#eeeeee',
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#eeeeee',
            }
        },
    }],
    series: [{
        name: '销售总额',
        type: 'bar',
        barWidth: 19,
        data: [150, 232, 201, 154, 190, 330, 410, 190, 330, 410]
    }, {
        name: '毛利总额',
        type: 'bar',
        barWidth: 19,
        data: [220, 182, 191, 234, 290, 330, 310, 190, 330, 410]
    }, {
        name: '店均销售',
        type: 'line',
        symbol: 'circle',
        symbolSize: [12, 12],
        lineStyle: {
            normal: {
                width: 0
            },
        },
        // borderWidth: 0,
        data: [120, 132, 101, 134, 90, 230, 210, 190, 330, 410]
    }, ]
};