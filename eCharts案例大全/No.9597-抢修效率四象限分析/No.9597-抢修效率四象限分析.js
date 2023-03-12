option = {title : {
        text: '抢修效率四象限分析'
    },
    grid: {
        left: '3%',
        right: '7%',
        bottom: '3%',
        containLabel: true
    },
    tooltip : {
        // trigger: 'axis',
        showDelay : 0,
        formatter : function (params) {
            if (params.value.length > 1) {
                return params.seriesName + ' :<br/>'
                + params.value[0] + '工单数 '
                + params.value[1] + '分钟 ';
            }
            else {
                return params.seriesName + ' :<br/>'
                + params.name + ' : '
                + params.value + '分钟 ';
            }
        },
        axisPointer:{
            show: true,
            type : 'cross',
            lineStyle: {
                type : 'dashed',
                width : 1
            }
        }
    },
    toolbox: {
        feature: {
            dataZoom: {},
            brush: {
                type: ['rect', 'polygon', 'clear']
            }
        }
    },
    brush: {
    },
    legend: {
        data: ['女性','男性'],
        left: 'center'
    },
    xAxis: {
        scale: true
    },
    yAxis: {
        scale: true
    },
    series: [{
        type: 'effectScatter',
        symbolSize: 20,
        data: [
             [1392, 66.4],
            [1000, 47.6]
        ]
    }, {
        type: 'scatter',
        data: [[1200, 51.6], [980, 59.0], [700, 49.2], [600, 63.0], [1321, 53.6],
            [999, 59.0], [1000, 47.6], [876, 69.8], [981, 66.8], [1291, 75.2],
           [1392, 66.4], [876, 67.3]
        ],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                lineStyle: {
                    normal: {
                        type: 'solid'
                    }
                },
                data : [
                    {type : 'average', name: '平均值'},
                    { xAxis: 1000 }
                ]
            }
    }]
};
