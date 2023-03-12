var data = [];
var num = 78.34 / 100 * 40;
for (var i = 0; i <= 40; i++) {
    if (i <= num) {
        data.push({
            value: [0, i],
            name: 'real'
        })
    } else {
        data.push({
            value: [0, i],
            name: 'unreal',
            visualMap: false,
        })
    }

}

option = {
    emphasis: {
        show: false
    },
    visualMap: {
        max: 40,
        show: false,
        hoverLink: false,
        inRange: {
            color: ['rgba(1, 212, 233, 1)', 'rgba(88, 253, 102, 1)', 'rgba(204, 255, 36, 1)', 'rgba(252, 188, 6, 1)']
        },

    },
    series: [{
            name: '',
            type: 'pie',
            radius: ['45%', '55%'],
            center: ['50%', '50%'],
            clockwise: true,
            data: data,
            color: 'transparent',
            hoverAnimation: false,
            legendHoverLink: false,
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    borderColor: '#051F54',
                },
                emphasis: {
                    show: false
                }
            }
        },

    ],
    backgroundColor: "#051F54",
};