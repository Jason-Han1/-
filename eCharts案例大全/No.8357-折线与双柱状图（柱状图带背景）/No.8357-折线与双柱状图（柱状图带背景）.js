option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
        }
    },
    legend: {
        data: ['蒸发量', '降水量', '平均温度']
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '水量',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value} ml'
            }
        },
        {
            type: 'value',
            name: '温度',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
                formatter: '{value} °C'
            }
        }
    ],
    series: [
        {
            // 左侧背景
            name: '',
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0.2)'
                }
            },
            animationDuration: 0,
            symbolRepeat: true,
            symbol: 'rect',
            symbolSize: [10,10],
            symbolBoundingData: 250,
            symbolOffset: [-10, 0],
            data: [250,250,250,250,250,250,250,250,250,250,250,250],
            barGap: 50,
            barCategoryGap: 0,
            z: -11,
            animationEasing: 'elasticOut',
            animationDelay: function(dataIndex, params) {
                return params.index * 30;
            }
        },
        {
            // 右侧背景
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0.2)'
                }
            },
            animationDuration: 0,
            symbolRepeat: true,
            symbol: 'rect',
            symbolSize: [10,10],
            symbolBoundingData: 250,
            symbolOffset: [10, 0],
            data: [250,250,250,250,250,250,250,250,250,250,250,250],
            barGap: 50,
            barCategoryGap: 0,
            z: -11,
            animationEasing: 'elasticOut',
            animationDelay: function(dataIndex, params) {
                return params.index * 30;
            }
        },
        { // 左侧方块
            name: '蒸发量',
            type: 'pictorialBar',
            symbol: 'rect',
            symbolOffset: [-10, 0],
            z: -11,
            symbolRepeat: true,
            symbolSize: [10,10],
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            // barGap: 50,
            barCategoryGap: 100,
            animationEasing: 'elasticOut',
            animationDelay: function(dataIndex, params) {
                return params.index * 30;
            }
        },
        
        { // 右侧方块
            name: '降水量',
            type: 'pictorialBar',
            symbol: 'rect',
            symbolOffset: [10, 0],
            z: -11,
            symbolRepeat: true,
            symbolSize: [10,10],
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            // barGap: 50,
            barCategoryGap: 100,
            animationEasing: 'elasticOut',
            animationDelay: function(dataIndex, params) {
                return params.index * 30;
            }
        },
        
        
        {
            name: '平均温度',
            type: 'line',
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ]
};
