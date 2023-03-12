var chartName = ['1111', '2222', '3333', '4444'];
var chartData = [123, 234, 345, 456];
var myColor = ['#7997f0', '#7997f0', '#7997f0'];

option = {
    grid: {
        top: 20
    },
    backgroundColor: '#fff',
    xAxis: [{
            show: false
        },
        {
            show: false,
        }
    ],
    yAxis: {
        type: 'category',
        inverse: false,
        show: false,
        data: chartName
    },
    // dataZoom: [
    //     {
    //         type: 'inside'
    //     }
    // ],
    series: [
        //亮色条 百分比
        {
            show: true,
            type: 'bar',
            barGap: '-100%',
            barWidth: '20%',
            barMaxWidth: '12px',
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
                    show: true,
                    textStyle: {
                        color: '#000',
                        fontSize: 14,
                        fontWeight: 'bold'
                    },
                    position: 'right',
                    formatter: function(data) {
                        return (chartData[data.dataIndex]);
                    }
                }
            },
            data: chartData,
        },
        {
            show: true,
            type: 'bar',
            xAxisIndex: 1, //代表使用第二个X轴刻度
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
                        fontSize: 12,
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