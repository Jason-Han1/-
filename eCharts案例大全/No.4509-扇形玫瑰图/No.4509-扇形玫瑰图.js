let data = [{
    name: 'tcp',
    value: 142
}, {
    name: 'ftp',
    value: 165
}, {
    name: 'http',
    value: 198
}, {
    name: 'https',
    value: 230
}, {
    name: 'udp',
    value: 240
}, {
    name: 'imap',
    value: 250
}, {
    name: 'ssh',
    value: 270
}];
let spanAngle = 90;
let repeatedMultiple = 180 / spanAngle;
let addDataLen = parseInt((repeatedMultiple - 1) * data.length);
for (let i = 0; i < addDataLen; i++) {
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

option = {
    color: [
        '#09aabe',
        '#86c200',
        '#ffbb00',
        '#ff6f00',
        '#e31404'
    ],
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    series: [{
            type: 'pie',
            radius: ['0%', '0%'],
            center: ['60%', '80%'],
            clockwise: false,
            label: {
                show: false
            },
            data: [{
                    name: null,
                    value: spanAngle,
                    itemStyle: {
                        color: 'rgba(220,220,220,0)',
                        borderColor: 'rgba(255,255,255,.3)',
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
        },
        {
            type: 'pie',
            startAngle: 0,
            roseType: 'area',
            clockwise: false,
            center: ['60%', '80%'],
            radius: ['15%', '100%'],
            data: data,
            label: {
                show: false
            }
        }

    ]
};