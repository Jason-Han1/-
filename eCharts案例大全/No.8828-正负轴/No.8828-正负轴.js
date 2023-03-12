option = {
    title: {
        text: '*负数为赔偿',
        left: 'right',
        top: 10,
        textStyle: {
            color: '#f00',
            fontWeight: 'normal',
            fontSize: 14
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        top: '10%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'value',
        position: 'top',
        axisLabel: {
            show: true,
            interval: 'auto',
        },
        axisLine: {
            show: false
        }
    }],
    yAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        data: ['浏阳市', '芙蓉区', '天心区', '岳麓区', '望城区', '宁乡县', '开福县']
    }],
    series: [

        {
            name: '收入',
            type: 'bar',
            stack: '总量',
            barWidth: '20',
            label: {
                show: true,
                position: 'right'
            },
            data: [320, 302, 341, 374, 390, 450, 420],
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 15, 15, 0],
                    color: {
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        type: "linear",
                        global: false,
                        colorStops: [{
                            offset: 0,
                            color: "#008EDA"
                        }, {
                            offset: 1,
                            color: "#00B8AE"
                        }]
                    }
                }
            }
        },
        {
            name: '支出',
            type: 'bar',
            stack: '总量',
            barWidth: '20',
            label: {
                show: true,
                position: 'left'
            },
            data: [-120, -132, -101, -134, -190, -230, -210],
            itemStyle: {
                normal: {
                    barBorderRadius: [15, 0, 0, 15],
                    color: {
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        type: "linear",
                        global: false,
                        colorStops: [{
                            offset: 0,
                            color: "#F94F6C"
                        }, {
                            offset: 1,
                            color: "#00B8AE"
                        }]
                    }
                }
            }
        }
    ]
};