option = {
    title: {
        text: '2019-06-17 00:19:56',
        left:'center'
    },
    tooltip: {
        trigger: 'axis',
    },
    toolbox: {
        show: false,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        splitLine:{
                show:true,
                lineStyle:{
                    type:'dotted'
                }
            },
        data: [500,1000,1500,2000,2500,3000,3500,4000,4500,5000,5500,6000,6500,7000,7500,7800,8100,8500,9000]
    },
    yAxis: {
        type: 'value',
        splitLine:{
                show:true,
                lineStyle:{
                    type:'dotted'
                }
            },
        axisLabel: {
            formatter: '{value}'
        },
        max:5,
    },
    series: [
        {
            type:'line',
            smooth: 0.6,
            smoothMonotone:'x',
            data:[0.2, 0.12, 3.5, 0.25, 0.3, 4.2, 0.16,0.2, 0.21, 0.25, 2, 0.3, 4, 0.16,3.5,0.2,3.2,0.21,0.22],
            markPoint: {
                symbol:'circle',
                symbolSize:8,
                itemStyle:{
                    color:'#000',
                },
                label:{
                    position:'top',
                    color:'#000',
                },
                data: [
                    { value: 'H2(1936.66)', xAxis:2, yAxis: 3.5},
                    { value: 'CO(4903.66)', xAxis:5, yAxis: 4.2}
                ]
            }
        }
    ]
};
