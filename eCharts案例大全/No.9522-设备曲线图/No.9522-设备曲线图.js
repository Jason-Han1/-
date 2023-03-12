// Generate data
var category = ['1号', '2号', '3号', '4号', '5号', '6号', '7号', '8号', '9号', '10号', ];

var towerData = [20, 24, 22, 32, 19, 25, 20, 28, 24, 26];
var elevtorData = [10, 16, 11, 18, 13, 16, 10, 14, 5, 15];

// option
let faultRateEchart = echarts.init(document.getElementById('chart-panel'));

let faultRateOption = {
    backgroundColor: '#010611',
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(0,255,255,0.08)',
        borderColor: '#00ffff',
        borderWidth: 1,
        borderRadius: 0,
        axisPointer: {
            type: 'line',
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    legend: {
        data: ['塔吊', '升降机'],
        textStyle: {
            color: '#fff',
            fontSize: 10
        },
        top: '5%',
    },
    grid: {
        x: '12%',
        width: '82%',
        y: '12%',
    },
    xAxis: {
        data: category,
        axisLine: {
            lineStyle: {
                color: '#0b244c'
            }
        },
        axisLabel: {
            fontSize: 14,
            color: '#fff'
        },
        axisTick: {
            show: false,
        },
    },
    yAxis: [{
        name: '次数',
        nameTextStyle: {
            color: '#fff'
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#0b244c',
            }

        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#0b244c',
            }
        },

        axisLabel: {
            formatter: '{value} ',
            fontSize: 14,
            color: '#fff'
        }
    }],

    series: [{
            name: '塔吊',
            type: 'line',
            smooth: true,
            showAllSymbol: false,
            boundaryGap: false,
            symbol: 'none',
            symbolSize: 10,
            lineStyle: {
                width: 3
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
                            // 0% 处的颜色   
                            offset: 0,
                            color: '#ff874c'
                        },
                        {

                            // 100% 处的颜色
                            offset: 1,
                            color: '#ff6b70'
                        }
                    ], false)

                },
            },

            data: towerData
        },
        {
            name: '升降机',
            type: 'line',
            smooth: true,
            showAllSymbol: false,
            boundaryGap: false,
            symbol: 'none',
            symbolSize: 10,
            lineStyle: {
                width: 3
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
                            // 0% 处的颜色   
                            offset: 0,
                            color: '#6879d7'
                        },
                        {

                            // 100% 处的颜色
                            offset: 1,
                            color: '#892fd5'
                        }
                    ], false)
                },
            },
            data: elevtorData
        }
    ]
};
faultRateEchart.setOption(faultRateOption)
var faultByHourIndex = 0; //播放所在下标
window.setInterval(function() {
    faultRateEchart.dispatchAction({
        type: 'showTip', // 根据 tooltip 的配置项显示提示框。
        seriesIndex: 0,
        dataIndex: faultByHourIndex
    });
    faultByHourIndex++;
    // faultRateOption.series[0].data.length 是已报名纵坐标数据的长度
    if (faultByHourIndex > faultRateOption.series[0].data.length) {
        faultByHourIndex = 0;
    }
    if (faultByHourIndex > faultRateOption.series[1].data.length) {
        faultByHourIndex = 0;
    }

}, 2500);