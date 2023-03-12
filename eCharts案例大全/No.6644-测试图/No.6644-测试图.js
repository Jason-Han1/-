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
        containLabel: true
    },
    xAxis: {
        type: 'value',
        max:100
    },
    yAxis: {
        type: 'category',
        
        data: ['战略接受度 ', '战略合适度', ]
    },
    series: [{
            name: '赞成',
            type: 'bar',
            stack: '总量',
            barWidth: 50,
            label: {
                show: true,
                position: 'insideRight'
            },
            itemStyle: {
                color: "#698ACF"
            },
            data: [33.4,56.3]
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
            data: [33.1,43.8]
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
            data: [33.5,]
        },

    ]
};