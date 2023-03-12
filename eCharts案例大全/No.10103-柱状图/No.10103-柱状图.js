var data1 = [15, 22, 36];
    var data3 = [20, 30, 20];
    var datacity = ['数据1', '数据2', '数据3'];
    var option = {
        backgroundColor: '#191E40',
        // color: ['#388BFF', '#05C3FA', '#F6931C', '#FFD52E'],
        tooltip: {
            trigger: 'axis',
        },
        // legend: {
        //     top: '8%',
        //     data: ['存量', '新增', '拆除', '整改'],
        // },
        grid: { //图表的位置
            top: '5%',
            left: '5%',
            right: '5%',
            bottom: '5%',
            // containLabel: true
        },
        xAxis: [{
            type: 'category',
            // axisLabel: {
            //     interval: 0,
            //     show: true,
            //     splitNumber: 15,
            //     textStyle: {
            //         fontSize: 10,
            //         color: '#000'
            //     },
            //
            // },
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    color: "rgba(255,255,255,.8)",
                    fontSize: '12',
                }
            },
            data: datacity,
        }],
        yAxis: [{
            // type: 'value',
            // axisLabel: {
            //     show: true,
            //     interval: 'auto',
            //     formatter: '{value} '
            // },
            // splitLine: {
            //     show: true,
            //     lineStyle: {
            //         type: 'dashed'
            //     }
            // },
            // show: true
            show: true,
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    color: "rgba(255,255,255,.8)",
                    fontSize: '12',
                }
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: "rgba(255,255,255,0.1)",
                }
            }
        }],
        series: [
            {
                name: '今日数据量',
                type: 'bar',
                stack: 'sum',
                barGap: '80%',
                barWidth: '15px',
                data: data1,
                label: {
                    show: true,
                    position: 'top',
                    color: '#fff',
                    // formatter: '{c}%',
                    formatter: '使用量{c}',
                },
                itemStyle: {
                    normal: {
                        barBorderRadius: 5,
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {
                                    offset: 0,
                                    color: 'rgba(116,57,229,1)'
                                },
                                {
                                    offset: 0.2,
                                    color: 'rgba(116,57,229,0.8)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(116,57,229,0.7)'
                                }
                            ]
                        )
                    }
                },
            },
            {
                name: '昨日数据量',
                type: 'bar',
                stack: 'sum1',
                barGap: '80%',
                barWidth: '15px',
                data: data3,
                itemStyle: {
                    normal: {
                        barBorderRadius: 5,
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {
                                    offset: 0,
                                    color: 'rgba(104,195,252,1)'
                                },
                                {
                                    offset: 0.2,
                                    color: 'rgba(104,195,252,0.8)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(104,195,252,0.5)'
                                }
                            ]
                        )
                    }
                },
            },
        ]
    };