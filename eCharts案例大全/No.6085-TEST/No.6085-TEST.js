const center = ['80%', '50%'];
const color = [
    '#09aabe',
    '#86c200',
    '#ffbb00',
    '#ff6f00',
    '#e31404'
];
let data = [{
        name: 'Swiss Federal Institute of Technology in Lausanne',
        value: 1542
    },
    {
        name: 'Hong Kong University of Science and Technology',
        value: 1765
    },
    {
        name: 'Massachusetts Institute Technology',
        value: 1988
    },
    {
        name: 'University of California at Berkeley',
        value: 2160
    },
    {
        name: 'Swiss Federal Institute of Technology in Zurich',
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
        length2: 100
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