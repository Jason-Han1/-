option = {

    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    backgroundColor: 'rgba(0,0,0,0.4)',
    color: ['#12fffe', '#ffcb4d', '#f58f23', '#e26652'],
    legend: {
        data: ['蓝', '黄', '橙', '红'],
        bottom: '2%',
        right: '5%',
        icon: 'circle',
        itemWidth: 26,
        itemHeight: 26,
        textStyle: {
            color: '#c6e5ff',
            fontSize: 32
        }
    },
    grid: {
        left: '3%',
        right: '5%',
        bottom: '10%',
        top: '5%',
        containLabel: true
    },
    xAxis: [{
        type: 'value',
        show: true
    }, {
        type: 'value',
        show: false
    }],
    yAxis: [{
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#fff',
            fontSize: 24,
            fontWeight: 400,
            interval: 0
        },
        offset: 10,
        data: ['安监', '卫计委', '水利部', '名航', '海洋局'],
    }],
    series: [{
            name: '蓝',
            type: 'bar',
            barWidth: 40,
            stack: '总量',
            data: [320, 302, 301, 334, 390]
        },
        {
            name: '黄',
            type: 'bar',
            barWidth: 40,
            stack: '总量',
            data: [120, 132, 101, 134, 90]
        },
        {
            name: '橙',
            type: 'bar',
            stack: '总量',
            barWidth: 40,
            data: [220, 182, 191, 234, 290]
        },
        {
            name: '红',
            type: 'bar',
            barWidth: 40,
            stack: '总量',
            data: [150, 212, 201, 154, 190]
        }
    ]
};