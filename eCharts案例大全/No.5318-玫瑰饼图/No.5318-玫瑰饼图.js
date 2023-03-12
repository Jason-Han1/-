let data = [{
    name: "a",
    value: 40
}, {
    name: "b",
    value: 30
}, {
    name: "c",
    value: 20
}, {
    name: "d",
    value: 10
}]
option = {
    backgroundColor: '#012248',
    color: [
        '#81afe7',
        '#69d4b5',
        '#f08080',
        '#cfd4d8',
        '#ebcc7b',
        '#d2d17c',
        '#5085f2',
        '#8d7fec',
        '#00b7ee',
        '#e75fc3'
    ],
    grid: {
        left: 'center',
        top: 'center',
    },
    tooltip: {
        trigger: 'item',
    },
    calculable: true,
    series: [{
        name: '分布',
        type: 'pie',
        roseType: 'area',
        radius: ['30%', '50%'],
        center: ['50%', '50%'],
        data: data,
        label: {
            normal: {
                show: true,
                formatter: '{b}',
                color: '#ffffff',
                fontSize: 14
            }
        },
    }]
}