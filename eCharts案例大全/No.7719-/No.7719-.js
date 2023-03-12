option = {
    backgroundColor:'#00092E',
    legend: {
        textStyle:{
            color:'#fff'
        }
    },
    xAxis: {
        type: 'category',
        data: ['2013', '2014', '2015', '2016'],
        axisLabel:{
            color:'#fff'
        },
        axisLine:{
            lineStyle:{
                color:'#fff'
            }
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        max:400,
        axisLabel:{
            color:'#fff'
        },
        axisLine:{
            lineStyle:{
                color:'#fff'
            }
        },
        splitLine: {
            show: false
        }
    },
    series: [{ // 背景色
            name: '实体库',
            type: 'pictorialBar',
            stack: '总量',
            symbol: 'fixed',
            symbolSize: [30, 5],
            symbolMargin: 2,
            symbolRepeat: 'repeat',
            symbolBoundingData: 300,
            z: -10,
            data: [200, 100, 300, 300],
            itemStyle: {
                normal: {
                    color: '#32D8F2'
                }
            }
        },
        { // 替代颜色
            type: 'pictorialBar',
            name: '虚拟库',
            symbol: 'fixed',
            stack: '总量',
            symbolSize: [30, 5],
            symbolMargin: 2,
            symbolRepeat: 'repeat',
            barCategoryGap: '40%',
            z: -1,
            data: [26, 36, 16, 46],
            itemStyle: {
                normal: {
                    barBorderRadius: [10, 20, 30, 40],
                    color: '#3EAB15'
                }
            }
        },
        { // 替代颜色
            type: 'pictorialBar',
            name: '',
            symbol: 'fixed',
            stack: '总量',
            symbolSize: [30, 5],
            symbolMargin: -2,
            symbolRepeat: 'repeat',
            barCategoryGap: '40%',
            z: -11,
            data: [390,390,390,390],
            itemStyle: {
                normal: {
                    barBorderRadius: [30, 30, 30, 40],
                    color: '#102028'
                }
            }
        },
        {
            name: '',
            type: 'bar',
            barGap: '-100%',
            barWidth: 50,
            label: {
                normal: {
                    color: '#00f3fb'
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#0E214D',
                    borderWidth: '2',
                    barBorderRadius: 8,
                    color: '#000',
                }
            },
            z: -13,
            data: [400,400,400,400,400]
        }
    ]
};