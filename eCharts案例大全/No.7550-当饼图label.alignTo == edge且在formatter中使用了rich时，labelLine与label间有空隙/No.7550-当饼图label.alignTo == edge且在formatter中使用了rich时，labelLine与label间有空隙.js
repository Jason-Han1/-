var data = [{
    name: 'Apple Numbers',
    value: 70
}, {
    name: 'Strawberry Numbers',
    value: 68
}, {
    name: 'Banana Numbers',
    value: 48
}, {
    name: 'Orange Numbers',
    value: 40
}, {
    name: 'Pear Numbers',
    value: 32
}, {
    name: 'Pineapple Numbers',
    value: 27
}, {
    name: 'Grape Numbers',
    value: 18
}];

option = {
    title: [{
        text: '左图：错误示例；右图：原因对比'
    }],
    series: [{
        type: 'pie',
        radius: '25%',
        center: ['50%', '50%'],
        data: data,
        animation: false,
        label: {
            alignTo: 'edge',
            margin: '5%',
            formatter: '{abcdefgh|{b}}',
            rich: {
                abcdefgh: {}
            }
        },
        left: 0,
        right: '50%',
        top: 0,
        bottom: 0,
    }, {
        type: 'pie',
        radius: '25%',
        center: ['50%', '50%'],
        data: data,
        animation: false,
        label: {
            alignTo: 'edge',
            margin: '5%',
            formatter: '{abcdefgh|{b}}',
        },
        left: '50%',
        right: 0,
        top: 0,
        bottom: 0
    }]
};
