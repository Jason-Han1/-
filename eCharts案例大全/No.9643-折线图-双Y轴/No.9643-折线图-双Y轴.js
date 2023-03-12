var legendData = ['计划A', '组合1', '组合2', '组合3', '组合4'];
var xAxisData = ['2019-01-01', '2019-01-02', '2019-01-03', '2019-01-04', '2019-01-05'];
var seriesData = [{
        name: '计划A',
        type: 'line',
        smooth:'true',//是否平滑显示折现
        yAxisIndex:1,
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1, [{
                    offset: 0,
                    color: '#ff7632'
                  },
                  {
                    offset: 1,
                    color: 'rgba(255,118,50,0.2)'
                  }
                ])
            }
        },
        data: [0.1, 0.3, 0.32, 0.28, 0.4, 0.36, 0.5]
    },
    {
        name: '组合1',
        type: 'line',
        smooth:'true',
        data: [0.09, 0.1, 0.2, 0.3, 0.32, 0.23, 0.28]
    },
    {
        name: '组合2',
        type: 'line',
        smooth:'true',
        data: [0.1, 0.2, 0.09, 0.2, 0.21, 0.24, 0.23]
    },
    {
        name: '组合3',
        type: 'line',
        smooth:'true',
        data: [0.08, 0.1, 0.12, 0.12, 0.18, 0.21, 0.2]
    },
    {
        name: '组合4',
        type: 'line',
        smooth:'true',
        data: [0.04, 0.1, 0.1, 0.12, 0.1, 0.13, 0.1]
    }
]
option = {
    color:['#ff7632','#35b1fa','#62d56b','#ffb84f','#1262e6'],
    title: {
        text: '折线图',
         textStyle:{
            color:'#333',
            fontSize:'14',
            fontWeight:'normal'
        }

    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        bottom: '0',
        data: legendData
    },
    grid: {
        left: '3%',
        right: '1%',
        bottom: '30',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false, //默认从0刻度开始画图
        //修改X轴 隐藏刻度，修改轴线颜色为ccc、修改X轴文字颜色为666（Y轴同理）
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            color: '#666'
        },
        data: xAxisData
    },
    yAxis: [{
        type: 'value',
        name:'收益率',
        nameTextStyle:{
            color:'#666'
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        },
        axisLabel: {
            color: '#666'
        },
    },{
        type: 'value',
        name:'沪深300',
        nameTextStyle:{
            color:'#666'
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        },
        axisLabel: {
            color: '#666'
        },
    }],
    series: seriesData
};