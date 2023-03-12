var cellphone = ['创新活力', '增长潜力', '增长潜力1'];
var colors = ['#27302c', '#3b4e53', '#2b3440']
var data1 = [];
for (var i = 0; i < 3; ++i) {
    data1.push({
        name: cellphone[i],
        value: 2,
        label: {
            position: 'inside',
            rotate: 'tangential',
            color: '#fff',
            fontSize: '20'

        },
        itemStyle: {
            normal: {
                color: colors[i]
            }
        },

    });
}


option = {
    title: {
        text: '',
    },
    tooltip: {
        show: false
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        top: '20%',
        left: '3.5%',
        data: cellphone,
         textStyle: {
                color: '#fff',
                fontSize: '18'
            }
        
    },
    backgroundColor: '#333',
    radar: {
        shape: 'circle',
        scale: true,
        splitNumber: 3,
        indicator: [{
                text: '投资活力',
            },
            {
                text: '服务能力',
            },
            {
                text: '绿色水平',
            },
            {
                text: '发展后劲',
            },
            {
                text: '富裕程度',
            },
            {
                text: '经济实力',
            }

        ],
        center: ['50%', '50%'],
        radius: '42%',
        name: {
            textStyle: {
                color: '#fff',
                fontSize: '18'
            }
        },
        splitArea: {
            show: true
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.5)',
                width: '1'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255, 255, 255, 1)',
                width: '2',
                type: 'dashed'
            }
        }
    },

    series: [{
        type: 'radar',
        zlevel: 3,
        tooltip: {
            show: true
        },
        lineStyle: {
            width: 1,
            opacity: 1
        },
        itemStyle: {

        },

        color: ['#6dc6f9', '#5e9d66', '#a99be5'],
        data: [{
                value: [10, 20, 100, 20, 100, 50],
                name: '创新活力',
                areaStyle: {
                    normal: {
                        opacity: 0.5,
                        color: '#6dc6f9'
                    }
                }
            },
            {
                value: [40, 40, 70, 50, 100, 50],
                name: '增长潜力',
                areaStyle: {
                    normal: {
                        opacity: 0.5,
                        color: '#5e9d66'
                    }
                },

            },
            {
                value: [100, 40, 20, 20, 30, 30],
                name: '增长潜力1',
                areaStyle: {
                    normal: {
                        opacity: 0.5,
                        color: '#a99be5'
                    }
                }
            }
        ]
    }, {
        type: 'sunburst',
        center: ['52%', '50%'],
        nodeClick: false,
        levels: [{}, {
            r0: '60%',
            r: '70%',
            label: {},
            itemStyle: {
                //shadowBlur: 4,
                borderWidth: 8,
                borderColor: '#292a2e',
            }
        }],
        data: data1,

    }]
};