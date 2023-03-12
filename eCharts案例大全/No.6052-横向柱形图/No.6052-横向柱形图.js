var cost = [10, 30, 45, 62, 80]//本期比上期（大于1按1处理）
var grade = ['未处理','事件总数','告警数','预警数','已处理', ]
option = {
    xAxis: {
        show: false,
    },
    grid:{
        left:'10%'
    },
    yAxis: {
        type: 'category',
        axisLabel: {
            show: true,
            margin:30,
            color: '#333',
            fontSize: 12
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        data: grade
    },
    series: [ {
        type: 'bar',
        barWidth: '25%',
         itemStyle: {
             normal: {
                color: '#3800ff'
            }
        },
        // data: cost.reverse(),
        data: cost
    }]
}
