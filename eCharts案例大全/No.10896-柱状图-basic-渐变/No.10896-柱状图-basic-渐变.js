option = {
    backgroundColor: '#011c3a',
    xAxis: {
        data: ['第一个', '第二个', '第三个', '第四个', '第五个', '第六个', '第七个'],
        axisLine: {
            lineStyle: {
                color: '#124B70'
            }
        },
        axisLabel: {
            color: '#fff',
            fontSize: 14
        }
    },
    yAxis: {
        nameTextStyle: {
            color: '#fff',
            fontSize: 16
        },
        axisLine: {
            lineStyle: {
                color: '#124B70'
            }
        },
        axisLabel: {
            color: '#fff',
            fontSize: 16
        },
        splitLine: {
            show:false
        },
        axisTick: {
            show: false
        }
    },
    series: [{
        type: 'bar',
        barWidth: 18,
        itemStyle:{
            normal:{
                color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#4BB4FD'
                }, {
                    offset: 0.8,
                    color: '#2987C8'
                }], false)
            }
        },
        data: [1,2,3,4,5,6,7]
    }]
};