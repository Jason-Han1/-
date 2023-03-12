option = {
    title: {
        text: '未来一周气温变化',
        subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['最高气温']
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis:  [
        {
        type: 'category',
        boundaryGap: true,
        data: ['周一','周二','周三','周四','周五','周六','周日'],
        axisLabel:{show: false}
    },
    // 隐藏的折线图形，不用显示x轴。需要补一个点
    {
        type: 'category',
        boundaryGap: false,
        show: false,
        data: ['周一','周二','周三','周四','周五','周六','周日', '周九']
    }],
    yAxis: [
        {
        type: 'value',
        axisLabel: {
            formatter: '{value} °C'
        }
    },
    // 隐藏的图形，不用显示Y轴
    {
        type: 'value',
        show: false
        
    }],
    series: [
        {
            name:'最高气温',
            type:'bar',
            xAxisIndex: 0,
            data:[11, 11, 15, 13, 12, 13, 10],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        // 数据为0，样式透明的折线
        {
            name:'最低气温',
            type:'line',
            symbol: "none",
            lineStyle: {
                opacity: 0
            },
            xAxisIndex: 1,

                        yAxisIndex: 1,
            data:[0, 0, 0, 0, 0, 0, 0,0],
            markPoint: {
                data: [
                    {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                ]
            },
            
        }
    ],
        brush: {
            xAxisIndex: 1,//指向隐藏的图形
            throttleType: "debounce",
            throttleDelay: 500,
            brushStyle: {
              color: "rgba(120,140,180,0.6)"
            },
            // outOfBrush:{
            //     colorAlpha: 1
            // }
            // toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
            // xAxisIndex: 0
          }
};

console.log(myChart);
myChart.on('brushSelected', function(params){
    console.log(params);
});


setTimeout(function(){
    myChart.dispatchAction({
            type: "brush",
            areas: [
              {
                brushType: "lineX",
                coordRange: ['周三', '周四'],
                xAxisIndex: 1
              }
            ]
          });
}, 500)
