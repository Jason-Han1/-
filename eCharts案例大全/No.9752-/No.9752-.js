option = {
    backgroundColor:'#fff',
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['封闭区域温度'],
    },
    toolbox: {
        show: false,
        feature: {
            dataZoom: {},
        }
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        axisLabel:{
            color:'rgba(0,0,0,0.8)',
            fontSize:30
        },
        data: ['2019/10/01','2019/10/02','2019/10/03','2019/10/04','2019/10/05','2019/10/06','2019/10/07']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} °C',
            color:'rgba(0,0,0,0.8)',
            fontSize:30
        }
    },
    series: [
        {
            name:'封闭区域温度',
            type:'line',
            lineStyle:{width:7},
            color:'#438ce2',
            data:[20, 17, 23, 13,18, 20, 16],
            markPoint: {
                symbolSize:100,
                label:{
                    fontSize:35
                },
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                lineStyle:{width:4},
                label:{
                    fontSize:32
                },
                data: [
                    {type: 'average', name: '平均值',symbolSize:5}
                ]
            }
        }
    ]
}