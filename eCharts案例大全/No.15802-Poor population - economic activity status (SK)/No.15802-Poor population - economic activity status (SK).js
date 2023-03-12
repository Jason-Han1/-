option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['Economically inactive', 'Labour force', 'Aged 65 and above', 'Students', 'Aged below 18', 'Homemakers', 'Others', 'Unemployed', 'Full-time', 'Part-time', 'Underemployed']
    },
    series: [{
        name: 'Poor population - economic activity status',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '20%'],

        label: {
            normal: {
                position: 'inner'
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 31635.8,
            name: 'Economically inactive',
            selected: true
        }, {
            value: 9664.2,
            name: 'Labour force'
        }, ]
    }, {
        name: 'Poor population - economic activity status',
        type: 'pie',
        radius: ['30%', '55%'],

        data: [{
            value: 10490.2,
            name: 'Aged 65 and above'
        }, {
            value: 1858.5,
            name: 'Students'
        }, {
            value: 7475.3,
            name: 'Aged below 18'
        }, {
            value: 5616.8,
            name: 'Homemakers'
        }, {
            value: 6195,
            name: 'Others'
        }, {
            value: 1362.9,
            name: 'Unemployed'
        }, {
            value: 6049.8,
            name: 'Full-time'
        }, {
            value: 1932.8,
            name: 'Part-time'
        }, {
            value: 318.7,
            name: 'Underemployed'
        }]
    }]
};