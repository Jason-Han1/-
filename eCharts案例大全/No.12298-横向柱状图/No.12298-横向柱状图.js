
// 本月已经完成/目标
var chartData = [10, 16, 17];
var chartName = ['2015', '2016', '2017'];
var unit='倍';
var myColor = ['#FFA483','#F97F53','#F45922'];
option = {
     title: {
        text: '单位:  '+unit,
        right:0,
        textStyle: {
            color: '#000',
            fontSize:14,
        }
    },
   
    backgroundColor: '#fff',
    grid: {
        left: '2%',
        right: '10%',
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
                        fontSize: 25,
                        fontWeight: 'bold'
                    },
                    position: 'right',
                    formatter: function(data) {
                        return (chartData[data.dataIndex]).toFixed(2);
                    }
                }
            },
            data: chartData,
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
                        fontSize:14,
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