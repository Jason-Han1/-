var sleepingState = ['无', '00:00']

// var sleepingData;

// sleepingData = [{
//     name: '仰睡',
//     value: ['0', '00:00']
// }, {
//     name: '俯睡',
//     value: ['0', '00:00']
// }, {
//     name: '左侧',
//     value: ['0', '00:00']
// }, {
//     name: '右侧',
//     value: ['0', '00:00']
// }, {
//     name: '坐立',
//     value: ['0', '00:00']
// }];

// var sleepingUpData = ['00:00', '0'];
// var sleepingDownData = ['00:00', '0'];
// var sleepingLeftData = ['00:00', '3455555'];
// var sleepingRightData = ['00:00', '3601000'];
// var sleepingNormalData = ['00:00', '0'];

var sleepingUpData = ['0'];
var sleepingDownData = ['0'];
var sleepingLeftData = ['0'];
var sleepingRightData = ['0'];
var sleepingNormalData = ['0'];


option = {
    backgroundColor: '#ffdead',
    grid: {
        left: '5%',
        top: '5%',
        bottom: '5%',
        right: '5%',
        containLabel: true
    },
    title: {
        text: sleepingState[0],
        subtext: sleepingState[1],
        y: 'center',
        x: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: '#0000ff',
            fontSize: 16
        },
        subtextStyle: {
            fontWeight: 'normal',
            color: '#ff0000',
            fontSize: 14,
        }
    },
    tooltip: {
        show: true,
        trigger: 'item',
        formatter: function(params) {
            var milliseconds = params.value;
            var hour;
            var minute;
            var second;

            if (milliseconds > 1000) {
                if (milliseconds / 1000 / 60 > 60) {
                    hour = parseInt(milliseconds / 1000 / 60 / 60);
                    var dif = milliseconds - (hour * 60 * 60 * 1000);
                    minute = parseInt(dif / 1000 / 60);
                    second = parseInt(dif / 1000 % 60);
                    if (hour < 10) {
                        hour = "0" + hour;
                    }
                    if (minute < 10) {
                        minute = "0" + minute;
                    }
                    if (second < 10) {
                        second = "0" + second;
                    }
                    return hour + " 时" + minute + " 分" + second + " 秒";
                } else if (milliseconds / 1000 / 60 > 1) {
                    minute = parseInt(milliseconds / 1000 / 60);
                    second = parseInt(milliseconds / 1000 % 60);
                    if (minute < 10) {
                        minute = "0" + minute;
                    }
                    if (second < 10) {
                        second = "0" + second;
                    }
                    return minute + " 分" + second + " 秒";
                } else {
                    second = parseInt(milliseconds / 1000);
                    return second + " 秒";
                }
            } else {
                if (milliseconds > 0) {
                  return milliseconds + " 毫秒";  
                } else {
                    return '0 秒';
                }
                
            }
        }
    },
    legend: {
        orient: 'horizontal',
        show: false,
        bottom: '0%',
        data: ['仰睡', '俯睡', '左侧', '右侧', '坐立']
    },
    series: [{
        name: '睡姿',
        selectedMode: 'single',
        type: 'pie',
        radius: ['30%', '40%'],
        center: ['50%', '50%'],
        clockwise: false,
        data: [{
            value: sleepingUpData[0],
            name: '仰睡'
        }, {
            value: sleepingDownData[0],
            name: '俯睡'
        }, {
            value: sleepingLeftData[0],
            name: '左侧'
        }, {
            value: sleepingRightData[0],
            name: '右侧'
        }, {
            value: sleepingNormalData[0],
            name: '坐立'
        }],
        label: {
            normal: {
                position: 'layoutSize',
                formatter: '{b}({d}%)',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 18,
                }
            }
        },
        labelLine: {
            normal: {
                show: true
            }
        },
        itemStyle: {
            normal: {
                borderWidth: 0.5,
                borderColor: '#fff',
            },
            emphasis: {
                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }],
    color: [
        '#ff0000',
        '#006633',
        '#0000ff',
        '#ff6600',
        '#660088'
    ]
};

setInterval(function() {

    // option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    // option.series[0].data[1].value = (Math.random() * 100).toFixed(2) - 0;
    // option.series[0].data[2].value = (Math.random() * 100).toFixed(2) - 0;
    // option.series[0].data[3].value = (Math.random() * 100).toFixed(2) - 0;
    // option.series[0].data[4].value = (Math.random() * 100).toFixed(2) - 0;
    // myChart.setOption(option, true);
}, 2000);