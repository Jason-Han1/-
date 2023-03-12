option = {
    backgroundColor: '#011c3a',
    xAxis: {
        data: ['业务', '业务', '业务', '业务', '业务、业务', '业务', '业务'],
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
                    color: '#36B0FD'
                }, {
                    offset: 1,
                    color: '#0268A8'
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