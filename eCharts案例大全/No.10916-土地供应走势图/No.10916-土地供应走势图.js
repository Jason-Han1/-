 setTimeout(function () {
            var option = {
                color: ['#db8258', '#ba9d9b', '#289dac', '#287a25', '#008fd6', '#e7bb2f', '#c93534'],
                title: {
                    text: '土地供应走势图',
                    textStyle: {
                        fontWeight: 'normal',
                        fontSize: 20,
                        color: '#F1F1F3'
                    },
                    top: "0",
                    left: '5%'
                },
                legend: {
                    textStyle: {
                        color: '#fff'
                    },
                    top: '8%',
                    left: '5%'
                },
                tooltip: {
                    trigger: 'axis',
                    showContent: false
                },
                dataset: {
                    source: [
                        ['product', '2018-06', '2018-07', '2018-08', '2018-09', '2018-10', '2018-11', '2018-12', '2019-01', '2019-02', '2019-03', '2019-04', '2019-05'],
                        ['惠城区', 320, 302, 301, 334, 390, 330, 320, 320, 302, 301, 334, 390,],
                        ['仲恺区', 120, 132, 101, 134, 90, 230, 210, 101, 134, 90, 230, 210],
                        ['惠阳区', 220, 182, 191, 234, 290, 330, 310, 182, 191, 234, 290, 330],
                        ['大亚湾', 150, 212, 201, 154, 190, 330, 410, 212, 201, 154, 190, 330,],
                        ['博罗县', 820, 832, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320],
                        ['惠东县', 901, 934, 1290, 1330, 1320, 820, 832, 901, 934, 1290, 1330, 1320],
                        ['龙门县', 150, 212, 201, 154, 190, 330, 410, 212, 201, 154, 190, 330,]
                    ]
                },
                xAxis: {
                    type: 'category',
                    axisLabel: {
                        textStyle: {
                            color: '#ffffff',
                            fontSize: '14',
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#ffffff'
                        }
                    },
                },
                yAxis: {
                    gridIndex: 0,
                    axisLabel: {
                        textStyle: {
                            color: '#ffffff',
                            fontSize: '14',
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#ffffff'
                        }
                    },
                    splitLine: {
                        show: true
                    },
                },
                grid: {
                    top: '15%',
                    left: '8%',
                    right: '40%',
                },
                series: [
                    {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                    {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                    {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                    {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                    {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                    {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                    {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                    {
                        type: 'pie',
                        id: 'pie',
                        radius: '30%',
                        center: ['77%', '50%'],
                        label: {
                            formatter: '{b}: {@2018-06} ({d}%)'
                        },
                        encode: {
                            itemName: 'product',
                            value: '2018-06',
                            tooltip: '2018-06'
                        }
                    }
                ]
            };
            myChart.on('updateAxisPointer', function (event) {
                var xAxisInfo = event.axesInfo[0];
                if (xAxisInfo) {
                    var dimension = xAxisInfo.value + 1;
                    myChart.setOption({
                        series: {
                            id: 'pie',
                            label: {
                                formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                            },
                            encode: {
                                value: dimension,
                                tooltip: dimension
                            }
                        }
                    });
                }
            });

            myChart.setOption(option);

        });