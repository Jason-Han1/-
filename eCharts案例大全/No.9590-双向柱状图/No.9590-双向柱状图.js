option = {
    legend: {},
    tooltip: {},
    // dataset: {
    //     source: [
    //         ['product', '郴州市', '张家界', '永州市', '湘西市' , '永定区', '永兴县', '嘉禾县', '芷江县'],
    //         ['市州', 41.1, 30.4, 65.1, 53.3 , 0 , 0, 0 ,0],
    //         ['区县', 0 , 0 ,0 ,0, 86.5, 92.1, 85.7, 83.1],

    //     ]
    // },
    xAxis: [{
        type: 'value',
        gridIndex: 0,
        inverse: true,
    }, {
        type: 'value',
        gridIndex: 1
    }],
    
    tooltip:{
        show:false
    },

    yAxis: [{
        gridIndex: 0,
        type: 'category',
        axisTick:{
            show:false  
        },
        data : ['郴州市', '张家界', '永州市', '湘西市']
    }, {
        gridIndex: 1,
        axisTick:{
            show:false  
        },
        type: 'category',
        data : [ '永定区', '永兴县', '嘉禾县', '芷江县' ],
        position:'right'
    }],
    grid: [{
        right: '50%'
    }, {
        left: '50%'
    }],
    series: [
        // These series are in the first grid.
        {
            type: 'bar',
            name: '市州',
            barWidth: 20,
            seriesLayoutBy: 'row',
            data: [{
                    name: '郴州市',
                    value: 41.1
                },
                {
                    name: '张家界',
                    value: 30.4
                },
                {
                    name: '永州市',
                    value: 65.1
                },
                {
                    name: '湘西市',
                    value: 53.1
                }
            ]
        },
        {
            type: 'bar',
            name: '区县',
            barWidth: 20,
            seriesLayoutBy: 'row',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data:  [{
                        name: '永定区',
                        value: 86.5
                    },
                    {
                        name: '永兴县',
                        value: 92.1
                    },
                    {
                        name: '嘉禾县',
                        value: 85.7
                    },
                    {
                        name: '芷江县',
                        value: 83.1
                    }
                ]

        }

    ]
};