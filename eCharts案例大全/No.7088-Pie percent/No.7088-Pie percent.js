let value = 0.4;
let totalPercent = 360;
let titlePercent = 40; // info占比
let seriesData = [{ // 块状
    value: (totalPercent - titlePercent) * value,
    itemStyle: {
        color: '#F64D0C'
    }
}, {
    value: (totalPercent - titlePercent) * (1 - value),
    itemStyle: {
        color: '#E7E6E9'
    }
}, { // info部分空间
    value: titlePercent,
    itemStyle: {
        color: '#fff'
    }
}];
option = {
    backgroundColor: '#fff',
    title: {
        text: `Pie percent, ${value * 100}%`,
        left: '50%',
        top: 'middle',
        textStyle: {
            fontSize: 40
        }
    },
    series: {
        type: 'pie',
        silent: true,
        startAngle: titlePercent / totalPercent / 2 * 360,
        radius: ['50%', '70%'],
        clockwise: false,
        label: {
            show: false,
            position: 'center'
        },
        labelLine: {
            show: false
        },
        data: seriesData
    }
};