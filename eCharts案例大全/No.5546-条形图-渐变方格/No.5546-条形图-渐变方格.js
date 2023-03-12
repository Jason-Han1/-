var value = [
    {
        value: 109,
        itemStyle: {
            color: '#5ee6f2'
        }
    },
    {
        value: 86,
        itemStyle: {
            color: '#2ddc9b'
        }
    }
];

const bgBarData = [
    {
        value: 300,
        itemStyle: {
            normal: {
                borderWidth: 1,
                borderColor: '#5ee6f2',
                color: 'rgba(0, 0, 0, 0)'
            }
        }
    },
     {
        value: 300,
        itemStyle: {
            normal: {
                borderWidth: 1,
                borderColor: '#2ddc9b',
                color: 'rgba(0, 0, 0, 0)'
            }
        }
    }
]

option = {
  backgroundColor:"#051F54",
            grid: {
                top: '15%',
                left: '5%',
                right: '30%',
                bottom: '13%'
            },
            xAxis: {
                type: 'value',
                min: 0,
                max: 280,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#ffffff',
                        width: 1
                    },
                },
                splitLine: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                },
                axisTick: {
                    show: false,
                }
            },
            yAxis: {
                min: 0,
                max: 2,
                //show: false,
                type: 'category',
                splitLine: {
                    show: false,
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    // interval: 0,
                    margin: 0,
                    align: 'left',
                    // 调整label居上显示
                    padding: [-80, 0, 0, 0],
                    textStyle: {
                        color: '#fff',
                        fontSize: 16
                    }
                },
                axisTick: {
                    show: false
                },
                data : ['5次', '8次']
            },
            series: [ {
                //真实值
                name: "真实值",
                type: 'pictorialBar',
                barGap : '50%',
                barWidth: '20%',
                symbol: 'rect',
                symbolRepeat: 'true',
                symbolMargin: '40%',
                symbolSize: ['10%', '100%'],
                symbolOffset: ['150%', '0%'],
                // symbolRepeat: true,
                itemStyle: {
                    normal: {
                        color: '#ff8a77'
                    },
                    barBorderRadius: 10
                },
                label: {
                    normal: {
                        color: '#000',
                        show: true,
                        // 调整series每个label在进度条外显示
                        position: [820, '40%'],
                        fontSize: 16,
                        formatter: function(params) {
                           return params.value + '人'
                        }
                    }
                },
                data : value,
                z: 0
            },{
                //辅助背景图形
                name: "背景条",
                type: 'bar', //pictorialBar
                barWidth: '30%',
                barGap : '-100%',
                data : bgBarData,
                z: 0
            },]
        };