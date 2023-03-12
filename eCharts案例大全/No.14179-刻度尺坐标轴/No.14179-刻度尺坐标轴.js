/**
 * Liang
 * 类似刻度尺标线demo
 * 最大值最小值一定要自己设置，不然自动出来的可能会很丑
*/
option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: [
        {
            min: 0,
            max: 400,
            splitLine: {
                show: false
            },
            axisTick: {
                inside: true,
                length: 10
            },
            splitNumber: 20
        },
        {
            min: 0,
            max: 400,
            position: 'left',
            splitLine: {
                show: false
            },
            axisTick: {
                inside: true,
                length: 20
            },
            axisLabel: {
                show: false
            }
        }  
    ],
    series: [{
        type: 'line',
        data:[220, 182, 191, 234, 290, 330, 310]
    }]
};