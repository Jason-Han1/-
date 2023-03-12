var data = {
    '家宽人工交叉质检': 10,
    '家宽智能自助质检': 85,
    '4G人工交叉质检': 20,
    '4G智能自助质检': 90
};

option = {
    backgroundColor: '#000025',
    color: ['#f1d90b', '#01ed77', '#ce6df8', '#04cdf4'],
    legend: {
        orient: 'vertical',
        formatter: function(name) {
            return "{a|" + name + "} {b|" + '' + "} {x|" + data[name] + "%}"
        },
        textStyle: {
            rich: {
                a: {
                    color: '#2B80FF',
                    fontWeight: 'bold'
                },
                b: {
                    backgroundColor: {
                        image: 'xxx/xxx.jpg'
                    },
                    height: 30
                },
                x: {
                    color: '#2B80FF',
                    fontWeight: 'bold'
                }
            }
        },
        x: '55%',
        y: '28%',
    },
    angleAxis: {
        max: 300,
        clockwise: false, // 顺时针
        startAngle: 180,
        show: false // 隐藏刻度线
    },
    radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,

        },
        axisTick: {
            show: false
        },
    },
    polar: {
        center: ['30%', '30%'],
        radius: '70%' //图形大小
    },
    series: [{
        name: '家宽人工交叉质检',
        type: 'bar',
        data: [Math.round(data['家宽人工交叉质检']*3/2)],
        backgroundStyle: {
            color: 'transparent',
        },
        coordinateSystem: 'polar',
        roundCap: true,
        barWidth: 15,
        barGap: 0.8
    }, {
        name: '家宽智能自助质检',
        type: 'bar',
        data: [Math.round(data['家宽智能自助质检']*3/2)],
        backgroundStyle: {
            color: 'transparent',
        },
        coordinateSystem: 'polar',
        roundCap: true,
        barWidth: 15
    }, {
        name: '4G人工交叉质检',
        type: 'bar',
        data: [Math.round(data['4G人工交叉质检']*3/2)],
        backgroundStyle: {
            color: 'transparent',
        },
        coordinateSystem: 'polar',
        roundCap: true,
        barWidth: 15
    }, {
        name: '4G智能自助质检',
        type: 'bar',
        data: [Math.round(data['4G智能自助质检']*3/2)],
        backgroundStyle: {
            color: 'transparent',
        },
        coordinateSystem: 'polar',
        roundCap: true,
        barWidth: 15
    }]
};