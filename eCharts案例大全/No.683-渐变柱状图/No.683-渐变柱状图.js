option = {
    backgroundColor: '#011c3a',
    xAxis: {
        data: ['人员1', '人员2', '人员3', '人员4', '人员5、人员6', '人员7', '人员8'],
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
        name: "单位:次",
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
        type: 'bar',
        barWidth: 50,
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