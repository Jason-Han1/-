var aqi = 250;

var percent = 80 / 500 * aqi;
var angle = 126 + 288 / 80 * percent;

var _x = $('#chart-panel')[0].offsetWidth - 20;
var _y = $('#chart-panel')[0].offsetHeight;
var r = _y / 2 - 105;

var getColor_Text = function(aqiValue) {
    if (aqiValue <= 50) {
        return {
            color: '#008000',
            text: '优'
        }
    } else if (aqiValue <= 100) {
        return {
            color: '#FFFF00',
            text: '良'
        }
    } else if (aqiValue <= 150) {
        return {
            color: '#FFA500',
            text: '轻度污染'
        }
    } else if (aqiValue <= 200) {
        return {
            color: '#FF0000',
            text: '中度污染'
        }
    } else if (aqiValue <= 300) {
        return {
            color: '#800080',
            text: '重度污染'
        }
    } else {
        return {
            color: '#800000',
            text: '严重污染'
        }
    }
};

option = {
    series: {
        radius: ['79%', '80%'],
        center: [_x / 2, _y / 2],
        type: 'pie',
        hoverAnimation: false,
        startAngle: 234,
        color: [getColor_Text(aqi).color, '#305568', 'transparent'],
        label: {
            normal: {
                show: true
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [percent, 80 - percent, 20]
    },
    graphic: [{
        type: 'circle',
        shape: {
            r: 10,
            cx: _x / 2 + r * Math.cos(angle * Math.PI / 180),
            cy: _y / 2 + r * Math.sin(angle * Math.PI / 180)
        },
        style: {
            fill: getColor_Text(aqi).color,
            stroke: getColor_Text(aqi).color,
            lineWidth: 3
        },
        z: 3
    }, {
        type: 'text',
        left: 'center',
        top: _y / 2 - 65,
        style: {
            text: aqi,
            font: 'bolder 55px "Europe_Ext"',
            textAlign: 'center',
            textVeticalAlign: 'middle',
            fill: getColor_Text(aqi).color
        }
    }, {
        type: 'text',
        left: 'center',
        top: _y / 2 + 15,
        style: {
            text: getColor_Text(aqi).text,
            font: 'bolder 30px "Noto Sans CJK SC"',
            textAlign: 'center',
            textVeticalAlign: 'middle',
            fill: getColor_Text(aqi).color
        }
    }]
};