option = {
     tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'none'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
            show: false,
            alignWithLabel: false
        },
        axisLine: {
            lineStyle: {
                color: '#4E88FF'
            },
        },
        axisLabel: {
            color: '#000',
        }
    },
    yAxis: {
        type: 'value',
        axisTick: {
            show: false,
            alignWithLabel: false
        },
        axisLine: {
            lineStyle: {
                color: '#4E88FF'
            },
        },
        axisLabel: {
            color: '#000',
        },
        splitLine: {
            show: false
        }
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        symbol: 'circle',     //设定为实心点
        symbolSize: 10,   //设定实心点的大小
        itemStyle: {
            color: '#28b3c3'
        },
        lineStyle: {
            color: '#28B3C3'
        },
        areaStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: 'rgba(13, 237, 253, 1)' // 0% 处的颜色
                }, {
                    offset: 1, color: 'rgba(13, 237, 253, 0)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }
        }
    }]
};
