var days_emotion = ['00:00', '06:00', '12:00', '18:00', '24:00', ];

var data_emotion_positive = [12034, 235456, 578123, 593012, 123566];
var data_emotion_negative = [-12034, -23545, -578123, -593012, -123566];

option = {
    backgroundColor: '#333',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [

        {
            data: days_emotion,
            type: 'category',
            splitLine: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    width: 1.5,
                    color: '#597faa'
                }
            },
            axisTick: {
                show: false,
                inside: true,
                alignWithLabel: true
            },
            axisLabel: {
                color: '#C9DFB5',
                fontSize: 12
            }
        }
    ],
    yAxis: [{
        type: 'value',
        splitNumber: 2,
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: 'rgba(255,255,255,.2)'
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                width: 1.5,
                color: '#597faa'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#C9DFB5',
            fontSize: 12
        }

    }],
    series: [{
            name: '流入',
            type: 'bar',
            stack: '总量',
            color: '#FFF83A',
            data: data_emotion_positive
        },
        {
            name: '流出',
            type: 'bar',
            stack: '总量',
            color: '#A0FF47',
            data: data_emotion_negative
        }
    ]
};
myChart.setOption(option);