var xAxisData = [];
                var data1 = [];
                var data2 = [];
                var data3 = [];

                xAxisData.push('类目' + -1);
                data1.push('-');
                data2.push('-');
                data3.push('-');

                for (var i = 0; i < 5; i++) {
                    xAxisData.push('类目' + i);
                    data1.push((-Math.random() - 0.2).toFixed(3));
                    data2.push((Math.random() + 0.3).toFixed(3));
                    data3.push((Math.random() + 0.2).toFixed(3));
                }

                xAxisData.push('类目' + i);
                data1.push('-');
                data2.push('-');
                data3.push('-');

                for (; i < 10; i++) {
                    xAxisData.push('类目' + i);
                    data1.push((-Math.random() - 0.2).toFixed(3));
                    data2.push((Math.random() + 0.3).toFixed(3));
                    data3.push((Math.random() + 0.2).toFixed(3));
                }
                xAxisData.push('类目' + i);
                data1.push('-');
                data2.push('-');
                data3.push('-');

                var itemStyle = {
                    normal: {
                        lineStyle: {
                            width: 2
                        },
                        areaStyle: {
                        }
                    }
                };

                option={
					  title : {
                        text: '曲线区域图',
                        x: 'center'
                    },
                    legend: {
						top:30,
                        data: ['line', 'line2', 'line3']
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'line'
                        }
                    },
                    xAxis: {
                        data: xAxisData,
                        boundaryGap: false,
                        splitArea: {
                            show: true
                        }
                    },
                    yAxis: {
                    },
                    series: [{
                        name: 'line',
                        type: 'line',
                        stack: 'all',
                        symbolSize: 10,
                        data: data1,
                        itemStyle: itemStyle,
                        smooth: true,
                        connectNulls: true
                    }, {
                        name: 'line2',
                        type: 'line',
                        stack: 'all',
                        symbolSize: 10,
                        data: data2,
                        itemStyle: itemStyle,
                        connectNulls: true,
                        smooth: true
                    }, {
                        name: 'line3',
                        type: 'line',
                        stack: 'all',
                        symbolSize: 10,
                        data: data3,
                        itemStyle: itemStyle,
                        label: {
                            normal: {
                                show: true
                            }
                        },
                        connectNulls: true,
                        smooth: true
                    }]
                }