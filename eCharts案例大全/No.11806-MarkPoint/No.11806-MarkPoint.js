option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        showSymbol:false,
        lineStyle:{
            color:"#000",
        },
        markPoint: {
            symbol: 'circle',
            itemStyle:{
                color:"red",
            },
            symbolSize:5,
            data: [
                {coord: [3, 934]},
                {coord: [4, 1290]}
            ]
        }
    }]
};
