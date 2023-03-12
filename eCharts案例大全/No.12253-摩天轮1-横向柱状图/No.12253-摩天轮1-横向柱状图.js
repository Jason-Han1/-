
// 本月已经完成/目标
var chartData = [10, 16, 17,20];
var chartName = ['2017  Q1', '2017  Q2', '2017  Q3', '2017  Q4'];
var chartUnit='元';
var myColor = ['#FFA483','#F97F53','#F45922'];
option = {
    //  title: {
    //     text: '单位:  '+chartUnit,
    //     right:0,
    //     textStyle: {
    //         color: '#000',
    //         fontSize:14,
    //     }
    // },
   
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
            barWidth: '10%',
            z: 2,
            itemStyle: {
                normal: {
                    barBorderRadius:10,
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
                    },
                    position: 'right',
                    formatter: function(data) {
                        return (chartData[data.dataIndex]).toFixed(2)+chartUnit+'\n\n\n';
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
                    position: [0, '-23'],
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