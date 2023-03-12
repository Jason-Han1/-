option = {
    dataset: {
        source: [
            ['product', '03-19', '03-20', '03-21', '03-22', '03-23', '03-24', '03-25'],
            ['有害程序', 600, 500, 400, 600, 620, 440, 700],
            ['网络攻击', 100, 300, 500, 290, 410, 660, 300]
        ]
    },
    legend: {
        itemWidth: 8, // 图例的宽度
        itemHeight: 8, // 图例的高度
        itemGap: 60,
        icon: 'circle',
        // orient: 'vertical',
        left: 'center',
        top: 'top',
        selectedMode: false, // 取消图例上的点击事件
        textStyle: {
            color: 'rgba(24,144,255,1)',
            fontSize: '18',
            fontFamily: 'PingFangSC-Regular',
            fontWeight: '400',
            lineHeight: '25px'
        }
    },
    grid: {
        left: '10',
        right: '40',
        bottom: '10',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'line' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: {
        boundaryGap: false, // x轴从0开始到结束显示
        type: 'category',
        splitLine: {
            show: false
        }, // 去除网格线
        splitArea: {
            show: false
        }, // 保留网格区域
        axisTick: {
            show: false
        },
        axisLine: {
            onZero: false,
            show: true,
            symbolOffset: 20,
            lineStyle: {
                color: '#979797',
                width: 0.6 // 这里是为了突出显示加上的
            }
            // symbol: ['none', 'arrow'],
            // symbolSize: [6, 12],
            // symbolOffset: [0, 8]
        },
        axisLabel: {
            align: 'center',
            textStyle: {
                fontSize: 16,
                color: 'rgba(132,207,241,1)',
                fontFamily: 'PingFangSC-Regular',
                fontWeight: 400
            }
        }
    },
    yAxis: {
        interval: 200,
        max: function(value) {
            const base = Math.ceil(value.max / 200)
            return base * 200
        },
        splitLine: {
            show: false
        }, // 去除网格线
        splitArea: {
            show: false
        }, // 保留网格区域
        axisLine: {
            show: true,
            lineStyle: {
                // 轴上的线样式
                color: '#979797'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            // 轴上的数据样式
            fontSize: '16',
            fontFamily: 'PingFangSC-Regular',
            fontWeight: '400',
            color: 'rgba(132,207,241,1)',
            lineHeight: '25px'
        }
    },
    series: [{
            type: 'line',
            showSymbol: true, // 显示折线拐点
            seriesLayoutBy: 'row',
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
                color: 'rgba(186,231,255,1)',
                width: '6px',
                height: '6px'
            }, // 线条样式
            lineStyle: {
                color: 'rgba(24, 159, 255, 0.3)'
            },
            areaStyle: {
                color: 'rgba(24, 159, 255, 0.3)'
            },
            z: 10
        },
        {
            type: 'line',
            showSymbol: true, // 显示折线拐点
            seriesLayoutBy: 'row',
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
                color: 'rgba(250,204,20,1)',
                width: '6px',
                height: '6px'
            }, // 线条样式
            lineStyle: {
                // 折线样式
                color: 'rgba(24, 159, 255, 0.3)'
            },
            areaStyle: {
                // 区域样式
                color: 'rgba(24, 159, 255, 0.3)'
            }
        }
    ]
};