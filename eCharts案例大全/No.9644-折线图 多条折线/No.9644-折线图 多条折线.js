var legendData = ['计划A', '组合1', '组合2', '组合3', '组合4'];
var xAxisData = ['2019-01-01', '2019-01-02', '2019-01-03', '2019-01-04', '2019-01-05'];
var seriesData = [{
        name: '计划A',
        type: 'line',
        smooth:'true',//是否平滑显示折现
        data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
        name: '组合1',
        type: 'line',
         smooth:'true',//是否平滑显示折现
        data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
        name: '组合2',
        type: 'line',
         smooth:'true',//是否平滑显示折现
        data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
        name: '组合3',
        type: 'line',
         smooth:'true',//是否平滑显示折现
        data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
        name: '组合4',
        type: 'line',
         smooth:'true',//是否平滑显示折现
        data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
]
option = {
    color:['#327bfa','#35b1fa','#62d56b','#ffb84f','#ff7a32'],
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
    yAxis: {
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
    },
    series: seriesData
};