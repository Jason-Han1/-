option = {
    backgroundColor: "#FFFFFF",
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['赞成', '中立', '不赞成']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,

    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['组织能力指数', '员工能力', '员工治理', '员工思维']
    },
    series: [{
            name: '赞成',
            type: 'bar',
            stack: '总量',
            barWidth: 25,
            label: {
                show: true,
                position: 'insideRight'
            },
            itemStyle: {
                color: "#698ACF"
            },
            data: [43.8,32.4,33.8,35.6]
        },
        {
            name: '中立',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight',

            },
            itemStyle: {
                color: "#D8E3F5"
            },
            data: [43.2,33.7,32.6,36.4]
        },
        {
            name: '不赞成',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            itemStyle: {
                color: "#FFD65A"
            },
            data: [13,33.8,33.6,28]
        },

    ]
};