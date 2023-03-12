var chartData = [18, 28, 15, 6, 17];
var chartName = ['1、深圳优品科创技术有限公司', '2、深圳优品科创技术有限公司', '3、深圳优品科创技术有限公司', '4、深圳优品科创技术有限公司', '5、深圳优品科创技术有限公司'];
var y1Data = ['1870', '870', '670', '470', '270'];
var y2Data = ['89', '72', '69', '56', '46'];
var myColor = ['#34c8c8'];
option = {
    backgroundColor: '#fff',
    grid: {
        right: '20%',
        containLabel: true
    },
    xAxis: [{
            show: false,
        },
        {
            show: false,
        }
    ],
    yAxis: [{
            type: 'category',
            inverse: true,
            show: false
        }, {
            type: 'category',
            show: true,
            name: '金额(万元)',
            nameLocation: 'start',
            position: 'right',
            data: y1Data,
            inverse: true,
            nameTextStyle: {
                color: '#999',
                align: 'center',
                padding: [0, 0, 0, 1450]
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        },
        {
            type: 'category',
            show: true,
            name: '到达率',
            nameLocation: 'start',
            position: 'right',
            data: y2Data,
            offset: 100,
            inverse: true,
            nameTextStyle: {
                color: '#999',
                align: 'center',
                padding: [0, 0, 0, 35]
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],

    series: [
        //亮色条 百分比
        {
            show: true,
            type: 'bar',
            barGap: '-100%',
            barWidth: '20%',
            yAxisIndex: 0,
            z: 2,
            itemStyle: {
                normal: {
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    }
                }
            },
            label: {
                normal: {
                    show: false,
                    textStyle: {
                        color: '#000',
                        fontSize: 25,
                        fontWeight: 'bold'
                    },
                    position: 'right',
                    formatter: function(data) {
                        return (chartData[data.dataIndex]).toFixed(2) + '%';
                    }
                }
            },
            data: chartData,
        },
        //公司名
        {
            show: true,
            type: 'bar',
            xAxisIndex: 1, //代表使用第二个X轴刻度
            yAxisIndex: 0,
            barGap: '-100%',
            barWidth: '10%',
            itemStyle: {
                normal: {
                    barBorderRadius: 200,
                    color: 'transparent'
                }
            },
            label: {
                normal: {
                    show: true,
                    position: [0, '-20'],
                    textStyle: {
                        fontSize: 14,
                        color: '#333',
                    },
                    formatter: function(data) {
                        return chartName[data.dataIndex];
                    }
                }
            },
            data: chartData
        }
    ]
};