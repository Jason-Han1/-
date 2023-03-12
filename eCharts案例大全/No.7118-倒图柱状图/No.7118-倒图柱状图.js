// 指定图表的配置项和数据
var data1 =  [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60 ]
var data2 = [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
var data3 = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10 ]
var data4 = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10 ]
var datacity =  ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
var option = {
    color: ['#2546C1', '#0098FB','#1DCACF', '#6E7FDD'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    legend: {
        right:'4%',
        itemWidth: 14,
        itemHeight: 14,
        itemGap:10,
        data: ['年度指标','季度指标','完成值']
    },
   
// 	年度完成率和季度完成率颜色
    grid: { //图表的位置
        top: '20%',
        left: '3%',
        right: '10%',
        bottom: '5%',
        containLabel: true
    },
    yAxis: [{
        type: 'value',
        // inverse: true,
        axisLabel: { //坐标轴刻度标签的相关设置。
            interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
            margin: 15,
            textStyle: {
                color: '#6B9DD7',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 14,
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(27,63,129,.4)'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(27,63,129,.4)'
            },
        },
        show: true

    }],
    xAxis: [{
        type: 'category',
        position: 'top',
        axisLabel: { //坐标轴刻度标签的相关设置。
            interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
            margin: 15,
            textStyle: {
                color: '#6B9DD7',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 14,
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(27,63,129,.4)'
            }
        },
        data: datacity,
    }],
    series: [{
            name: '年度指标',
            type: 'bar',
            barWidth: '18',
            data: data1

        },
        {
            name: '季度指标',
            type: 'bar',
            barWidth: '18',
           
            data: data2,

        },
        {
            name: '完成值',
            type: 'bar',
         
            barWidth: '18',
            data: data3

        }
    ]
};