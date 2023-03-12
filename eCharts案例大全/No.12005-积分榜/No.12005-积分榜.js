var i1 = "image:///asset/get/s/data-1551938864032-K4YotlSgZ.jpg";

var i2 = "image:///asset/get/s/data-1551938860676-USZ0n5srf.jpg";

var i3 = "image:///asset/get/s/data-1551938854831-XvsDWILKZ.jpg";


var option = {
    backgroundColor: '#00265f',
    color: [new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
        offset: 0,
        color: "#24c768"
    }, {
        offset: 0.49,
        color: "#ffde00"
    }, {
        offset: 1,
        color: "#ff7800"
    }], false)],
    grid: {
        top: '21%',
        left: '25%',
        right: '10%',
        bottom: '32%',
    },
    yAxis: {
        data: ['xx检测一班', 'xx检测二班', 'xx检测三班', 'xx检测四班', 'xx检测五班'],
        offset: 5,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            color: '#fff',
            fontSize: 16
        }
    },
    xAxis: {
        min: 0,
        max: 100,
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    series: [{
        type: 'bar',
        label: {
            normal: {
                show: true,
                position: 'right',
                fontSize: 18,
                color: "#fff"
            }
        },
        barWidth: '40%',
        data: [30, 40, 60, 70, 100],
        z: 10
    }, {
        name: 'glyph',
        type: 'pictorialBar',
        barGap: '-100%',
        symbolPosition: 'start',
        symbolSize: [28, 28],
        symbolOffset: [-125, 0],
        data: [{
            value: 0,
        }, {
            value: 0,
        }, {
            value: 100,
            symbol: i3,
        }, {
            value: 100,
            symbol: i2,
        }, {
            value: 100,
            symbol: i1,
        }]
    }]
};