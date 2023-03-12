option = {
            color: ['#0086d0'],
            backgroundColor: '#fff',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                formatter: function (objs, index) {
                    let obj = objs[0];
                    return `${obj.name}<br/>${obj.marker}${obj.seriesName} : ${obj.value}%`;
                },
            },
            grid: {
                top: '3%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true,

            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
                data: [0, 20, 40, 60, 80, 100],
                interval: 20,
                min: 0,
                max: 100,
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#909396',

                    }
                },
                axisLabel: {
                    formatter: function (value, index) {
                        return value + '%';
                    },
                    color: '#303439'
                },
                axisTick: {
                    show: false,
                }
            },
            yAxis: {
                type: 'category',
                boundaryGap: true,
                splitArea: {
                    areaStyle: {
                        opacity: 0
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#909396',

                    }
                },
                data: [
                    'Bank Duration Months',
                    'New/Exsiting Customer',
                    'Requested Amount',
                    'Address Duration Months',
                    'Income Duration Months',
                    'ThreatMetrix Rating',
                    'Income Type',
                    'Requested Hour',
                    'new Value',
                    'new Value1'
                ]
            },
            series: [
                {
                    name: 'Scoring Attributes',
                    barMaxWidth: 20,
                    type: 'bar',
                    data: [
                        {
                            value: 10,
                            itemStyle: {
                                color: '#0086d0',
                            }
                        },
                        {
                            value: 20,
                            itemStyle: {
                                color: '#6fccff',
                            }
                        },
                        {
                            value: 40,
                            itemStyle: {
                                color: '#0086d0',
                            }
                        },
                        {
                            value: 60,
                            itemStyle: {
                                color: '#6fccff',
                            }
                        },
                        {
                            value: 70,
                            itemStyle: {
                                color: '#0086d0',
                            }
                        },
                        {
                            value: 80,
                            itemStyle: {
                                color: '#6fccff',
                            }
                        },
                        {
                            value: 90,
                            itemStyle: {
                                color: '#0086d0',
                            }
                        },
                        {
                            value: 100,
                            itemStyle: {
                                color: '#6fccff',
                            }
                        },
                        {
                            value: 100,
                            itemStyle: {
                                color: '#6fccff',
                            }
                        },
                        {
                            value: 100,
                            itemStyle: {
                                color: '#6fccff',
                            }
                        },
                    ]
                },

            ]
        };