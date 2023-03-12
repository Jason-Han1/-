const center = ['50%', '80%'];
const color = [
    '#09aabe',
    '#86c200',
    '#ffbb00',
    '#ff6f00',
    '#e31404'
];
let data = [{
        name: 'A',
        value: 1542
    },
    {
        name: 'B',
        value: 1765
    },
    {
        name: 'C',
        value: 1988
    },
    {
        name: 'D',
        value: 2160
    },
    {
        name: 'E',
        value: 2580
    }
];
const dataArcStyle = {
    label: {
        show: true
    },
    labelLine: {
        show: true,
        length: 0,
        // length2: 100
    },
    emphasis: {
        labelLine: {
            show: true
        }
    }
};
data = data.map(d => {
    d = Object.assign(d, dataArcStyle);
    return d;
});
const originDataLen = data.length;
const spanAngle = 90;
const repeatedMultiple = 180 / spanAngle;
const addDataLen = parseInt((repeatedMultiple - 1) * originDataLen);
for (let index = 0; index < addDataLen; index++) {
    data.push({
        name: null,
        value: 0,
        itemStyle: {
            color: 'rgba(0,0,0,0)',
        },
        tooltip: {
            show: false
        }
    });
}
const dataArc = {
    type: 'pie',
    startAngle: 0,
    roseType: 'area',
    clockwise: false,
    center,
    radius: ['30%', '70%'],
    data,
    label: {
        show: false
    }
};
const backgroundArc0 = {
    type: 'pie',
    radius: ['0%', '0%'],
    center,
    silent: true,
    clockwise: false,
    label: {
        show: false
    },
    data: [{
            name: null,
            value: spanAngle,
            itemStyle: {
                color: 'rgba(220,220,220,0)',
                borderColor:'rgba(255,255,255,.3)',
            }
        },
        {
            name: null,
            value: 360 - spanAngle,
            itemStyle: {
                color: 'rgba(220,220,220,0)',
            }
        }
    ]
};
const backgroundArc1 = JSON.parse(JSON.stringify(backgroundArc0));
option = {
    backgroundColor: '#11011e',
    color,
    tooltip: {
        show: true
    },
    series: [backgroundArc0, backgroundArc1, dataArc]
};