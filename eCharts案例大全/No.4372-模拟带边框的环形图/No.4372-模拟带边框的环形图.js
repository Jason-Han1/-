option = {
    backgroundColor:"rgba(0,0,0,0.7)",
    tooltip: {
        trigger: 'item',
    },
    legend: {
        show: false,
    },
    grid: {
        containLabel: true
    },
    series: [
        {
            name: '',
            type: 'pie',
            hoverAnimation: false,
            legendHoverLink: false,
            radius: ['47%', '60%'],
            center: ['50%', '50%'],
            color: ['rgba(185,199,230,0.3)', 'rgba(65,168,255,0.3)', 'rgba(88,255,65,0.3)', 'rgba(252,227,65,0.3)', 'rgba(255,137,65,0.3)'],
            label: {
                normal: {
                    show: false,
                }
            },
            labelLine: {
                normal: {
                    show: false,
                },

            },
            itemStyle: {
                normal: {
                    borderColor: 'rgba(0,0,0,0)',
                }
            },
            data: [{
                value: 41,
                name: 'A'
            },
            {
                value: 20,
                name: 'B'
            },
            {
                value: 20,
                name: 'C'
            }, {
                value: 20,
                name: 'D'
            }, {
                value: 20,
                name: 'E'
            }
            ]
        },
        {
            name: 'title',
            type: 'pie',
            hoverAnimation: false,
            legendHoverLink: false,
            radius: ['56%', '60%'],
            center: ['50%', '50%'],
            color: ['#b9c7e6', '#41a8ff', '#58ff41', '#fce341', '#ff8941'],
            label: {
                normal: {
                    show: false,
                },
            },
            tooltip: {
                show: false,
            },
            labelLine: {
                normal: {
                    show: false,
                },
            },
            itemStyle: {
                normal: {
                    shadowBlur: 15,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    borderColor: 'rgba(0,0,0,0)',
                }
            },
            data: [{
                value: 41,
                name: ''
            },
            {
                value: 20,
                name: ''
            },
            {
                value: 20,
                name: ''
            }, {
                value: 20,
                name: ''
            }, {
                value: 20,
                name: ''
            }
            ]
        }
    ]
};