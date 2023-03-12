option = {
    backgroundColor: '#fff',
    title: {
        // text: "订单量（个）",
        left: "18px",
        top: "0",
        textStyle: {
            color: "#999",
            fontSize: 12,
            fontWeight: '400'
        }
    },
    color: ['#5B8FF9', '#FFA18E', '#5AD8A6'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            },
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    grid: {
        left: '25',
        right: '25',
        bottom: '14',
        top: '45',
        containLabel: true
    },
    legend: {
        data: ['订单总笔数', '钱包笔数', '借呗笔数'],
        left: '20px',
        top: 0,
        icon:'path://M0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z',
        textStyle: {
            color: "#333"
        },
        itemWidth: 10,
        itemHeight: 10,
    },
    xAxis: {
        type: 'category',
        data: ['01-01', '01-02', '01-03', '01-04', '01-05', '01-06', '01-07'],
        splitLine: {
            show: false
        },
        axisTick: {
            show: true,
            alignWithLabel: true,
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(0,0,0,0.5)'
            }
        },
    },
    yAxis: {
        type: 'value',
        max: '100',
        // max: max_value>=100? max_value + 100: max_value+10,
        // max: max_value > 100 ? max_value * 2 : max_value + 10,
        // interval: 10,
        // nameLocation: "center",
        axisLabel: {
            color: '#999',
            textStyle: {
                fontSize: 12
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#F3F4F4'
            }
        },
        axisLine: {
            show: false
        },
    },
    series: [{
            name: '订单总笔数',
            type: 'line',
            smooth: true,
            data: [10,20,30,44,50,65,76]
        },
        {
            name: '钱包笔数',
            type: 'line',
            smooth: true,
            data: [13,54,34,44,35,53]
        },
        {
            name: '借呗笔数',
            type: 'line',
            smooth: true,
            data: [13,2,2,32,43,23,23]
        }
    ]
};
