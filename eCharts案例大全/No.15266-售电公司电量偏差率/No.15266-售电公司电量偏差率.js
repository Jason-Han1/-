var colors = ['#2ea9fb', '#c00'];
option = {
    title: {
        text: '售电公司电量偏差率',
        'subtext': 'by andot.org 蚁点工作室'
    },
    xAxis: {
        data: ['A公司', 'B公司', 'C公司', 'D公司', 'E公司', 'F公司']
    },
    grid: {
    	top:'13%',
        left: '3%',
        right: '6%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: [{
        name: '偏差率（%）',
        type: 'value',
        min: -20,
        max: 20,
        splitNumber: 2
    }],
    series: [{
        name: '偏差率（%）',
        type: 'bar',
        data: [0.5, 7.5, -3, -1, 5, -0.5],
        barWidth: '20',
        itemStyle: {
            normal: {
                color: function(params) {
                    console.log(params.value);
                    if (params.value < -2 || params.value > 6)
                        return colors[1]
                    else
                        return colors[0]
                }
            }
        },
        markLine: {
            data: [{
                yAxis: 6
            }, {
                yAxis: -2
            }],
            lineStyle: {
                normal: {
                    color: colors[0]
                }
            }
        }
    }]
};