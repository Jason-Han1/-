option = {
    color: ['#ff0024', '#ffe475', '#ff8d28', '#88460b'],
    legend: {
        top: '8%',
        data: ['严重隐患', '轻微隐患', '整改中', '已整改'],
        textStyle: {
            color: '#659ab2',
            fontSize: 20
        }
    },
    grid: { //图表的位置
        top: '20%',
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
    },
    yAxis: [{
        type: 'value',
        axisLabel: {
            show: true,
            interval: 'auto',
            formatter: '{value} ',
            textStyle: {
                color: '#06c9c4',
                fontSize: 20
            },
        },
        axisLine: {
            lineStyle: {
                color: "#06c9c4",
                width: 2
            }
        },

        splitLine: {
            show: false,
        },
        show: true,
        axisTick: {
            show: false
        },

    }],
    xAxis: [{
        axisTick: {
            show: false
        },
        type: 'category',
        axisLine: {
            lineStyle: {
                color: "#06c9c4",
                width: 2
            }
        },
        axisLabel: {
            interval: 0,
            show: true,
            splitNumber: 15,
            textStyle: {
                color: '#06c9c4',
                fontSize: 20
            },

        },
        data: ['上海', '杭州', '苏州', '郑州', '南京', '重庆', '西安', '舟山'],
    }],
    series: [{
            name: '整改中',
            type: 'bar',
            color: '#F6931C',
            stack: 'sum1',
            barWidth: '20px',
            data: [20, 30, 20, 30, 20, 30, 20, 30]

        },
        {
            name: '已整改',
            type: 'bar',
            color: '#FFD52E',
            stack: 'sum1',
            barWidth: '20px',
            data: [9, 30, 9, 60, 70, 20, 59, 20]

        },
        {
            name: '严重隐患',
            type: 'bar',
            stack: 'sum',
            barWidth: '20px',
            data: [20, 30, 20, 30, 20, 30, 20,8]

        },
        {
            name: '轻微隐患',
            type: 'bar',
            barWidth: '20px',
            stack: 'sum',
            data: [9, 30, 9, 60, 70, 20, 59, 20],

        }
    ]
};