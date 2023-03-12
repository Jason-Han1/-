option = {
    backgroundColor: '#ffffff',
    title: {
        text:"车型流量统计",
        left: 'center',
        top: '1%',
        textStyle: {
            fontSize: 20
        }
    },
    color: ['#4fa8f9', '#6ec71e', '#f56e6a'],
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
        data: [
            "入口车流量",
            "出口车流量",
            "出口通行费"
        ]
    },
    xAxis: [{
        type: 'category',
        data: [
            "一型客车",
            "二型客车",
            "三型客车",
            "四型客车",
            "一型货车",
            "二型货车",
            "三型货车",
            "四型货车",
            "五型货车",
            "六型货车",
            "一型专项作业车",
            "二型专项作业车",
            "三型专项作业车",
            "四型专项作业车",
            "五型专项作业车",
            "六型专项作业车"
        ],
        axisTick: {
            alignWithLabel: true
        },
        axisLabel: {
            fontSize: 12,
            rotate: 30,
            margin: '30',
            align: 'center'
        }
    }],
    yAxis: [{
        type: 'value',
        name: '通行车次'
    }, {
        type: 'value',
        name: '金额（元）'
    }, ],
    barMaxWidth: '20',
    label: {
        show: false,
        position: 'top'
    },
    series: [{
        name: "入口车流量",
        type: 'bar',
        data: [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1]
    }, {
        name: "出口车流量",
        type: 'bar',
        data: [2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2]
    }, {
        name: '出口通行费',
        type: "line",
        yAxisIndex: 1,
        data: [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1]
    }]
}