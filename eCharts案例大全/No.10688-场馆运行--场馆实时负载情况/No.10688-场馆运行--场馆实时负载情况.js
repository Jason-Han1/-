var xdata = ['A3', 'C2', 'C1', 'A1', 'A4', 'A11', 'C9', 'C3', 'C11', 'A2', 'A6', 'A7', 'A8', 'A9', 'C12', 'C8', 'C6', 'C7', 'C4'];
var legendData =['场馆设计最大客流量','当前客流量'];
var dataArr = [20, 12, 31, 34, 31, 20, 12, 31, 34, 31, 20, 12, 31, 34, 31, 20, 12, 31, 34];
var dataArr2 =  [10, 20, 5, 9, 3, 10, 20, 5, 9, 3, 10, 20, 5, 9, 3, 10, 20, 5, 9];
var colorSet =new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#00CAE0'
                }, {
                    offset: 1,
                    color: '#006EFB'
                }]);
var colorSet2 =  new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#E37552'
                }, {
                    offset: 1,
                    color: '#9E5431'
                }]);                
option = {
    backgroundColor: '#000',
    title: {
        // text: '2016年12月长宁区合规成本分析'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        // show:true,
        data:legendData,
        align: 'right',
        right: 10,
        textStyle: {
            color: '#fff'
        },
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        axisLabel: {
            textStyle: {
                fontSize: 14,
                color: '#fff'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#00A2FF',
                width: 2
            }
        },
        axisTick: {
            show: false
        },
        // splitLine: {
        //     lineStyle: {
        //         type: 'dashed',
        //         color: '#DDD'
        //     }
        // },
        data:xdata
    }],
    yAxis: [{
        type: 'value',
        // name: '总价(万元)',
        axisLabel: {
            formatter: '{value}',
            color: '#65F5FD',
            fontSize: 14
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0)'
                // color:'65F5FD'
            }
        },
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#385B71'
            }
        },
    }],
    series: [{
        name: legendData[0],
        type: 'bar',
         barWidth: 10, //柱子宽度
        barGap: 1, //柱子之间间距
        itemStyle: {
            normal: {
                color:colorSet
                // barBorderRadius: 10,
            }
        },
        data: dataArr
    }, {
        name:legendData[1],
        type: 'bar',
         barWidth: 10, //柱子宽度
        barGap: 1, //柱子之间间距
        itemStyle: {
            normal: {
                color:colorSet2
                // barBorderRadius: 10,
            }
        },
        data:dataArr2
    }]
};