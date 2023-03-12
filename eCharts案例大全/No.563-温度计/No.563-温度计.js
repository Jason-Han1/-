var data = [10];
            var xMax = 70;
            var kd = [];
            // 刻度使用柱状图模拟，短设置3，长的设置5；构造一个数据
            for (var i = 0, len = 70; i <= len; i++) {
                if (i > 70) {
                    kd.push('0')
                } else {
                    if (i % 5 === 0) {
                        kd.push('5');
                    } else {
                        kd.push('3');
                    }
                }

            }
            var option = {
                backgroundColor:'#0e1733',
                xAxis: [{
                    show: false,
                    min: 0,
                    max: 70,
                }, {
                    show: false,
                    data: [],
                    min: 0,
                    max: 70,
                }],
                yAxis: [{
                    show: false,
                    data: [],
                }, {
                    show: false,
                    data: [],
                }, {
                    show: false,
                    data: [],
                }, {
                    show: false,
                    min:-110,
                    max: 100,
                }],
                series: [
                    {
                    name: ' ',
                    type: 'bar',
                    barWidth: 15,
                    silent: true,
                    barBorderRadius: 30,
                    itemStyle: {
                        normal: {
                            color: '#0D223C',
                            barBorderRadius: 30,
                        }

                    },
                    barGap: '-100%',
                    data: data.map(function(d) {
                        return xMax
                    }),
                    },
                    {
                        name: ' ',
                        type: 'bar',
                        barWidth: 15,
                        silent: true,
                        yAxisIndex: 0,
                        data: [{
                            value: 40,
                            itemStyle: {
                                normal: {
                                    barBorderRadius: 30,
                                    color:'#30E4FF',
                                },
                            }
                        } ],
                    },
                    {
                        name: '刻度',
                        type: 'bar',
                        xAxisIndex: 1,
                        yAxisIndex: 3,
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                distance: 10,
                                color: '#35F7FF',
                                fontSize: 15,
                                formatter: function(params) {
                                    // 因为柱状初始化为0，温度存在负值，所以，原本的0-100，改为0-130，0-30用于表示负值
                                    console.log(params.dataIndex)
                                    if (params.dataIndex < 30&&params.dataIndex % 10 === 0) {
                                        return params.dataIndex - 20+'℃';
                                    } else {
                                        if (params.dataIndex % 10 === 0) {
                                            return params.dataIndex - 20 +'℃';
                                        } else {
                                            return '';
                                        }
                                    }
                                }
                            }
                        },
                        data: kd,
                        barGap:'10%',
                        barWidth: 2,
                        itemStyle: {
                            normal: {
                                color: '#35F7FF',
                                barBorderRadius: 10,
                            }
                        },
                        z: 0
                    }
                    ]
                }; 