option = {
    color: ['#0052a8', '#013879', '#0057b1', '#0053ac'],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    series: [{
        name: '统计',
        type: 'pie',
        radius: [30, 110],
        center: ['50%', '50%'],
        roseType: 'radius',
        label: {
            show: true,
            formatter: '{d}%',
        },
        emphasis: {
            label: {
                show: true
            }
        },
        data: [{
                value: 25,
                name: 'rose1'
            },
            {
                value: 20,
                name: 'rose2'
            },
            {
                value: 15,
                name: 'rose3'
            },
            {
                value: 10,
                name: 'rose4'
            },
            {
                value: 8,
                name: 'rose5'
            },
            {
                value: 3,
                name: 'rose6'
            },
        ]
    }, {
        name: '占位',
        type: 'pie',
        silent: true,
        center: ['50%', '50%'],
        radius: 30,
        hoverAnimation: false,
        label: {
            show: false,
            position: 'center'
        },
        data: [{
                value: 1,
                name: '占位2'
            },

        ],
        itemStyle: {
            normal: {
                color:  new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#86b1ff'
                        }, {
                            offset: 1,
                            color: '#1e6afe'
                        }]),
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 10,
            },
        }
    }, ]
};