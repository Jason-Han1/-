option = {
    backgroundColor: '#354061',
    color: ['#407D9C', '#67B59F', '#E8E093', '#FD6592'],
    title: {
        text: "城市网点收入统计",
        left: "4%",
        top: "4%",
        textStyle: {
            color: '#fff',
            fontSize: '22'
        },
    },
    legend: {
        data: ['北京', '上海', '深圳', '杭州'],
        right: '6%',
        top: '4%',
        textStyle: {
            color: '#DFDFDF',
        },
    },
    grid: {
        left: '4%',
        right: '6%',
        bottom: '10%',
        top: '14%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },

    xAxis: [{
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#DFDFDF",
                fontSize: 14
            },
            formatter: '{value}',
        },
        axisLine: {
            show: false,
        },

    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#DFDFDF",
                fontSize: 14
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.2)',
            }
        },
    }],
    series: [{
            name: '北京',
            type: 'bar',
            stack: '总量',
            barWidth: '60%',
            data: [110, 70, 90, 130, 210, 90, 120]
        }, {
            name: '上海',
            type: 'bar',
            stack: '总量',
            barWidth: '70%',
            data: [120, 140, 160, 130, 140, 190, 99]
        },
        {
            name: '深圳',
            type: 'bar',
            stack: '总量',
            barWidth: '70%',
            data: [90, 160, 70, 150, 90, 140, 137]
        }, {
            name: '杭州',
            type: 'bar',
            stack: '总量',
            barWidth: '70%',
            data: [60, 130, 140, 183, 103, 80, 180]
        }
    ]
};