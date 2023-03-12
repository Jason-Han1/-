option = {
    titile: {
        text: '散点图',
    },
    xAxis: {},
    yAxis: {},
    tooltip: {
        show: true,
    },
    series: [
        {
            type: 'scatter',
            symbolSize: 20,
            symbol: 'rect',
            label: {
                show: true,
            },
            itemStyle: {
                color: 'red',
            },
            markPoint: {
                label: {
                    show: true,
                },
                data: [
                    {
                        name: 'www',
                        x: 200,
                        y: 200,
                    },
                ],
            },
            markLine: {
                data: [
                    [
                        {
                            x: 10,
                            y: 10,
                        },
                        {
                            x: 100,
                            y: 100,
                        },
                    ],
                ],
            },
            markArea: {
                silent:true,
                label:{
                    position:['50%','50%'],
                    align:'center',
                    color:'rgba(0,0,0,0.3)',
                    fontSize:30
                },
                itemStyle:{
                    color:'rgba(0,0,0,0.1)'
                },
                data: [
                    // [
                    //     {
                    //         name:"工作时区",
                    //         x: '0',
                    //         value:'1'
                    //     },
                    //     {
                    //         x: '20%',
                    //         value:'1'
                    //     },
                    // ],
                     [
                        {
                            name:"工作时区",
                            coord:[1.25,1.25],
                            itemStyle:{
                                color:'rgba(255,0,0,0.2)'
                            }
                           
                        },
                        {
                            coord:[0,0],
                        },
                    ],
                    [
                        {
                            name:"工作时区",
                            coord:[1.25,1.25],
                            itemStyle:{
                                color:'rgba(255,0,255,0.2)'
                            }
                           
                        },
                        {
                            coord:[2.5,0],
                        },
                    ],
                    [
                        {
                            name:"工作时区",
                            coord:[1.25,1.25],
                            itemStyle:{
                                color:'rgba(255,255,0,0.2)'
                            }
                           
                        },
                        {
                            coord:[0,2.5],
                        },
                    ],
                    [
                        {
                            name:"工作时区",
                            coord:[1.25,1.25],
                            itemStyle:{
                                color:'rgba(0,255,0,0.2)'
                            }
                           
                        },
                        {
                            coord:[2.5,2.5],
                        },
                    ]
                     
                ],
            },
            data: [
                [0, 0],
                [1, 1],
                [2.5, 2],
                [2, 2.5],
            ],
        },
    ],
};
