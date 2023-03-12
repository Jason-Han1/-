option = {
    backgroundColor: '#fff',
    title: {
        text: "订单量（个）",
        left: "18px",
        top: "0",
        textStyle: {
            color: "#999",
            fontSize: 12,
            fontWeight: '400'
        }
    },
    color: ['#73A0FA', '#73DEB3', '#FFB761'],
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
        bottom: '24',
        top: '75',
        containLabel: true
    },
    legend: {
        data: ['订单总笔数', '钱包笔数', '借呗笔数'],
        orient: 'horizontal',
        icon: "rect",
        show: true,
        left: 20,
        top: 25,
    },
    xAxis: {
        type: 'category',
        data: ['01-01', '01-02', '01-03', '01-04', '01-05', '01-06', '01-07'],
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
    },
    yAxis: {
        type: 'value',
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
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
    },
    series: [{
            name: '订单总笔数',
            type: 'line',
            smooth: true,
            data: [13,1,4,44,45,322,76]
        },
        {
            name: '钱包笔数',
            type: 'line',
            smooth: true,
            data: [13,54,34,344,35,53]
        },
        {
            name: '借呗笔数',
            type: 'line',
            smooth: true,
            data: [13,2,2,32,123,23,136]
        }
    ]
};