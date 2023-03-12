var data1 = [23923, 34210, 0, 124444, 314284];
var data1Max = Math.max.apply( Math, data1 );
var data2 = [];
for(var i = 0;i<data1.length;i++){
    data2.push(data1Max*1.2)
}

option = {
    backgroundColor:'#158cc9',
    grid: {
        left: '5%',
        top: '5%',
        bottom: '3%',
        right: '15%',
        containLabel: true
    },
    legend: {
        show: false
    },

    xAxis: {
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            color: '#ffffff',
            fontSize: 32
        },
        data: ['高明区', '三水区', '顺德区', '南海区', '禅城区']
        //data:[]
    },
    series: [{
        type: 'bar',
        barGap: '-100%',
        barWidth: 22,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    1, 0, 0, 0,
                    [
                        {offset: 1, color: '#a6ff33'},
                        {offset: 0.3, color: '#ddffb2'},
                        {offset: 0, color: '#ffffff'},
                    ]
                ),
                barBorderRadius: 12
            },
            emphasis: {
                    barBorderWidth: 10,
                    shadowBlur: 20,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: '#ffffff'
                }
        },
        /*label: {
            normal: {
                show: true,
                position: 'right',
                fontSize: 32,
                color: '#ffffff'
            }
        },*/
        z: -10,
        data: data1
        //data: []
    }, {
        type: 'bar',
        barGap: '-100%',
        barWidth: 22,
        itemStyle: {
            normal: {
                color: '#158cc9',
                borderColor: 'rgba(255,255,255,0.5)',
                borderWidth: 2,
                shadowColor: '#ffffff',
                shadowBlur: 10,
                barBorderRadius: 12
            },
            emphasis: {
                    barBorderWidth: 10,
                    shadowBlur: 20,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: '#ffffff'
                }
        },
        label: {
            normal: {
                show: true,
                position: 'right',
                fontSize: 32,
                color: '#fff000',
                offset: [80,0],
                formatter: function(params){
                    return data1[params.dataIndex]===0?'-':data1[params.dataIndex]
                }
            }
        },
        z: -12,
        data: data2
    }]
};