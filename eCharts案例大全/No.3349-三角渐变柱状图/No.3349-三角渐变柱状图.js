option = {
    backgroundColor: '#011c3a',
    xAxis: {
        data: ['5/19', '5/20', '5/21', '5/22', '5/23', '5/24', '5/25'],
        axisLine: {
            lineStyle: {
                color: '#3d5269'
            }
        },
        axisLabel: {
            color: '#fff',
            fontSize: 14
        }
    },
    yAxis: {
        name: "告警次数",
        nameTextStyle: {
            color: '#fff',
            fontSize: 16
        },
        axisLine: {
            lineStyle: {
                color: '#3d5269'
            }
        },
        axisLabel: {
            color: '#fff',
            fontSize: 16
        },
        splitLine: {
            show:true,
            lineStyle: {
                color: '#2d3d53'
            }
        },
        interval:500,

    },
    series: [{
        type: 'pictorialBar',//象形柱图
        barWidth: 50,
        symbol: 'triangle',
        itemStyle:{
            normal:{
                color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#5ef3ff'
                }, {
                    offset: 1,
                    color: '#06a4f4'
                }], false)
            }
        },
        label: {
            normal: {
                show: true,
                fontSize: 18,
                fontWeight: 'bold',
                color: '#ffffff',
                position: 'top',
            }
        },
        data: [254, 3254, 1654, 2454, 4757, 2011, 1211]
    }]
};