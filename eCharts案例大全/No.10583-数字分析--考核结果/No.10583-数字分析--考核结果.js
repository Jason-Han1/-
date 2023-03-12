var xdata = ['A4', 'C4', 'A2', 'C1', 'D2'];
var dataArr = [1.8, 1.7, 1.6, 1.48, 1.4];
var colorSet =  new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0,182,206,.8)'
                }, {
                    offset: 1,
                    color: 'rgba(1,61,89,.2)'
                }]);
option = {
    backgroundColor: '#000',
    title: {
        // text: 'Sales Revenue of CAN-LAX 2016-2017',
        textStyle: {
            fontSize: 14
        }
    },

    tooltip: { // 提示框组件
        trigger: 'axis',
    },
    grid: {
        left: '3%',
        right: '5%',
        bottom: '3%',
        containLabel: true,
        show: false // 网格边框是否显示，上和右边框 
    },
    xAxis: {
        type: 'category',
        boundaryGap: true, // 坐标轴两边留白
        axisLabel: {
            textStyle: {
                fontSize: 14,
                color: '#fff'
            }
        },
        axisTick: {
            show: false
        },
        data: xdata
    },

    yAxis: [{
        // name: '水量（t）',
        type: 'value',
        max: 2,
        axisLabel: {
            formatter: '{value}',
            color: '#65F5FD',
            fontSize: 14
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#65F5FD',
                // fontSize:33
            }
        },
        splitLine: {
            lineStyle: {
                // type: 'dashed',
                color: 'rgba(255,255,255,.1)'
            }
        },
        axisTick: {
            show: false
        },
    }, ],

    series: [{
        // name: '水量',
        type: 'bar',
        barWidth:50,
        color: '#00BFFF',
        //stack: '总量',
        itemStyle: {
            normal: {
                color:colorSet
                // barBorderRadius: 10,
            }
        },
        data: dataArr
    }, ]
};