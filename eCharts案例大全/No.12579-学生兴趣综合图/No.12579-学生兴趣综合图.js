option = {
    backgroundColor: '#171B22',
    color: ['#2B81EE', '#69C8A1'],
    title: {
        text: 'Versus',
        textStyle: {
            color: '#fff',
        },
    },
    tooltip: {},
    radar: {
        radius: '70%',
        splitNumber: 10,
        axisLine: {
            lineStyle: {
                color: '#fff',
            }
        },
        splitArea: {
            areaStyle: {
                color: 'rgba(0,0,0,0)',
                opacity: 1,
                shadowBlur: 45,
                shadowColor: 'rgba(0,0,0,.5)',
                shadowOffsetX: 0,
                shadowOffsetY: 15
            }
        },
        name: {
            show: false
        },
        splitLine: {
            width: 100
        },
        indicator: [{
                text: 'Overall',
                max: 100
            },
            {
                text: 'Potential',
                max: 100
            },
            {
                text: 'Dribbling',
                max: 100
            },
            {
                text: 'Finishing',
                max: 100
            },
            {
                text: 'Positioning',
                max: 100
            },
            {
                text: 'Stamina',
                max: 100
            }
        ]
    },
    series: [{
        type: 'radar',
        symbolSize: 0,
        areaStyle: {
            normal: {
                shadowBlur: 13,
                shadowColor: 'rgba(0,0,0,.2)',
                shadowOffsetX: 0,
                shadowOffsetY: 10,
                opacity: '.1'
            }
        },
        label: {
            show: true,
            formatter: '{b}'
        },
        lineStyle: {

            width: 5
        },
        data: [{
                value: [89, 91, 80, 94, 93, 89],
                name: 'Kane'
            },
            {
                value: [89, 89, 89, 93, 92, 76],
                name: 'Agüero'
            }
        ]
    }],

};