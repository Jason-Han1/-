var dimensions = [];
var datava0 = [];
var datava1 = [];
var datava2 = [];
for (var i = 0; i < 90; i++) {
    datava0.push((Math.sin(i / 5) * (i / 5 + 5) + i - 6) / 5);
    datava1.push((Math.sin(i / -5) * (i / -15 + -15) + i - -6) / -5);
    datava2.push((Math.sin(i / 15) * (i / 15 + 15) + i - 16) / 5);
}

var option = {
    backgroundColor: '#212121',
    title: {
         text: '数据 ✌ 之美',
        textStyle: {
            align: 'center',
            color: '#000',
            fontSize: 16,
        },
        top: '17',
        left: 'center',
    },
    tooltip: {
        show: true,
        formatter: "{a}:{c}"
    },
    xAxis: {
        data: dimensions,
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: false,
            lineStyle: {
                color: '#FFF',
            }
        },
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#FFF'
            }
        },
        axisTick: {
            show: false
        },
    },
    series: [{
        name: 'TIT',
        type: 'bar',
        color: "#e08b2a",
        itemStyle: {
            normal: {
                shadowBlur:3,
                shadowColor:"#e08b2a",
                shadowOffsetX:0,
                shadowOffsetY:0,
                barBorderRadius: 5
            }
        },
        data: datava0
    }, {
        name: 'TIT',
        type: 'bar',
        color: "#f1ad2c",
        itemStyle: {
            normal: {
                shadowBlur:3,
                shadowColor:"#f1ad2c",
                shadowOffsetX:0,
                shadowOffsetY:0,
                barBorderRadius: 5
            }
        },
        data: datava1
    }, {
        name: 'TIT',
        type: 'bar',
        color: "#6e320e",
        itemStyle: {
            normal: {
                shadowBlur:3,
                shadowColor:"#6e320e",
                shadowOffsetX:0,
                shadowOffsetY:0,
                barBorderRadius: 5
            }
        },
        data: datava2
    }, ]
};