option = {
    backgroundColor: '#fff',
    legend: {
        data: [],
        right: 10,
        top: 12,
        textStyle: {
            color: "#fff",
            fontSize: 12
        },
        itemWidth: 26,
        itemHeight: 10,
        // itemGap: 35
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
        bottom: '5%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['商家数', '交易笔数', '交易金额'],
        axisLine: {
            lineStyle: {
                color: '#99997',

            }
        },
        axisLabel: {
            // interval: 0,
            // rotate: 40,
            textStyle: {
                fontSize: '16'
            }
        },
    }],
    yAxis: [{
        type: 'value',
        axisLine: {
            show: 0,
            lineStyle: {
                color: '#999997'
            }
        },
        
        splitLine: {
            show: true,
            lineStyle: {
                color: '#fff'
            }
        },
        axisLabel: {}
    }],
    series: [{
            name: '原来',
            type: 'bar',
    
    tooltip: {
        trigger: 'axis',
        formatter: '%'
    },
            barWidth: '20%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1,
                        color: '#F2DCDB'
                    }, {
                        offset: 0,
                        color: '#F2DCDB'
                    }]),
                    barBorderRadius: [11, 11, 0, 0],
                },
            },
            data: [100, 100, 100]
        },
        {
            name: '现在',
            type: 'bar',
            barWidth: '20%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#F2DCDB'
                    }, {
                        offset: 1,
                        color: '#F2DCDB'
                    }]),
                    barBorderRadius: [11, 11, 0, 0]
                }

            },
            label: {
            normal: {
                show: true,
                fontSize: 18,
                fontWeight: 'bold',
                color: '#ffffff',
                position: 'top',
            }
        },
        label: {
            normal: {
                show: true,
                fontSize: 18,
                fontWeight: 'normal',
                color: '#C0504D',
                position: 'top',
            }
        },
            data: [236, 510, 199]
        },
        
      
        
    ]
};