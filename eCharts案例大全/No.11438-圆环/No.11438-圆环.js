var data = [];
var data2 = [];
var healthy = 30;
for (var i = 0; i <= 100; i++) {
    if (i <= healthy) {
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
    
    
    if (i + healthy<=100) {
        data2.push({
            value: [0, i],
            name: 'unreal',
            visualMap: false,
        })
    } else {
        data2.push({
            value: [0, i],
            name: 'real'
        })
    }

}

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{b}:{c}"
    },
    visualMap: {
        max: 100,
        inRange: {
            color: 'red'
        }
    },
    series: [{
            name: '',
            type: 'pie',
            radius: ['65%', '70%'],
            center: ['50%', '50%'],
            clockwise: true,
            data: data,
            color: [
                '#fff',
                "#E6E6E6",
            ],
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
                    borderWidth: 4,
                    borderColor: '#ffffff',
                },
                emphasis: {
                    borderWidth: 0,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },{
            name: '',
            type: 'pie',
            radius: ['60%', '75%'],
            center: ['50%', '50%'],
            clockwise: true,
            data: data2,
            color: "rgba(0,0,0,0)",
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
                    borderWidth: 4,
                    borderType: 'dashed',
                    borderColor: '#fff',
                    shadowColor: 'rgba(142, 152, 241, 0.6)',
                    shadowBlur: 30,
                },
                emphasis: {
                    borderWidth: 0,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },

    ],

    backgroundColor: "#fff",
};