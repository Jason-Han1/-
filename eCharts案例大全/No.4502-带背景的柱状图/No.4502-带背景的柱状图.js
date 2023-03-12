
var bkData = [];
var xData = ['1','2','3','4','5','6','7'],
    yData = [50,53,30,10,13,61,34,34];
    
for(let i of xData){
    bkData.push(100)
}
    
    
option = {
    backgroundColor:"#011e44",
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                opacity: 0
            }
        },
    },
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '7%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: true, // 坐标轴两边留白
        gridIndex: 0,
        data: xData,
        axisLabel: {
            textStyle: {
                color: '#5b657f'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#283352',
            }
        },
        axisTick: {
            show: true,
            lineStyle: {
                color: '283352',
            }
        },
    }],
    yAxis: [
        {
            type: 'value',
            nameTextStyle: {
                color: "rgb(170,170,170)"
            },
            gridIndex: 0,
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#283352',
                }
            },
            axisLabel: {
                color: '#5b657f',
                fontSize: 14,
                formatter: '{value}'
            },
            splitLine: {
                lineStyle: {
                    color: '#283352',
                    type:"dashed"
                }
            },
        },
        {
            type: 'value',
            gridIndex: 0,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
             axisLabel: {
                 show:false,
            },
            splitLine: {
                show:false
            },
        }
    ],
    series: [{
            name: '科目',
            type: 'bar',
            barWidth: '20px',
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                    color:"#397cf9"
                }
            },
            data: yData,
            zlevel: 11

        },
        {
            // name: '背景',
            type: 'bar',
            barWidth: '20px',
            xAxisIndex: 0,
            yAxisIndex: 1,
            barGap: '-100%',
            data: bkData,
            itemStyle: {
                normal: {
                    color: '#283454',
                },
            },
            tooltip: {
                show: false
            },
            zlevel: 9
        },

    ]
};   