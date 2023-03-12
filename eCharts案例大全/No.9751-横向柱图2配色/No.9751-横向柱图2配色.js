
var chartData = [18,28,15,6,17];
var chartName = ['CONTINUED ghostrat activity', 'CONTINUED ghostrat activity', 'CONTINUED ghostrat activity','CONTINUED ghostrat activity','CONTINUED ghostrat activity'];
// var unit='亿元';

option = {
    
   
     backgroundColor: '#0e2147',
    grid: {
         left:10,
        top:10,
        bottom:20,
        right:20,
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
            barWidth: '9',
            z: 2,
            itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#00fff6'},
                        {offset: 1, color: '#1c84ff'}
                    ]
                ),
                 shadowColor: '#1685ff',
                    shadowBlur: 15,
                    shadowOffsetY: 0
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
                        color: '#fff',
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