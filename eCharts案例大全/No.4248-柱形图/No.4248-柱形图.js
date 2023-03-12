    var option = {
        grid: {
            bottom: '10%'
        },
        legend: {
            data: ['最高值', '最小值', '平均线'],
            top: 10
        },
        xAxis: {
            data: [
                '0-49',
                '51-100',
                '101-150',
                '151-200',
                '201-250',
                '251-300',
                '301-350',
                '351-400',
                '401-450',
                '450-500'
            ],
            splitLine: {
                show: false
            }
        },
        yAxis: {},
        series: [{
                name: '活跃用户',
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var colorList = [
                                '#FA6E86',
                                '#FA6E86',
                                '#FA6E86',
                                '#F5C9A6',
                                '#F5C9A6',
                                '#FDE466',
                                '#FDE466',
                                '#5AB1EF',
                                '#5AB1EF',
                                '#19D4AE'
                            ]
                            return colorList[params.dataIndex]
                        }
                    }
                },
                barWidth: '50%',
                z: 10,
                data: [5, 20, 36, 10, 10, 20, 60, 30, 40, 20]
            },
            {
                name: '最高值',
                type: 'bar',
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            formatter: '250',
                            position: 'top',
                            distance: '10',
                            textStyle: {
                                color: '#333'
                            }
                        }
                    }
                },
                barWidth: '2',
                barGap: '-50%',
                //    {value:60,itemStyle: {normal: {barBorderColor: 'tomato',barBorderWidth:1,barBorderRadius:0,borderType:"dashed"}},}
                //z:20,
                data: ['', '', '', 60]
            },
            {
                name: '最小值',
                type: 'bar',
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            formatter: '40',
                            distance: '10',
                            position: 'top',
                            textStyle: {
                                color: '#333'
                            }
                        }
                    }
                },
                barWidth: '2',
                barGap: '-50%',
                data: ['', '60', '', '']
            },
            {
                name: '平均线',
                type: 'bar',
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            formatter: '35',
                            position: 'top',
                            distance: '10',
                            textStyle: {
                                color: '#333'
                            }
                        }
                    }
                },
                barWidth: '2',
                barGap: '-50%',
                //  data:[{value:60,itemStyle: {normal: {barBorderColor: 'tomato',barBorderWidth:1,barBorderRadius:0,borderType:"dashed"}},}]
                //z:20,
                data: ['60', '', '', '', '']
            }
        ]
    }