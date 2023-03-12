 // 指定图表的配置项和数据
        var option = {
            title: {
                text: '第一个 ECharts 实例'
            },
            tooltip: {},
            legend: {
                data: ['销量']
            },
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
               // stack: '总量', // 叠加最后一个
                type: 'line',
                smooth: true,
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'red' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'white' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                },
                // data: [5, 20, 36, 10, 10, 20]
                data: [1154, 1037, 1147, 1134, 1149, 1129, 1168, 1160, 1031, 0],
            }, {
                name: '销量1',
                type: 'line',
                stack: '总量', // 叠加最后一个

                smooth: true,
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'blue' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'white' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                },
                // data: [45, 40, 36, 30, 20, 10]
                data: [5666, 5102, 5651, 5444, 5648, 5471, 5652, 5617, 4917, 0]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
