option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
        type: 'value',
        // axisLine: {
        //     lineStyle: {
        //         color: 'red',
        //     },
        // },
        // axisLabel: {
        //     formatter: '{value}',
        // },
    },
    series: [
        {
            data: [820, 932, 900, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true,
        },
        {
            data: [720, 632, 71, 234, 290, 330, 1520],
            type: 'line',
            smooth: true,
        },
        {
            name: '平行于y轴的趋势线',
            type: 'line',
            //data:[0],
            markLine: {
                itemStyle: {
                    //盒须图样式。
                    color: 'red', //boxplot图形的颜色。 默认从全局调色盘 option.color 获取颜色
                    borderColor: 'blue', //boxplot图形的描边颜色。支持的颜色格式同 color，不支持回调函数。
                    //	type: 'solid',
                    normal: {
                        lineStyle: {
                            width: 2,
                            type: 'solid', //'dotted'虚线 'solid'实线
                        },
                        label: {
                            show: true,
                            position: 'end',
                            color: 'black',
                            // formatter: function (params) {
                            //     str = '-3μ';
                            //     return str;
                            // },
                        },
                    },
                },
                name: 'aa',
                // symbol:'none',//去掉箭头
                symbol: ['arrow', 'arrow'],
                data: [[
            
                    // {yAxis: "300"},
                    { coord: ['Wed', 71] },
                    { coord: ['Wed', 900] },
                    //{ coord: 900 }, //如何获取grid上侧最大值，目前是写死的
                
                ]],
            },
        },
    ],
};
