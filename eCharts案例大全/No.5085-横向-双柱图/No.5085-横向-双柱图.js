var yName = [
    '学前教育系',
    '初等教育系',
    '音乐舞蹈系',
    '语言文学系',
    '美术系',
    '健康管理系',
    '思政教育部',
]
var data = [
    [100, 150, 580, 850, 500, 3000, 400],
    [100, 150, 580, 850, 500, 3000, 400]
]


var colorArry = [
    new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
        offset: 0,
        color: 'rgba(0, 192, 240, 1)' // 0% 处的颜色
    }, {
        offset: 1,
        color: 'rgba(101, 105, 255, 1)' // 100% 处的颜色
    }], false),
    new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
        offset: 0,
        color: 'rgba(27, 223, 202, 1)' // 0% 处的颜色
    }, {
        offset: 1,
        color: 'rgba(8, 222, 149, 1)' // 100% 处的颜色
    }], false)
]


option = {
    color: colorArry,
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        }
    },
    grid: {
        left: '2%',
        right: '2%',
        bottom: '3%',
        top: "10%",
        containLabel: true
    },
    legend: {
        data: ['学期1', '学期2'],
        left: 0,
        top: 0,
        textStyle: {
            color: 'rgba(195, 240, 255, 1)'
        },
    },
    calculable: true,
    xAxis: [{
        type: 'value',
        boundaryGap: [0, 0.01],
        axisLabel: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        splitLine: {
            show: false,
        }
    }],
    yAxis: [{
        type: 'category',
        name: "",
        data: yName,
        axisLabel: {
            textStyle: {
                fontSize: 13,
                color: 'rgba(111, 132, 189, 1)'
            }
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
    }],
    series: [{
            name: '学期1',
            type: 'bar',
            barWidth: 5,
            data: data[0],
        },
        {
            name: '学期2',
            type: 'bar',
            barWidth: 5,
            data: data[1]
        }
    ]
};