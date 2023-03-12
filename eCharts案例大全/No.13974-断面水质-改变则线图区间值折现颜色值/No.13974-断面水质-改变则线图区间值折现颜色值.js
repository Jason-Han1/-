var option = {
    animation: true,
    animationDuration: 2000,
    animationEasing: 'backOut',
    title: {
        x: 'center',
        text: '断面水质',
        textStyle: {
            fontSize: 14,
            color: '#00BFFF',
            fontFamily: 'Courier New'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                width: 2,
                color: '#32CD32'
            }
        },
        formatter: function(params) {
            var msg = '断面水质';
            $.each(params, function(index, value) {
                msg += '<br/>';
                /** 大于或等于3的为不合格 */
                if (value.seriesName == ' -') {
                    msg += value.name + ' : ' + value.data + ' 级';
                    if (value.data >= 3)
                        msg += '\r' + ' >=（目标）' + 3 + '级' + '<span style="color: red;">不合格</span>';

                } else {
                    msg += value.seriesName + ' - ' + value.name + ' : ' + value.data + ' 级';
                    if (value.data >= 3)
                        msg += '\r' + ' >=（目标）' + 3 + '级' + '<span style="color: red;">不合格</span>';

                }

            });
            return msg;
        }
    },
    xAxis: [{
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月'],
        axisLine: {
            show: true,
            lineStyle: {
                width: 2
            }
        },
        axisTick: {
            show: false
        }
    }],
    yAxis: [{
        min: 0,
        name: '级',
        max: 6,
        show: true,
        type: 'value',
        splitNumber: 6
    }],
    color: ['#90EE90', 'rgb(171,130,255)'],
    legend: {
        x: 'center',
        bottom: '0',
        type: 'scroll',
        data: ['2017年', '2018年']
    },
    series: [{
        type: 'line',
        smooth: false,
        name: '2017年',
        data: [1, 2, 3, 4, 5, 6],
        markPoint: {
            animation: true,
            animationDuration: '5000',
            animationEasing: 'elasticOut',
            data: [{
                    name: '最大值',
                    type: 'max'
                },
                {
                    name: '最小值',
                    type: 'min'
                },
            ]
        },
        markLine: {
            data: [{
                type: 'average',
                name: '平均值'
            }]
        }
    }, {
        type: 'line',
        smooth: true,
        name: '2018年',
        data: [6, 5, 4, 3, 2, 1],
        markPoint: {
            animation: true,
            animationDuration: '5000',
            animationEasing: 'elasticOut',
            data: [{
                    name: '最大值',
                    type: 'max'
                },
                {
                    name: '最小值',
                    type: 'min'
                },
            ]
        },
        markLine: {
            data: [{
                type: 'average',
                name: '平均值'
            }]
        }
    }]
};

/** 多数据时,若为单数据则直写入 option即可 */
var visualMap = [];
var seriesArr = option.series;
var color = ['rgb(144,238,144)', 'rgb(171,130,255)'];
for (var index in seriesArr) {
    visualMap.push({
        show: false,
        seriesIndex: index,
        pieces: [{
            gt: 0,
            lte: 2,
            color: color[index]
        },{
            gt: 2,
            lte: 4,
            color:'#FF7F24'
        }, {
            gt: 4,
            color: '#FF0000'
        }]
    });
}
option.visualMap = visualMap;