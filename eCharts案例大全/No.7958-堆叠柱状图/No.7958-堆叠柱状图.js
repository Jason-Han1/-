var chartData = [35, 28, 15, 6, 17, 8, 8];
var chartData1 = [40, 28, 15, 6, 17, 8, 8].reverse();
var chartName = ['团队1', '团队2', '团队3', '团队4', '团队5', '团队6', '团队7'];
option = {
    title: {
        text: '堆叠柱状图',
        textStyle: {
            color: '#000',
            fontSize: 18,
        }
    },

    backgroundColor: '#fff',
    grid: {
        left: '2%',
        right: '40%',
        bottom: '10%',
        top: '10%',
        containLabel: true
    },
    xAxis: [{
            show: false,
        },
        {
            show: false,
        }
    ],
    yAxis: {
        type: 'category',
        inverse: true,
        show: false
    },

    series: [
        //亮色条 百分比
        {
            show: true,
            type: 'bar',
            barGap: '-100%',
            barWidth: '20%',
            stack: 'a',
            z: 2,
            itemStyle: {
                normal: {
                    color: '#14f6cf'
                }
            },
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#000',
                        fontSize: 12
                    },
                    position: ['0', '15'],
                    formatter: function(data) {
                        return (chartData[data.dataIndex]).toFixed(2) + '%';
                    }
                }
            },
            data: chartData,
        },
        //亮色条 百分比
        {
            show: true,
            type: 'bar',
            barGap: '-100%',
            barWidth: '20%',
            stack: 'a',
            z: 2,
            itemStyle: {
                normal: {
                    color: '#14b9f6'
                }
            },
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#000',
                        fontSize: 12
                    },
                    position: ['0', '15'],
                    formatter: function(data) {
                        return (chartData1[data.dataIndex]).toFixed(2) + '%';
                    }
                }
            },
            data: chartData1,
        },
        //年份
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