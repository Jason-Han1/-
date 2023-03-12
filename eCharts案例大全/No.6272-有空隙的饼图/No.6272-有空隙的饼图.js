const color = [
    '#1576d2',
    '#d14a82',
    '#26c1f2',
    '#a166ff',
    '#1271cc',
    '#272f67'
];
let data = [{
        name: 'Mon',
        value: 182
    },
    {
        name: 'Tue',
        value: 191
    },
    {
        name: 'Wed',
        value: 234
    },
    {
        name: 'Thu',
        value: 290
    },
    {
        name: 'Fri',
        value: 330
    }
];

const dataArcStyle = {
    label: {
        show: true
    },
    labelLine: {
        show: true
    },
    emphasis: {
        labelLine: {
            show: true
        }
    }
}
data = data.map(d => {
    d = Object.assign(d, dataArcStyle)
    return d;
});

const sum = data.reduce((prev, curr) => prev + curr.value, 0);
const invercalVal = sum / 180; // 每个空隙2°
const dataLen = data.length;
for (let index = 0; index < dataLen; index++) {
    data.splice(index * 2 + 1, 0, {
        name: null,
        value: invercalVal,
        tooltip: {
            show: false
        },
        itemStyle: {
            color: 'rgba(0,0,0,0)'
        }
    });
}

option = {
    backgroundColor: '#000',
    color,
    tooltip: {
        show: true
    },
    roundCap: true,
    series: [{
        type: 'pie',
        radius: ['50%', '80%'],
        data
    }]
};