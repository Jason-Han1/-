option = {
    backgroundColor:'#0c2d55',
    tooltip: {
        trigger: 'axis',
    },
    color:['#fcba62','#69f0ff'],
    legend: {
        x: 'left',
        top: '11%',
        left:'15%',
        textStyle: {
            color: '#68a9ff',
            fontSize: 14,
            padding:[0,8,0,8]
        }
    },
    grid: {
        top: '15%',
        left: '10%',
        right: '5%',
        bottom: '15%',
    },
    xAxis: [
        {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: '#425b78'
                }
            },
            axisLabel: {
                color: '#b9bec6',
            },
            splitLine: {
                show: false,
            },
            boundaryGap: false,
            data: ['1', '2', '3', '4', '5', '6', '7'], //this.$moment(data.times).format("HH-mm") ,
        },
    ],

    yAxis: [
        {
            type: 'value',
            min:-2,
            max:8,
            nameTextStyle:{
                         color:"#b9bec6", 
                         fontSize:12,  
                     },
            axisLine: {
                lineStyle: {
                    color: '#425b78',
                    fontSize: 14
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#587485',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#b9bec6',

                },
            },
        },
    ],
    series: [
        {
            name: '监测点1',
            type: 'line',
            showSymbol: false,
            lineStyle: {
                normal: {
                    color: '#fcba62',
                },
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(223,172,105,0.5)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(212,190,161,0)',
                            },
                        ],
                        false
                    ),
                },
            },
            data: [4, 7, 5, 4, 3, 5, 8], //data.values
        },
        {
            name: '监测点2',
            type: 'line',
            showSymbol: false,
            lineStyle: {
                normal: {
                    color: '#69f0ff',
                },
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(107,205,216,0.5)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(143,192,127,0)',
                            },
                        ],
                        false
                    ),
                },
            },
            data: [3, 5, 4, 2, 1, 7, 6], //data.values
        },
        {
            name: '监测点3',
            type: 'line',
            showSymbol: false,
            lineStyle: {
                normal: {
                    color: '#69f0ff',
                },
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(143,192,127,0)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(107,205,216,0.5)',
                            },
                        ],
                        false
                    ),
                },
            },
            data: [2, 4, 3, 1, 0, 6, 5], //data.values
        },
    ],
};
