option = {
    backgroundColor: '#ffffff',
    title: {
        text: '当日门架车型交易量',
        left: 'center',
        top: 2,
        textStyle: {
            fontSize: 20
        },
    },
    color: ['#2194ff', ],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    legend: {
        left: 'center',
        bottom: '2%',
        data: ['去年', '今年', ]
    },
    xAxis: [{
        type: 'category',
        data: ["一型客车", "二型客车", "三型客车", "四型客车", "一型货车", "二型货车", "三型货车", "四型货车", "五型货车", "六型货车", "一型专项作业车", "二型专项作业车", "三型专项作业车", "四型专项作业车"],
        axisTick: {
            alignWithLabel: true
        }
    }],
    yAxis: [{
        type: 'value'
    }],
    barMaxWidth: '30',
    label: {
        show: true,
        position: 'top'
    },
    series: [{
        name: '今年',
        type: 'bar',
        data: [10, 52, 90, 70, 90, 70, 90, 10, 52, 90, 70, 90, 70, 90]
    }, ]
};