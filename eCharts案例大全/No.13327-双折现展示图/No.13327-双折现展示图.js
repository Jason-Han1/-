var data1 = [6, 20, 25, 21, 13, 10, 3, 5, 1, 1, 2, 1, 0, 0, 0, 4, 1, 1];
var data2 = [5, 20, 25, 21, 15, 10, 7, 5.5, 4, 2.8, 1.5, 0.7, 0.3, 0.1, 0, 0, 0, 0];
var data3 = [203, 80, 49, 35, 18, 8, 1, 0, 1];
var data4 = [45, 18, 8, 11, 14, 8, 4, 0, 0, 0, 1, 2];
var data5 = [200, 27, 10, 3, 4, 1, 2, 0, 0, 2, 0, 0, 1];
var data6 = [993, 200, 63, 41, 26, 18, 11, 5, 3, 1, 0, 1, 1, 1]



option = {
    title: {
        text: '药品费用理论分布与实际分布',
        x: 'center',
        y: 'bottom'
    },
    legend: {
        data: ['实际分布', '理论分布', '地奥心血康胶囊', '灯盏花素注射液', '血塞通注射液', '速效救心丸']
    },
    grid: [{
            top: '5%',
            left: '5%',
            width: '90%',
            height: '90%'
        },
        {
            top: '5%',
            left: '75%',
            width: '16%',
            height: '16%'
        },
        {
            top: '5%',
            left: '55%',
            width: '16%',
            height: '16%'
        },
        {
            top: '25%',
            left: '75%',
            width: '16%',
            height: '16%'
        },
        {
            top: '25%',
            left: '55%',
            width: '16%',
            height: '16%'
        }
    ],
    xAxis: [{
            type: 'category',
            data: ['1500', '3000', '4500', '6000', '7500', '9000', '10500', '12000', '13500', '15000', '16500', '18000', '19500', '21000', '22500', '24000', '25500', '27000']
        },
        {
            type: 'category',
            data: ['200', '400', '600', '800', '1000', '1200', '1400', '1600', '1800'],
            gridIndex: 1,
            axisLabel: {
                show: false
            }
        },
        {
            type: 'category',
            data: ['400', '800', '1200', '1600', '2000', '2400', '2800', '3200', '3600', '4000', '4400', '4800'],
            gridIndex: 2,
            axisLabel: {
                show: false
            }
        },
        {
            type: 'category',
            data: ['400', '800', '1200', '1600', '2000', '2400', '2800', '3200', '3600', '4000', '4400', '4800', '5200'],
            gridIndex: 3,
            axisLabel: {
                show: false
            }
        },
        {
            type: 'category',
            data: ['200', '400', '600', '800', '1000', '1200', '1400', '1600', '1800', '2000', '2200', '2400', '2600', '2800'],
            gridIndex: 4,
            axisLabel: {
                show: false
            }
        }
    ],
    yAxis: [{
        type: 'value'
    }, {
        type: 'value',
        gridIndex: 1,
        axisLabel: {
            show: false
        }
    }, {
        type: 'value',
        gridIndex: 2,
        axisLabel: {
            show: false
        }
    }, {
        type: 'value',
        gridIndex: 3,
        axisLabel: {
            show: false
        }
    }, {
        type: 'value',
        gridIndex: 4,
        axisLabel: {
            show: false
        }
    }],
    series: [{
            name: '理论分布',
            data: data2,
            type: 'line',
            z: 100,
            smooth: true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        width: 5,
                        type: 'dotted' //'dotted'虚线 'solid'实线
                    }
                }
            },
        },
        {
            name: '实际分布',
            data: data1,
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    formatter: (series) => {
                        return data1[series.dataIndex]
                    },
                    position: 'insideTopRight',
                    offset: [0, -30],
                    color: '#000',
                    //  fontSize: 20
                }
            }
        },
        {
            name: '地奥心血康胶囊',
            data: data3,
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1

        },
        {
            name: '灯盏花素注射液',
            data: data4,
            type: 'bar',
            xAxisIndex: 2,
            yAxisIndex: 2

        },
        {
            name: '血塞通注射液',
            data: data5,
            type: 'bar',
            xAxisIndex: 3,
            yAxisIndex: 3

        },
        {
            name: '速效救心丸',
            data: data6,
            type: 'bar',
            xAxisIndex: 4,
            yAxisIndex: 4

        }
    ]
};