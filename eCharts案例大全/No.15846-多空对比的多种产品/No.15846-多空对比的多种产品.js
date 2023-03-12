OPTION = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['多头', '空头', '差距']
    },
    toolbox: {
        show : true,
        feature : {
            saveAsImage : {show: true}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'value'
        }
    ],
    yAxis : [
        {
            type : 'category',
            axisTick : {show: false},
            data : ['产品1','产品2','产品3','产品4','产品5','产品6','产品7','产品8']
        }
    ],
    series : [
        {
            name:'多头',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true
                }
            },
            data:[220, 302, 341, 174, 30, 450, 220,550]
        },
        {
            name:'空头',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'left'
                }
            },
            data:[-120, -132, -101, -134, -190, -230, -210, -123]
        }
    ]
};
var a = OPTION.series[0].data;
var b = OPTION.series[1].data;
var sum = [];
for (var i=0; i<a.length; i++) {
    sum[i] = a[i] + b[i]
}

OPTION.series.unshift({
            name:'差距',
            type:'bar',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data: sum
        });
        
myChart.setOption(OPTION);  
