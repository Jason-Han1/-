var maxValue = 1200;
var option = {
    title: {
     
    },
    tooltip: {
        formatter: "{a} : {c}"
    },
    toolbox: {

    },
    series: [{
        name: '',
        type: 'gauge',
        min: 0,
        max: maxValue,
        startAngle: 0,
        endAngle: 359.9,
        radius: '80%',
        splitNumber: 12,
        clockwise: false,
        animation: false,
        detail: {
            formatter: '{value}',
            textStyle: {
                color: '#63869e'
            }
        },
        data: [{
            value: maxValue * 3/4,
            name: ''
        }],
        axisLine: {
            lineStyle: {
                color: [
                    [0, '#ffffff'],
                    [1, '#63869e']
                ],
                width: 10
            }
        },
        splitLine: {
            length: 10,
            lineStyle: {
                color: '#ffffff',
                width: 2
            }
        },
        itemStyle: {
            normal: {
                color: 'green',
                width: 2
            }
        }
    }]
};

setInterval(function() {
    var courseOverGround = (Math.random() * maxValue).toFixed(2);
    var startAngle = parseFloat(courseOverGround * 360/maxValue) + 90;
    var endAngle = parseFloat(startAngle) + 359.9;
    option.series[0].data[0].value = courseOverGround;
    option.series[0].startAngle = startAngle;
    option.series[0].endAngle = endAngle;
    myChart.setOption(option, true);
}, 1000);