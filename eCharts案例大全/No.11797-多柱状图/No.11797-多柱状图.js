option = {
    color: ['#1da1f2', '#fa7070', '#fcbb07', '#90dd75', '#8fa6ec', '#157efb'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        itemWidth: 20, //图例的宽度
        itemHeight: 8, //图例的高度
        itemGap: 40,
        left: '55',
        top: 'top',
        icon: 'rect',
        selectedMode: false, //取消图例上的点击事件
        data: ['呼气未呼尽', '重复性差', '起始犹豫', '未吸满气就开始吹', '存在咳嗽','11'],
    },
    grid: {
        left: '30',
        right: '30',
        bottom: '20',
        containLabel: true
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
    },
    calculable: true,
    xAxis: [{
        splitLine: {
            show: false
        }, //去除网格线
        splitArea: {
            show: false
        }, //保留网格区域
        axisLine: {
            show: true,
            lineStyle: { //轴上的线样式
                color: '#979797',
                width: 0.6, //这里是为了突出显示加上的
            },
        },
        axisTick: {
            show: false
        },
        axisLabel: { //轴上的数据样式
            color: '#393C40',
        },
        data: ['1月', '2月', '3月', '4月', '5月'],
    }],
    yAxis: [{
        // type: 'value',
        splitLine: {
            show: false
        }, //去除网格线
        splitArea: {
            show: false
        }, //保留网格区域
        axisLine: {
            show: true,
            lineStyle: { //轴上的线样式
                color: '#979797',
                width: 0.6, //这里是为了突出显示加上的
            },
        },
        axisTick: {
            show: false
        },
        axisLabel: { //轴上的数据样式
            color: '#393C40',
        }
    }],
    series: [
        {
            name: '呼气未呼尽',
            type: 'bar',
            barWidth: 12,// 柱形的宽度
            barGap: 0,
            data: [320, 332, 301, 334, 390]
        },
        {
            name: '重复性差',
            type: 'bar',
            barWidth: 12,// 柱形的宽度
            barGap: 0,
            data: [220, 182, 191, 234, 290]
        },
        {
            name: '起始犹豫',
            type: 'bar',
            barWidth: 12,// 柱形的宽度
            barGap: 0,
            data: [150, 232, 201, 154, 190]
        },
        {
            name: '未吸满气就开始吹',
            type: 'bar',
            barWidth: 12,// 柱形的宽度
            barGap: 0,
            data: [98, 77, 101, 99, 40]
        },
        {
            name: '存在咳嗽',
            type: 'bar',
            barWidth: 12,// 柱形的宽度
            barGap: 0,
            data: [98, 77, 101, 99, 40]
        },
        {
            name: '11',
            type: 'bar',
            barWidth: 12,// 柱形的宽度
            barGap: 0,
            data: [98, 77, 101, 99, 40]
        },
        {
            type:'line',
            data:[666,333,234,56],
            symbol:'circle',
            symbolSize:'5',
            name: '总计',
        }
    ]
}