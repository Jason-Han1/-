option = {
    yAxis: {
        data: ['奖励政策', '人事政策', '财务政策', '管理政策']
        /*splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }*/
    },
    xAxis: {
        axisLabel: {
            formatter: '{value} %'
        },
    },
    series: [{
        type: 'scatter',
        name: '1990',
        symbol: 'circle', //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
        symbolSize: function(data) {
            return Math.sqrt(data[2]) * 4;
        },
        itemStyle: {
            normal: {
                color: (params) => {
                    // build a color map as your need.
                    let colorList = [
                        '#DF6A85',
                        '#716AA9',
                        '#34BCC3',
                        '#FC6D44',
                        '#0B9FCA',
                        '#73C234',
                    ];
                    return colorList[params.dataIndex]
                },
            }
        },
        label: {
            emphasis: {
                show: true,
                formatter: function(param) {
                    return param.data[2];
                },
                position: 'top'
            },
        },
        data: [
            [50, '奖励政策', 50],
            [60, '人事政策', 210],
            [90, '财务政策', 100],
            [40, '管理政策', 100],
        ]
    }]
}