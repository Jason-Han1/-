var _x = $('#chart-panel')[0].offsetWidth;
var _y = $('#chart-panel')[0].offsetHeight;

var cx = _x / 2 - 30;
var cy = _y * 0.5 ;
var radius = _x > _y ? _y * 0.35 : _x * 0.35;
var value = 60;
option = {
    series: [{
        name: 'ss',
        type: 'gauge',
        center: ["50%", "80%"],
        data: [{
            value: value
        }],
        radius: '100%',
        splitNumber: 4,
        startAngle: 180,
        endAngle: 0,
        axisLine: {
            lineStyle: {
                color: [[0.25, new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: '#C84048'
                },
                {
                    offset: 1,
                    color: '#A95043'
                }])], [0.5, new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: '#A25545'
                },
                {
                    offset: 1,
                    color: '#686E42'
                }])], [0.75, new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#617144'
                },
                {
                    offset: 1,
                    color: '#48522D'
                }])], [1, new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#43512D'
                },
                {
                    offset: 1,
                    color: '#3A4328'
                }])]],
                width: 15
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            distance: 5,
            color: '#A1A1A1',
            fontSize: 14,
        },
        splitLine: {
            length: 15
        },
        pointer: {
            length: '65%',
            width: 8
        },
        itemStyle: {
            color: '#A1A1A1'
        },
        detail: {
            formatter: [`
                itsExtreme
            `].join(''),
            rich: {
                a: {
                    color: '#000',
                    fontWeight: 'bold',
                    fontSize: 15,
                    padding: [5, 10, 5, 10]
                },
                b: {
                    backgroundColor: '#48522D',
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: '#fff',
                    padding: [5, 10, 5, 10]
                }
            }
        },
        markPoint: {
            data: [{
                x: '50%',
                y: '51%',
                symbol: 'circle',
                itemStyle: {
                    color: '#fff',
                    borderWidth: 0.5,
                    borderColor: '#ccc'
                },
                symbolSize: 30,
            }],
            animation: false
        }
    },
    
    ],
     graphic: [{
        type: 'circle',
        shape: {
            r: 30,
            cx: cx - radius * Math.cos(Math.PI * (value / 100)),
            cy: cy - radius * Math.sin(Math.PI * (value / 100))
        },
        style: {
            fill: '#c3494a',
            stroke: '#c3494a',
            lineWidth: 3,
            text:value,
            textFill:'#fff',
            fontSize: 22
        },
        z: 13
    }]
}