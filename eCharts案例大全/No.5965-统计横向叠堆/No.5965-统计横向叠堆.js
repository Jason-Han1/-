var legendData =  ['a', 'b', 'c'];
var ydata =  ['1', '2', '3', ];
var arrData =  [10, 15, 10, ];//1级风险
var arrData1  =  [19, 5, 40];//2级风险
var arrData2 = [21, 55, 10];//3级风险
option = {
    backgroundColor:'#000',
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: '' // 默认为直线，可选为：'line' | 'shadow'
        },
        backgroundColor: 'rgba(7,22,50,.5)',
        padding:[10,15],
         textStyle: {
            color: '#fff',
            fontSize: 22
        },
    },
    legend: {
        data:legendData,
        top:'1%',
         textStyle: {
            color: '#ccc',
            fontSize:22
        }
    },
    calculable: true,
    xAxis: [{
        type: 'value',
         axisLabel: {
            fontSize:22,
            color: '#fff'

        },
         splitLine: {
            show: true,
             lineStyle:{
                color:'rgba(255,255,255,.4)'
            }
        }
    }],
    yAxis: [{
        type: 'category',
        data:ydata,
         axisLabel: {
            fontSize:22,
            color: '#fff'

        },
         splitLine: {
            show: true,
             lineStyle:{
                color:'rgba(255,255,255,.4)'
            }
        }
    }],
    series: [{
            name: 'a',
            type: 'bar',
            stack: '总量',
            barWidth: 80,
            itemStyle: {
                normal: {
                    color: 'rgba(129,12,34,1)',
                    borderColor: 'red',
                    borderWidth: 2,
                    label: {
                        show: false,
                        position: 'insideRight'
                    }
                }
            },
            data:arrData
        },
        {
            name: 'b',
            type: 'bar',
            stack: '总量',
            barWidth: 80,
            itemStyle: {
                normal: {
                    color: 'rgba(132,140,82,1)',
                    borderColor: 'yellow',
                    borderWidth: 2,
                    label: {
                        show: false,
                        position: 'insideRight'
                    },

                }
            },
            data:arrData1
        },
        {
            name: 'c',
            type: 'bar',
            stack: '总量',
            barWidth: 80,
            itemStyle: {
                normal: {
                    color: 'rgba(7,111,178,1)',
                    borderColor: '#22e7e9',
                    borderWidth: 2,
                    label: {
                        show: false,
                        position: 'insideRight'
                    }
                }
            },
            data: arrData2
        },
    ]
};
myChart.setOption(option);