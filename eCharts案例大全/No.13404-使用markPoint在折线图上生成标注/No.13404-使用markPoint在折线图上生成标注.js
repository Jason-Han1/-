option = {
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'value',
        max: 150
    },
    tooltip:{
        trigger:'axis'
    },
    series: [{
        data: [{value:[0,100]},{value:[1,100]}, {value:[2,100]},{value:[3,100]},{value:[4,100]},{value:[5,100]},
        {value:[6,100]},{value:[7,100]},{value:[8,100]},{value:[9,100]},{value:[10,100]}],
        type: 'line',
        markPoint: {
            symbol:'rect',
            symbolSize: 20,
            symbolOffset:[0,-15],
            itemStyle:{
                normal:{
                    color:'transparent',
                    label:{
                        show: true,
                        formatter: function(params){
                            return '当前水位'+20+'m'
                        },
                        fontSize: 12,
                        color: 'red',
                        backgroundColor: 'transparent'
                    }
                }
            },
            data: [
                {
                    name: '水位值',
                    coord:['5','100']
                }
            ]
        }
    }]
};