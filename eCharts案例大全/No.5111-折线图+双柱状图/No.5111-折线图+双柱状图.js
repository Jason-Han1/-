//负数的柱子，圆头朝下的样例见本人其他作品
let barDataList = [40, 78, 20, -16];
let barDataList2 = [-10, 50, 10, 20];
let lineDataList = [48, 40, 10, -6];
option = {
    backgroundColor: '#fff',
    grid: {
        top: '15%',
        right: '10%',
        left: '10%',
        bottom: '12%'
    },
    xAxis: [{
        type: 'category',
        color: '#565656',
        data: ['2019Q1', '2019Q2', '2019Q3', '2019Q4'],
        axisLabel: {
            interval: 0,//解决X轴数据显示不全问题
            color: '#929292',
            rich: {
                a: {
                    color: '#333',
                    align: 'center',
                    fontSize: 18,
                    fontWeight: 'bold'
                }
            },
            formatter: function(params,index) {
                return '{a|'+ barDataList[index]+'}{a|/'+ barDataList2[index]+'}\n\n' 
                + params
            },
            textStyle: {
                fontSize: 12
            },
        },
        axisLine: {
            lineStyle: {
                color: '#eee',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#eee',
                type: 'dashed',
            }
        }
    }],
    yAxis: [{
        axisLabel: {
            formatter: '{value}%',
            color: '#929292',
            textStyle: {
                fontSize: 10
            },
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(107,107,107,0)',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: '#eee',
            }
        }
    }],
    series: [{
        type: 'bar',
        data: barDataList,
        barWidth: 6,
        itemStyle: {
            normal: {
                color: function(params){
                    let color = params.value > 0?'#C7A975':'#5B6376'
                    return color
                },
                barBorderRadius: 6
            },
        },
        label: {
            show:false
        }
    },{
        type: 'bar',
        data: barDataList2,
        barWidth: 6,
        itemStyle: {
            normal: {
                color: function(params){
                    let color = params.value > 0?'#C7A975':'#5B6376'
                    return color
                },
                barBorderRadius: 6
            },
        },
        label: {
            show:false
        }
    },{
        data: lineDataList,
        id: 'a',
        type: 'line',
        name: '折线图',
        symbolSize: 4,
        itemStyle: {
            normal: {
                lineStyle: {//折线
                    color: '#BF3232',
                    width: 1
                },
                borderColor: '#BF3232'//圆点边框
            }
        }
    }
]
};