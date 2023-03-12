option = {
    xAxis: {
        type: 'value',
        max:200
    },
    yAxis: {
        type: 'value',
        max:120
    },
    series: [{
        data: [[110,80]],
        smooth:true,//折点是圆弧状的
        showSymbol: true,
        symbol: 'triangle',     //折点设定为实心点
        symbolSize: 10,   //设定实心点的大小
        label: {
            show: true,
            position: 'top',
            formatter: [
                '{a|110/}{b|80mmhg}'
            ].join('\n'),
            rich: {
                a: {
                   color:"#1F2E54",
                },
                b: {
                    color:"#1F2E54",
                },
            },
        },
        type: 'line',
        markArea: {
                silent: true,
                label:{
                    position: ['80%', '15px'],
                    color:"#1F2E54",
                },
                data: [
                    [{
                        name: '三级高血压',
                        yAxis: 0,
                        xAxis: 0,
                        itemStyle: {
                        color: '#E62E29'
                        },
                    }, {
                        yAxis: 300,
                        xAxis: 300,
                    }],
                    [{
                        name: '二级高血压',
                        yAxis: 0,
                        xAxis: 0,
                        itemStyle: {
                        color: '#EF5450'
                        },
                    }, {
                        yAxis: 110,
                        xAxis: 180,
                    }],
                    [{
                        name: '一级高血压',
                        yAxis: 0,
                        xAxis: 0,
                        itemStyle: {
                        color: '#F27744'
                        },
                    }, {
                        yAxis: 100,
                        xAxis: 160,
                    }],
                    [{
                        name: '正常高值',
                        yAxis: 0,
                        xAxis: 0,
                        itemStyle: {
                        color: '#1CC434'
                        },
                    }, {
                        yAxis: 90,
                        xAxis: 140,
                    }],
                    [{
                        name: '理想血压',
                        yAxis: 0,
                        xAxis: 0,
                        itemStyle: {
                        color: '#93FF92'
                        },
                    }, {
                        yAxis: 80,
                        xAxis: 120,
                    }],
                    [{
                        name: '低血压',
                        yAxis: 0,
                        xAxis: 0,
                        itemStyle: {
                            color: '#29EBC9'
                        },
                    }, {
                        yAxis: 60,
                        xAxis: 90,
                    }]
                ]
            }
    }]
};