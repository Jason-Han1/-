let ratioData = [
                1.54,
                1.88,
                0.92,
                0.64,
                0.73,
                0.82
            ];
let valueData =  [
                180,
                120,
                80,
                120,
                240,
                210
            ];
let nameData = [
            "2018Q4",
            "2019Q1",
            "2019Q2",
            "2019Q3",
            "2019Q4",
            "2020Q1"
        ];

option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
            shadowStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops:[{
                        offset:0, color: 'rgba(199,169,117,0.00)'
                    },{
                        offset:1, color: 'rgba(199,169,117,0.20)'
                    }]
                }
            }
        },
        triggerOn: 'click',
        position: [0,0],
        backgroundColor: 'none',
        textStyle: {
            fontSize: 12,
            color: '#929292',
            align: 'left'
        },
        formatter: function(params) {
            
            console.log(params);
            console.log(params[0].dataIndex);
            console.log(params[1].value);
            return '户数：' + valueData[params[0].dataIndex] + '    ' +
            '比率：' + ratioData[params[0].dataIndex] + '%'
        },
    },
    xAxis: [{
        type: "category",
        data: nameData,
        axisLabel: {
            interval: 0,
            textStyle: {
                color: "#383838"
            }
        },
        axisTick: {
            show: false,
            alignWithLabel: true
        },
        axisLine: {
            lineStyle: {
                color: "#eee"
            }
        },
        splitArea: {
            show: false
        },
    }],
    yAxis: [{
            splitLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    color: '#eee'
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                interval: 0,
                textStyle: {
                    color: "#929292"
                }
            },
            splitNumber: 1
        },
        {
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                interval: 0,
                textStyle: {
                    color: "#929292"
                }
            },
            splitNumber: 1
        }
    ],
    series: [{
            name: "股东人数",
            type: "bar",
            yAxisIndex: 0,
            barWidth: "6",
            data: valueData,
            itemStyle: {
                barBorderRadius: 6,
                color: '#C7A975',
                opacity: 0.6
            }
        },
        {
            name: "比上季",
            type: "line",
            data: ratioData,
            yAxisIndex: 1,
            lineStyle: {
                color: "#BF3232",
                width: 1
            }
        }
    ]
};
window.addEventListener('resize', echarts.resize)
myChart.dispatchAction({
    type: 'showTip',
    seriesIndex:1,  // 显示第几个series
    dataIndex: 5 // 显示第几个数据 
})
/*
//默认选中某一项
let myChart = echarts.init(this.$refs.lineAndAreaBar)
myChart.setOption(this.option)
window.addEventListener('resize', myChart.resize)
myChart.dispatchAction({
    type: 'showTip',
    seriesIndex:1,  // 显示第几个series
    dataIndex: this.itemIndex // 显示第几个数据
})
*/