var data = [];

for (var i = 0; i <= 200; i++) {
    var t = i / 10 * Math.PI;
    var r = Math.sin(4 * t) * Math.cos(10 * t);
    data.push([r, i]);
}

option = {
    backgroundColor: "#0c1a2a",
    color: ['#F9FF00'],
    title: {
        text: '极坐标双数值轴',
        x: "center",
        y: "2%",
        textStyle: {
            color: '#fff',
        }
    },
    legend: {
        data: ['line'],
        x: "center",
        y: "6%",

    },
    polar: {
        center: ['50%', '54%']
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: "#F9FF00",
                textStyle: {
                    color: "#0c1a2a"
                }
            }

        }
    },
    angleAxis: {
        type: 'value',
        startAngle: 0,
        axisLine: {
            lineStyle: {
                color: '#fff11',
            }
        }
    },
    radiusAxis: {
        min: 0
    },
    series: [{
        coordinateSystem: 'polar',
        name: 'line',
        type: 'line',
        lineStyle: {
            normal: {
                color: "#15f0ff",
                shadowBlur: 6,
                shadowColor: '#15f0ff',

            },
        },
        showSymbol: false,
        data: data

    }],
    animationDuration: 2000
};