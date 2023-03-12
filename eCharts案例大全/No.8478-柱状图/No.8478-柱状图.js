var yData = ["柱子的名字1", "柱子的名字2", "柱子的名字3", "柱子的名4字", "柱子的名字5"];
    var seriesData = [200, 400, 300, 200, 100];
    var barMax = Math.max(...seriesData) + 100
    var seriesBgData = [];
    for (var i = 0; i < seriesData.length; i++) {
        seriesBgData.push(barMax)
    }
        var option = {
            backgroundColor:"#000",
            tooltip: {
                show: false
            },
            legend: {
                show: false
            },
            grid: [{
                left: '10%',
                right: '15%',
                bottom: '9%',
                top: '3%',
                containLabel: true
            }, {
                left: '4%',
                right: '4%',
                bottom: '9%',
                top: '3%',
                containLabel: true
            }],
            xAxis: [{
                type: 'value',
                show:false,
                gridIndex: 0
            }, {
                type: 'value',
                show: false,
                gridIndex: 1
            }],
            yAxis: [{
                triggerEvent: true,
                inverse: true,
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    color: '#fff',
                    interval: 0,
                    fontWeight: 'normal',
                    fontSize: 14,
                    formatter: function(value, index) {
                        if (index < 3) {
                            return '{idx' + index + '|' + (1 + index) + '} {title|' + value + '}'
                        } else {
                            return '{idx3|' + (1 + index) + '} {title|' + value + '}'
                        }
                    },
                    rich: {
                        title: {
                            align: 'left',
                            width:120,
                        },
                        idx0: {
                            color: '#fff',
                            backgroundColor: "#e60000",
                            barBorderRadius:50,
                            fontSize: 14,
                            align: 'center',
                            width: 24,
                            height: 24,
                        },
                        idx1: {
                            color: '#fff',
                            backgroundColor: "#ff5c33",
                            fontSize: 14,
                            align: 'center',
                            width: 24,
                            height: 24,
                        },
                        idx2: {
                            color: '#fff',
                            backgroundColor: "#ffb366",
                            fontSize: 14,
                            align: 'center',
                            width: 24,
                            height: 24,
                        },
                        idx3: {
                            color: '#fff',
                             backgroundColor: "#ffd9b3",
                            fontSize: 14,
                            align: 'center',
                            width: 24,
                            height: 24,
                        },
                    }
                },
                data: yData,
                gridIndex: 0
            }, {
                show: false,
                type: 'category',
                gridIndex: 1,
            }],
            series: [{
                name: '柱状图',
                type: 'bar',
                barGap: '-100%',
                data: seriesData,
                barWidth: 12,
                itemStyle: {
                    barBorderRadius: [0,12,12,0],
                    color:"#4da6ff"
                },
                label: {
                    normal: {
                        show: true,
                        formatter: '{c}个',
                        color: '#fff',
                        fontSize: 18,
                        color: '#00e6ac',
                        fontWeight: 'bold',
                        padding: [0, 0, 0, 20],
                        position: 'right'
                    }
                },
                z: 100,
                yAxisIndex: 0,
                xAxisIndex: 0
            }, {
                name: '进度条背景',
                type: 'bar',
                barGap: '-100%',
                data: seriesBgData,
                barWidth: 12,
                itemStyle: {
                     barBorderRadius: [0,12,12,0],
                    color: 'rgba(255,255,255,0.5)'
                },
                z: 90,
                yAxisIndex: 0,
                xAxisIndex: 0
            }, {
                name: '背景',
                type: 'bar',
                data: [100, 100, 100, 100, 100],
                barWidth: 48,
                itemStyle: {
                    color: 'rgba(255,255,255,0.1)'
                },
                z: 80,
                yAxisIndex: 1,
                xAxisIndex: 1
            }]
        };