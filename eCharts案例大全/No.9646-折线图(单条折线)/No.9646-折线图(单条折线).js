var legendData = ['计划A'];
var xAxisData = ['2019-01-01', '2019-01-02', '2019-01-03', '2019-01-04', '2019-01-05'];
var seriesData = [{
        name: '计划A',
        type: 'line',
        data: [120, 132, 101, 134, 90, 230, 210]
    },
]
option = {
    color:['#ff7a32'],
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
        right: '4%',
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