option = {
    backgroundColor: '#fff',
    color: ['#e84832','#f8d309', '#1774ff', '#00ffff'],
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
        data: ['检查车辆','进口食品车辆', '无消毒证明', '无核酸检测报告'],
        orient: 'horizontal',
        icon: "circle",
        show: true,
        left: 'center',
        top: 25,
        itemGap:65
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
        axisLabel: {
            color: '#999',
            textStyle: {
                fontSize: 12
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#ccddff',
                type:'dotted'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
    },
    series: [
         {
            name: '检查车辆',
            type: 'line',
            smooth: true,
            data: [230,100,440,364,345,322,326],
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0.5,
                        color: 'rgba(219,51,90,0.5)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(219,51,90,0)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        },
        {
            name: '进口食品车辆',
            type: 'line',
            smooth: true,
            data: [13,1,4,44,45,322,76]
        },
        {
            name: '无消毒证明',
            type: 'line',
            smooth: true,
            data: [13,54,34,344,35,53]
        },
        {
            name: '无核酸检测报告',
            type: 'line',
            smooth: true,
            data: [13,2,2,32,123,23,136]
        }
    ]
};