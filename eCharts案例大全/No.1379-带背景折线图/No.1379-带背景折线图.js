option = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel:{
        fontSize:16
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    grid:{
        width:600,
        height:260,
        left:80,top:20
    },
    yAxis: {
        type: 'value',
        axisLabel:{
        fontSize:16
        }
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320, 934, 1290, 1330, 1320,820, 932],
        type: 'line',
        label:{show:true,fontSize:16},
        areaStyle:{
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#0e66cc'
                }, {
                    offset: 1,
                    color: '#4cbeff'
                }])
        },
    }]
};