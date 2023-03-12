var _x = $('#chart-panel')[0].offsetWidth;
var _y = $('#chart-panel')[0].offsetHeight;

var cx = _x / 2 - 10;
var cy = _y * 0.6 - 15;
var radius = _x > _y ? _y * 0.35 : _x * 0.35;
var value = 40;
option = {
    backgroundColor: "#ffffff",
    color: ["#37A2DA", "#32C5E9", "#67E0E3"],
    series: [{
        name: '业务指标',
        type: 'gauge',
        center: ["50%", "60%"],
        startAngle: 180,
        endAngle: 0,
        detail: {
            formatter: function(value) {
                if (value <= 30) {
                    option.graphic[0].style.fill = '#67e0e3';
                    option.graphic[0].style.stroke = '#67e0e3';
                } else if (value > 70) {
                    option.graphic[0].style.fill = '#fd666d';
                    option.graphic[0].style.stroke = '#fd666d';
                } else {
                    option.graphic[0].style.fill = '#37a2da';
                    option.graphic[0].style.stroke = '#37a2da';
                }
                return value.toFixed(0) + '%';
            }
        },
        pointer: {
            color: "auto"
        },
        axisLine: {
            show: true,
            lineStyle: {
                width: 30,
                shadowBlur: 0,
                color: [
                    [0.3, '#67e0e3'],
                    [0.7, '#37a2da'],
                    [1, '#fd666d']
                ]
            }
        },
        data: [{
            value: 50,
            name: '完成率',
        }]

    }],
    animationDuration: 2E3,
    animationDurationUpdate: 2E3,
    graphic: [{
        type: 'circle',
        shape: {
            r: 20,
            cx: cx - radius * Math.cos(Math.PI * (value / 100)),
            cy: cy - radius * Math.sin(Math.PI * (value / 100))
        },
        style: {
            fill: '#67e0e3',
            stroke: '#67e0e3',
            lineWidth: 3
        },
        z: 13
    }]
};

option.series[0].data[0].value = value - 0;
myChart.setOption(option, true);