option = {
    xAxis: {
        data: ['01-29', '01-30', '01-31', '02-01', '02-02', '02-03', '02-04'],
        splitLine: {
            lineStyle: {
                color: '#D4DFF5'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#289bd3',
                width: 2
            }
        },
        axisLabel: {
            textStyle: {
                fontSize: 14,
                color: '#333'
            }
        }
    },
    yAxis: {
        axisLine: {
            lineStyle: {
                color: '#289bd3',
                width: 2
            }
        },
        axisLabel: {
            textStyle: {
                fontSize: 14,
                color: '#333'
            }
        },
        max: 800
    },
    series: [{
        type: 'line',
        smooth: true,
        data: [120, 182, 191, 234, 690, 430, 310],
        itemStyle: {
            normal:{
               color: '#2ec7c9' 
            }
            
        },
        lineStyle:{
            width:5
        },
        markPoint: {
            itemStyle: {
                normal:{
                   color: '#2ec7c9' 
                }
                
            },
            data: [{
                type: 'max',
                name: '最大值'
            }, {
                type: 'min',
                name: '最小值'
            }]
        },
        markLine: {
            data: [
                {type: 'average', name: '平均值'}
            ]
        }
    }]
};